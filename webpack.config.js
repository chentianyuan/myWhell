var path = require('path')
var webpack = require('webpack')


module.exports = {
	//项目入口文件
	entry:'./src/main.js',
	//出口文件为dist文件夹,打包后的文件名叫build.js
	output:{
		//要将其转换为绝对路径，需使用path模块下的resolve函数
		path:path.resolve(__dirname,'./dist'),
		filename:'build.js',
		//publicPath设置的是服务器地址的绝对路径，相当于给向服务器的请求添加了/dist，让其请求服务器dist目录下的资源
		//当使用style-lolader时必须正确配置publicPath，因为输出文件夹在dist，资源请求路径也应该在dist文件夹下
		publicPath: '/dist/'
	},
	//其他解决方案
	resolve:{
		//省略扩展名,首项不能为''
		//使得引入的时候不要加扩展名
		extensions:['*','.js','.vue'],
		alias:{
			vue: 'vue/dist/vue.js'
		}
	},
	//模块特定的编译规则
	module:{
		//加载器配置
		loaders:[{
			test:/\.js$/,
			//通过babel转换
			loader:'babel-loader',
			//不用转换node_modules文件夹
			exclude:/node_modules/,
			query:{
				//此处对babel的配置本应存在于.babelrc中,现写在配置js loader的query参数中
				//此处对presets预置属性的配置分别支持es6和es7
				"presets":['es2015','stage-0'],
				//在转换 ES2015 语法为 ECMAScript 5 的语法时，babel 会需要一些辅助函数，例如 _extend。
				//babel 默认会将这些辅助函数内联到每一个 js 文件里，这样文件多的时候，项目就会很大。
		       //所以 babel 提供了 transform-runtime 来将这些辅助函数“搬”到一个单独的模块 babel-runtime 中
		       //这样做能减小项目文件的大小。
				"plugins":['transform-runtime']
			}
		},
		{
			test:/\.vue$/,
			loader:'vue-loader',
			exclude:/node_modules/
		},
		{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }
		]
	}
}

