var config = {
	database: {
		host:	  '128.199.223.13', 	// database host
		user: 	  'rusdi.grevia', 		// your database username
		password: 'rusdi!@#$2012', 		// your database password
		port: 	  3306, 		// default MySQL port
		database: 	  'apinode', 		// your database name
	},
    model: {
        start: 0,
		limit: 10
    },
	server: {
		host: '127.0.0.1',
		port: '3000'
	},
	secret : 'supersecret'
}

module.exports = config
