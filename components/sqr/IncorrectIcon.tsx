const IncorrectIcon: React.VFC<React.SVGAttributes<SVGElement>> = (props) => {
	return (
		<svg version="1.1" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g fill="none" fillRule="evenodd">
				<g transform="translate(-348.5 -445)" stroke="#E70000">
					<g transform="translate(348.5 428)">
						<g transform="translate(0 17)">
							<circle cx="13.5" cy="13.5" r="13" fill="#F5F5F5" />
							<g transform="translate(7.5 7.6276)" strokeWidth="3">
								<line id="a" x1="1.3642e-12" x2="12.035" y2="12.035" />
								<line x2="12.035" y1="12.035" />
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};
export default IncorrectIcon;
