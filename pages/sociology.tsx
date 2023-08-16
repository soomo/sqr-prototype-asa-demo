import dynamic from 'next/dynamic';

import sociologyPage from '../fixtures/sociologyPage';

import type { NextPage } from 'next';

const Layout = dynamic(() => import('../components/Layout').then((m) => m.default), { ssr: false });

const Sociology: NextPage = () => {
	return <Layout page={sociologyPage} />;
};

export default Sociology;
