# create-react-app+antd+less配置
1、create-react-app (文件夹名称)
2、npm run eject
3、npm install less-loader less --save-dev
修改config文件夹下的webpack.config.dev.js和webpack.config.prod.js文件(都需要修改) 
查找 ：exclude 
原本的 exclude: [/\.js$/, /\.html$/, /\.json$/], 
修改为 exclude: [/\.html$/, /\.(js|jsx)$/, /\.(css|less)$/, /\.json$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],

查找：test: /.css$/ 
原本的 test: /\.css$/, 
修改为 test: /\.(css|less)$/,

在这个test的下面找到use，添加loader

  use: [  
    {...},
    {...},
    {
      loader: require.resolve('less-loader') // compiles Less to CSS
    }
  ],
  4、npm install antd --save-dev
  5、npm install –save-dev babel-plugin-import
  修改 package.json
  "babel": {
      "presets": [
        "react-app"
      ],
      "plugins": [
        [
          "import",
          {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    },
    6、npm start
