module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactScrollTop',
      externals: {
        react: 'React',
        'react-router-dom': 'ReactRouterDom'
      }
    }
  }
}
