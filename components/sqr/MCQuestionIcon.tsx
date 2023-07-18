const MCQuestionIcon: React.VFC<React.HTMLAttributes<SVGElement>> = (props) => {
	return (
		<svg width={30} height={30} {...props}>
			<g fill="none" fillRule="evenodd">
				<g fill="#F5F5F5">
					<path d="M-387-44h1448v419H-387z" />
					<path d="M-385-44h1448v419H-385z" />
				</g>
				<path
					d="M0 0h26v26H0V0zm10.2 15.218l8.968-8.969c.389-.388 1.036-.388 1.457 0l1.166 1.166a1.056 1.056 0 010 1.457L10.91 19.75c-.388.388-1.036.388-1.456 0l-5.246-5.245a1.097 1.097 0 010-1.49l1.166-1.133a.998.998 0 011.457 0l3.367 3.335z"
					fill="#5F01DF"
				/>
			</g>
		</svg>
	);
};

export default MCQuestionIcon;
