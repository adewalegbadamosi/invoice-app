
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
  
});


module.exports = {
      
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
                  
          {
            test: /\.css$/,           
            loader: "css-loader"
                      
           }
          
       
        ]
      },
    plugins: [htmlWebpackPlugin]
    
    };

  