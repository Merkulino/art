export class Post{

    _id;
    _nome;

    constructor(){
        console.log('instanciou objketo')
    }
    
    get getNome(){
        return this._nome;
    }

    set setNome(nome){
        this._nome = nome;
    }


}


