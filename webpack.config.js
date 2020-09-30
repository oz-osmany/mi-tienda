const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniExtractPlugin=require('mini-css-extract-plugin');
const nodePlugin=require('nodemon-webpack-plugin');
const path=require('path');
const CompressionPlugin=require('compression-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        App:'./src/Apps.js',
        Product: './src/Product.js'
    },

    devtool: 'inline-source-map',
   output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].js"
    },
      module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                     miniExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images/",
                            useRelativePath: true
                        }
                    },
                ]
            },
            {
                loader: "image-webpack-loader",
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    webp: {
                        quality: 75
                    }
                }
            }


        ]
    },
    /*resolve: {
        extensions: ['.js', '.css','.scss']
    },*/
    plugins: [
        new CompressionPlugin({
            include:/\/includes/,
        }),

        new nodePlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            minify: false
        }),
        new HtmlWebPackPlugin({
            template: './src/departamento.html',
            filename: './departamento.html',
            minify: false
        }),
        new miniExtractPlugin({
            filename: "styles.css",
            //chunkFilename:"[id].css",
        })
    ]
}