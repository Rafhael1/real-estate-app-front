import injectDevServer from '@cypress/react/plugins/react-scripts';

export default (on, config) => {
	injectDevServer(on, config);
	return config;
};
