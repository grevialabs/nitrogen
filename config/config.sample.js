
var config = {
    db: {
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'apinode',
        port: 3306,
    },
    model: {
        start: 0,
		limit: 10
    },
    env: 'dev',
    debug : true,
    node : {
        host: '127.0.0.1',
        port: 3001,
    }

}

module.exports = config