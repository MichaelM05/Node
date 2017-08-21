var queries = require('./queries');

function http(){
    this.config = function(app){
        app.get('/inventario',function(requestt,responsee){

            queries.select(responsee);
        })
        app.get('/inventario/:id/',function(requestt,responsee){
           
            queries.selectByID(requestt.params.id,responsee);
        })

        app.post('/inventario/',function(requestt,responsee){
            
             queries.insert(requestt.body,responsee);
         })
    }
}

module.exports = new http();