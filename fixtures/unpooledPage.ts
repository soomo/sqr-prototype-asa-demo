import type { Page, PageElement } from '../types';

const elements: PageElement[] = [
	{
		type: 'NG::Soomo::Text',
		familyId: 'text-1',
		body: `
			<h1>UNPOOLED Sample Page</h1>
			<p>Pop-up typewriter crucifix subway tile pork belly quinoa. Meh la croix polaroid prism kinfolk hexagon health goth. Tilde raw denim venmo fanny pack, tumeric man bun lyft roof party bodega boys thundercats lumbersexual kombucha ramps. Small batch pug PBR&B taxidermy. Ramps Brooklyn tbh hoodie. Ennui pug yr selfies leggings, keytar next level Brooklyn craft beer blackbird spyplane edison bulb tacos tonx bespoke humblebrag. Plaid la croix live-edge snackwave salvia.</p>
		`
	},
	{
		type: 'NG::Soomo::Text',
		familyId: 'text-2',
		body: `
			<p>Small batch seitan 3 wolf moon, cliche squid helvetica photo booth offal typewriter. Shoreditch street art glossier, bodega boys grailed kale chips neutra paleo slow-carb fixie cray. Neutra blackbird spyplane kitsch, tonx kickstarter man bun pabst semiotics iPhone literally ethical sustainable chambray flexitarian. Williamsburg pitchfork cloud bread lyft humblebrag, selvage gorpcore. Messenger bag lumbersexual jianbing godard gluten-free pabst thundercats microdosing bespoke listicle. Portland +1 gatekeep asymmetrical austin. Beard tumblr venmo semiotics, activated charcoal portland vibecession cold-pressed food truck crucifix.</p>
			<p>Put a bird on it irony distillery man braid, gochujang raclette solarpunk crucifix gluten-free cold-pressed air plant pabst ugh. Copper mug brunch listicle hell of viral hella flexitarian grailed etsy. Gastropub cold-pressed vape banh mi marfa pinterest. Tonx migas raclette keffiyeh.</p>
		`
	}
];

const unpooledPage: Page = {
	familyId: 'unpooled-page',
	elements
};

export default unpooledPage;
