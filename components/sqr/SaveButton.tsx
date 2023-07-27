import { css } from '@emotion/core';

import { buttonStyles } from './buttonStyles';

interface Props {
	onClick: () => void;
	disabled?: boolean;
	isRequestInProgress?: boolean;
}

const SaveButton: React.VFC<Props> = ({ onClick, disabled, isRequestInProgress }) => {
	return (
		<>
			<hr css={dividerStyles} />
			<button onClick={onClick} css={buttonStyles} disabled={disabled || isRequestInProgress}>
				{isRequestInProgress ? 'Saving...' : 'Save'}
			</button>
		</>
	);
};

export default SaveButton;

const dividerStyles = css`
	margin: 2rem 0 1.25rem;
	border-top: 1px solid #ccc;
	border-bottom: none;
`;
