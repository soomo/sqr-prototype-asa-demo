const CorrectIcon: React.VFC<React.SVGAttributes<SVGElement>> = (props) => {
	return (
		<svg version="1.1" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g fill="none" fillRule="evenodd">
				<g transform="translate(-348.5 -372)">
					<g transform="translate(305.5 303)">
						<g transform="translate(43 53)">
							<g transform="translate(0 16)">
								<circle cx="13.5" cy="13.5" r="13" fill="#F5F5F5" stroke="#007E0C" />
								<polygon
									points="19.216 8 21.57 10.354 12.048 19.875 5.5 13.326 7.8536 10.973 12.048 15.167"
									fill="#007E0C"
									fillRule="nonzero"
								/>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};
export default CorrectIcon;
