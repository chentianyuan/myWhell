import Vue from 'vue'
import App from './components/app.vue'
import router from './routes'


new Vue({
	//注入router的配置文件
	router,
	data:{
		message:'mdzz'
	},
	components:{ App }
}).$mount("#app")
