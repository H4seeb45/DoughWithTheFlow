module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.bundle.js'
       },
       devServer:{
           contentBase: path.join(__dirname,"dist")
       },
       loader: 'file-loader',
            options: {
              esModule: false,
            },
       mode: "development",
       devtool: "source-map"
    }