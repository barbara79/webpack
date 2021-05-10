module.exports = {
	target: "web",
	output: {
		chunkFilename: "[name].web.js",
		crossOriginLoading: "anonymous",
		trustedTypesPolicy: true
	},
	performance: {
		hints: false
	},
	optimization: {
		minimize: false
	}
};
