var connection = require('./connection');


function methodDB(){

    this.select = function(responsee){
        connection.get(function(er, cn){
            cn.query('select * from inventario', function(error,result){
                cn.release();
                if(error){
                    responsee.send({ Estado : 'error'});
                }else {
                    responsee.send(result);
                }
            });
        })
    }


    this.selectByID = function(id, responsee){
        connection.get(function(er, cn){
            cn.query('select * from inventario where id =?',id, function(error,result){
                cn.release();
                if(error){
                    responsee.send({ Estado : 'error'});
                }else {
                    responsee.send(result);
                }
            });
        })
    }

}

module.exports = new methodDB();