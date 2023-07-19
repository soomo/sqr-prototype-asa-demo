import dynamic from 'next/dynamic';

import unpooledPage from '../fixtures/unpooledPage';

import type { NextPage } from 'next';

const Layout = dynamic(() => import('../components/Layout').then((m) => m.default), { ssr: false });

const Unpooled: NextPage = () => {
	return <Layout page={unpooledPage} backUrl="/pooled" />;
};

export default Unpooled;
