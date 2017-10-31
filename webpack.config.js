var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist')

// This is the webpack configuration file. There are several things going on here. 

// 1. context: this tells webpack where to look for the files. This will be the App folder
// 2. entry: this tells webpack which file to read first. This will be a file called 'main.js' inside of the App folder
// 3. output: This tells webpack where to put the files after they have been bundled. 
// 4. module: By default webpack only knows how to bundle JavaScript files, but we can use loaders to teach it how to deal with other files. 
module.exports = {
    context: APP_DIR,
    entry: {
        app: './app.js',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?/, include: APP_DIR, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(?:png|jpg|svg)$/, loader: "url-loader", query: { limit: 10000 } }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin()
    ]
};