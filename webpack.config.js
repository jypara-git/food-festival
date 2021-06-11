const path = require("path");
const webpack  = require("webpack");

module.exports = { 
    // entry point is the root of the bundle and beginning of the dependency graph
    entry: './assets/js/script.js',
    // output that bundled code to a folder that we specify
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    // the final piece of our basic setup will provide the mode in which we want webpack to return
    mode: 'development'
};