/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	plugins: {
		'houdini-svelte': {},
		'@grafbase/houdini': {}
	},
	watchSchema: {
		url: 'env:PUBLIC_GRAFBASE_API_URL'
	},
	scalars: {
		URL: 'string'
	}
};

export default config;
