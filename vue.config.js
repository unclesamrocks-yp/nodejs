module.exports = {
	devServer: {
		before(app) {
			app.use(require('esm')(module)('./server/api/').default)
		},
	}
}