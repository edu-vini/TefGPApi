class TefGPApi
{
    static url = 'http://127.0.0.1:8000/api'
    static ini = {
        method: 'POST',
        headers: this.headers()
    }
    
    static headers(){
        let myHeaders = new Headers();
        myHeaders.append('Content-Type','application/json');
        return myHeaders;
    }

    static async imprimirUltimoComprovante(callback = null){
        await fetch(this.url.concat('/tefgp-adm'), this.ini)
            .then(function(response){
                if(callback){
                    callback(response.status);
                }
            })
    }

    static async cancelarRequisicaoTef(body, callback){
        this.ini.body = body;
        await fetch(this.url.concat('/tefgp-cancel'), this.ini)
            .then(function(response){
                if(callback){
                    callback(response.status);
                }
            })
    }

    static async confirmacaoRequisicaoTef(body, callback){
        this.ini.body = body;
        await fetch(this.url.concat('/tefgp-conf'), this.ini)
            .then(function(response){
                if(callback){
                    callback(response.status);
                }
            })
    }

    static async desfazerTransacao(body, callback){
        this.ini.body = body;
        await fetch(this.url.concat('/tefgp-desfaz'), this.ini)
            .then(function(response){
                if(callback){
                    callback(response.status);
                }
            })
    }

    static async impressaoTef(body, callback){
        this.ini.body = body;
        await fetch(this.url.concat('/tefgp-print'), this.ini)
            .then(function(response){
                if(callback){
                    callback(response.status);
                }
            })
    }

    static async requisicaoTef(body, callback){
        this.ini.body = body;
        await fetch(this.url.concat('/tefgp-req'), this.ini)
            .then(function(response){
                if(callback){
                    callback(response.status);
                }
            })
    }
}
