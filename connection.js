var mysql = require('mysql');

function connection(){

    this.pool = null;

    this.iniciar = function(){
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host : 'localhost',
            user : 'root',
            password : 'root',
            database: 'projectdb'
        })
    }

    this.get = function(callback){
        this.pool.getConnection(function(error,connection){
            callback(error,connection);
        })
    }
}

module.exports = new connection();