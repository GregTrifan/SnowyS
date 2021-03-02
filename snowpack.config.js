const plugins = [
    '@snowpack/plugin-svelte'
  ]


module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins:plugins,
    routes: [
        {"match": "routes", "src": ".*", "dest": "/index.html"}
    ],
  }