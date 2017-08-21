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


    this.insert = function(data, response){
        connection.get(function(er,cn){
            cn.query('insert into inventario set ?', data, function(error,result){
                cn.release();
                if(error){
                    response.send({ Estado : 'error'});
                }else {
                    response.send({ Estado : 'insertado'});
                }
            });
        })

    }


}

module.exports = new methodDB();