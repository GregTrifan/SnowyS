module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    "plugins": [
        '@snowpack/plugin-svelte'
    ],
    "routes": [
        {"match": "routes", "src": ".*", "dest": "/index.html"}
    ],
  }