import dynamic from 'next/dynamic';

import pooledPage from '../fixtures/pooledPage';

import type { NextPage } from 'next';

const Layout = dynamic(() => import('../components/Layout').then((m) => m.default), { ssr: false });

const Pooled: NextPage = () => {
	return <Layout page={pooledPage} nextUrl="/unpooled" />;
};

export default Pooled;
