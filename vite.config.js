import { resolve } from 'path'
// https://vite.dev/config/
// https://vite.dev/config/shared-options.html#css-devsourcemap
// vite.config.js
export default {
    // config options
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                mario: resolve(__dirname, 'pages/mario/index.html'),
                mortal: resolve(__dirname, 'pages/mortal/index.html')
                
            }
        }
    }
}