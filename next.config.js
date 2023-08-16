/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['@soomo/lib']);

module.exports = withTM({
	redirects() {
		return [
			{
				source: '/',
				destination: '/sociology',
				permanent: false
			}
		];
	}
});
