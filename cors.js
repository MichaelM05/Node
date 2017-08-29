function AllowCrossDomain(){
    this.permissions = function(req, res, next){
        /** * permite cualquier dominio, si que quiere uno en especifico se debe especificar el dominio
        res.header('Access-Control-Allow-Origin','*');
        */
        var arrayDomain = [
            'http//:localhost:4200',
            'http//:google.com',
        ];

        var origen = req.headers.origin;
        if(arrayDomain.indexOf(origen) >= -1){
            res.setHeader('Access-Control-Allow-Origin',origen)
        }
        
        res.header('Access-Control-Allow-Headers','Content-Type');
        res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
        next();
    }
}

module.exports = new AllowCrossDomain();