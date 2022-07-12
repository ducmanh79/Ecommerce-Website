const axios =  require('axios')
import Config from '../config.js'

export default {
	__getHeaders(){
		let headers = {};
		headers.Accept = 'application/json'
		return headers;
	},
	get(url){
		let headers = this.__getHeaders();
		return axios.get(Config.API_URL + url, headers)
	}
}