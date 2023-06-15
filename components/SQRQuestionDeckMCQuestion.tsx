import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaChevronUp, FaChevronDown, FaCheck, FaTimes } from 'react-icons/fa';
import { css } from '@emotion/core';

import { QuestionChoices, QuestionPrompt } from '@soomo/lib/components/shared/Question';
import { FamilyId } from '@soomo/lib/types/WebtextManifest';
import shuffle from '@soomo/lib/utils/shuffle';

import type { MCQuestionChoice, MCQuestionElement } from '@soomo/lib/types';
import type { SaveMCQuestionResponse } from '../pages/api/save_sqr_mc_question';

const pivotarIconProps = {
	size: 21,
	css: css`
		color: #5f01df;
	`,
	'aria-hidden': 'true' as const
};

interface Props {
	question: MCQuestionElement;
	expanded?: boolean;
	onToggleExpanded: (familyId: string) => void;
	isInstructorView?: boolean;
	correctChoice?: MCQuestionChoice;
}

const SQRQuestionDeckMCQuestion: React.VFC<Props> = ({
	question,
	expanded,
	onToggleExpanded,
	isInstructorView,
	correctChoice
}) => {
	const { family_id, body, choices } = question;
	const contentDivId = `${family_id}-content`;

	const [selectedChoiceFamilyId, setSelectedChoiceFamilyId] = useState<FamilyId | null>(null);
	const [seed, setSeed] = useState(0);
	const [response, setResponse] = useState<SaveMCQuestionResponse | null>(null);

	const shuffledChoices = useMemo(
		() => shuffle({ list: choices, key: family_id, seed }),
		[choices, family_id, seed]
	);

	useEffect(() => {
		if (isInstructorView && correctChoice) {
			setResponse({
				correct: true,
				rejoinder: correctChoice.rejoinder
			});
			setSelectedChoiceFamilyId(correctChoice.family_id);
		} else {
			setResponse(null);
			setSelectedChoiceFamilyId(null);
		}
	}, [correctChoice, isInstructorView]);

	const handleClick = useCallback(() => {
		onToggleExpanded(family_id);
	}, [family_id, onToggleExpanded]);

	const handleChangeSelectedChoice = useCallback((selectedChoiceFamilyId: FamilyId) => {
		setSelectedChoiceFamilyId(selectedChoiceFamilyId);
	}, []);

	const handleSubmit = useCallback(async () => {
		const res = await fetch(`/api/save_sqr_mc_question`, {
			method: 'POST',
			body: JSON.stringify({
				question_family_id: family_id,
				choice_family_id: selectedChoiceFamilyId
			})
		});
		const json = await res.json();
		setResponse(json);
	}, [family_id, selectedChoiceFamilyId]);

	return (
		<div css={styles}>
			<button
				className="prompt-and-pivotar"
				aria-expanded={expanded}
				aria-controls={contentDivId}
				data-answered={response != null}
				onClick={handleClick}>
				<div className="correctness-and-prompt">
					{response != null && (
						<div className="correctness" data-correct={response.correct}>
							{response.correct ? (
								<>
									<FaCheck />
									<span>Correct</span>
								</>
							) : (
								<>
									<FaTimes />
									<span>Incorrect</span>
								</>
							)}
						</div>
					)}
					<QuestionPrompt body={body} />
				</div>
				{expanded ? <FaChevronUp {...pivotarIconProps} /> : <FaChevronDown {...pivotarIconProps} />}
			</button>
			<div id={contentDivId} className="content" hidden={!expanded}>
				<QuestionChoices
					questionFamilyId={family_id}
					choices={isInstructorView ? choices : shuffledChoices}
					disabled={isInstructorView || response != null}
					onChangeSelectedChoice={handleChangeSelectedChoice}
					selectedChoiceFamilyId={selectedChoiceFamilyId}
				/>
				<div className="rejoinder-and-try-again">
					<div
						className="rejoinder"
						{...(response != null
							? {
									'data-correct': response.correct
							  }
							: {})}>
						{response != null && (
							<>
								<span className="correctness">{response.correct ? 'Correct.' : 'Incorrect.'}</span>{' '}
								<span dangerouslySetInnerHTML={{ __html: response.rejoinder }} />
							</>
						)}
					</div>
					{response != null && !response.correct && (
						<div className="try-again">
							<span className="help-text">
								The Try Again button will test your knowledge with a similar multiple-choice
								question.
							</span>
							<button>Try Again</button>
						</div>
					)}
				</div>
				{!isInstructorView && response == null && (
					<div className="divider-and-save">
						<hr />
						<button disabled={selectedChoiceFamilyId == null} onClick={handleSubmit}>
							Save
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default SQRQuestionDeckMCQuestion;

const styles = css`
	border: 1px solid #c9c9c9;
	border-radius: 0.5rem;

	.prompt-and-pivotar {
		padding: 1rem 1.5rem;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: flex-start;
		column-gap: 1.5rem;
		font: inherit;
		border: none;
		background: none;
		cursor: pointer;
		text-align: initial;

		&[aria-expanded='false'][data-answered='true'] .question-body {
			color: rgba(0, 0, 0, 0.5);
		}

		.correctness {
			display: inline-flex;
			margin-right: 0.75rem;
			align-items: baseline;
			font-size: 18px;
			line-height: 30px;
			font-weight: 500;
			font-style: italic;
			column-gap: 0.5rem;

			svg {
				position: relative;
				bottom: -2px;
			}

			&[data-correct='true'] {
				color: #007e0c;
			}

			&[data-correct='false'] {
				color: #e70000;
			}
		}

		// QuestionPrompt outer div
		div:last-of-type {
			display: inline;
		}

		// QuestionPrompt inner div
		.question-body {
			display: inline;
			margin: 0;
		}
	}

	.content {
		fieldset {
			margin: 0;
			padding: 0;
			border: none;
		}

		.question-choices {
			padding: 0 2rem;
			display: grid;
			grid-template-columns: auto 1fr;
			align-items: flex-start;
			column-gap: 1.5rem;
			row-gap: 1rem;
			font-size: 18px;
			line-height: 22px;

			> div {
				display: contents;
			}

			input[type='radio'] {
				width: 1.5rem;
				height: 1.5rem;
				accent-color: #5f01df;
			}
		}

		.divider-and-save {
			padding: 1.5rem 2rem;
		}

		hr {
			margin: 0 0 1.25rem;
			border-top: 1px solid #ccc;
			border-bottom: none;
		}

		button {
			display: flex;
			margin-left: auto;
			padding: 1rem 1.5rem;
			border: 2px solid;
			border-radius: 6px;
			font: inherit;
			font-size: 18px;
			line-height: 20px;
			font-weight: 500;
			cursor: pointer;

			&:disabled {
				border-color: #585858;
				color: #585858;
			}

			&:not(:disabled) {
				background: #5f01df;
				border-color: transparent;
				color: #fff;
			}

			&:focus {
				outline-width: 2px;
				outline-style: solid;
				outline-offset: 2px;
			}
		}

		.rejoinder-and-try-again {
			padding: 0 2rem 1rem 0;

			.rejoinder {
				font-size: 18px;
				line-height: 30px;
				font-style: italic;
				color: #5f5f5f;
				background: #fff;

				&:not(:empty) {
					margin-top: 1.5rem;
					padding: 1rem 2rem 1.5rem;
				}

				.correctness {
					font-weight: 500;
				}

				&[data-correct='true'] .correctness {
					color: #007e0c;
				}

				&[data-correct='false'] .correctness {
						color: #e70000;
					}
				}
			}

			.try-again {
				display: grid;
				padding: 1rem 0 0.5rem 2rem;
				grid-template-columns: 1fr auto;
				align-items: center;
				column-gap: 5rem;

				.help-text {
					font-size: 14px;
					line-height: 18px;
					color: #545454;
				}
			}
		}
	}
`;
