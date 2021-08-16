require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios');
const qs = require('qs');
const cors = require('cors')

app.use(cors())
app.get('/', function (req, res) {
	axios({
	  method: 'GET',
	  url: `http://api.ipapi.com/${req.query.ip_address}?access_key=${process.env.IPAPI_API_KEY}&format=1`,
	})
	.then(function (response) {
		// console.log(response)
		//37.19.212.160
		res.send(response.data)
	})
	.catch(function (error) {
		res.status(500).send(error)
	});
})
 
app.listen(process.env.PORT || 3000)