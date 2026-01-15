// class formulaire v1
// enregistre les données du formulaire en format dans le localstorage

class formulaire{

    constructor(id){
        this.id =id;
        this.formulaire = document.getElementById(id);
        this.objet_formulaire =new FormData();
        this.liste = new Array();
    }

    
}