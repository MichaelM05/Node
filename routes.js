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

        app.put('/inventario/',function(requestt,responsee){
            
             queries.update(requestt.body,responsee);
        })

        app.delete('/inventario/:id/',function(requestt,responsee){
            
             queries.delete(requestt.params.id,responsee);
        })


    }
}

module.exports = new http();