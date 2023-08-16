import dynamic from 'next/dynamic';

import ciagPage from '../fixtures/ciagPage';

import type { NextPage } from 'next';

const Layout = dynamic(() => import('../components/Layout').then((m) => m.default), { ssr: false });

const CIAG: NextPage = () => {
	return <Layout page={ciagPage} />;
};

export default CIAG;
