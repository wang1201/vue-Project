
//vue-cli3搭建的项目，设计原则是“0配置”，也就是项目初始化之后，没有
//没有了webpack.config.js或者build文件夹，需要自己修改的配置，就要手动新建vue.config.js
//因为vue是一个文件一个组件，因此使用webpack打包引入比较方便，webpack只是打包工具，可以不使用用其他的
const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}



module.exports = {
    devServer: {
      port: 8000,
      proxy:{
        '/my':{
          target:' http://m.maoyan.com/',
          changeOrigin:true,
          pathRewrite:{
            '^/my':'',
          }
        }
      }
    },
    chainWebpack  (config)  {//webpack建立api，用于生成和修改webpack配置
       config 
            .resolve
            .alias
            .set('@styles', resolve('src/stylesheets'))
            .set('@libs', resolve('src/libs'))
            .set('@com', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
            .set('@util', resolve('src/util'))
           
            
    }
}