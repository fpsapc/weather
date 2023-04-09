const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a09942f575msh4b4aad2fa58f484p1019ffjsnd12783d8734d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lahore', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));