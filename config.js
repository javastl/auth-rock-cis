const defaultAuthConfig = {
	cacheLocation: 'localstorage',
	authorizationParams: {
		scope: 'openid profile email',
	},
};

const config = {
	auth: {
		...defaultAuthConfig,
		domain: 'auth-rocks-faithful-adamant-tiger.cic-demo-platform.auth0app.com',
		clientId: '8P9Tw8GB6nEAjwfwzODeOQXrtPy4MSPl',
		// UNCOMMENT the following line to test the private API
		audience: ['api://authrocks/'],
	},
	app: {
		enableSilentAuth: false,
		port: 3000,
	},
	server: {
		permissions: ['authRocks'],
	},
};

export default config;
