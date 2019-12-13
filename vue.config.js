const webpack = require('webpack');
module.exports = {
    // lintOnSave: process.env.NODE_ENV !== 'production'
    lintOnSave: false,
    configureWebpack: {//引入jquery
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
}