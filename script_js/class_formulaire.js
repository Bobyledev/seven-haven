// class formulaire v1
// enregistre les données du formulaire en format dans le localstorage

class formulaire{

    constructor(id) {
        this.id = id;
        this.formulaireHTML = document.getElementById(id);
        this.objet_formulaire =new FormData();
        this.liste = new Array();
    };

    // envoi des données dans le local storage

envoieFormulaire() {
        this.objet_formulaire = new FormData(this.formulaireHTML);


        this.objet_formulaire.forEach((value, key) => {
        if (value !=="") {
            this.liste.push([key, value]);

        };
    });


        let JSONListe = JSON.stringify(this.liste);
        localStorage.setItem("test", JSONListe)
        document.getElementById("form").reset();
}


}