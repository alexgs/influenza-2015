var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

var babelConfig = {
    plugins: require( './babel.plugins' ),
    presets: require( './babel.presets' )
};

module.exports = {
    entry: {
        'vendor': './src/vendor.js',
        'app': './src/index.jsx'
    },

    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: babelConfig.plugins,
                    presets: babelConfig.presets
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin( {
            name: [ 'app', 'vendor' ]
        } ),

        new HtmlWebpackPlugin( {
            template: './src/index.html'
        } )
    ]
};
