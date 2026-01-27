// class formulaire v1
// enregistre les données du formulaire en format dans le localstorage

class Formulaire {

    constructor(id) {
        this.id = id;
        this.formulaireHTML = document.getElementById(id);
        this.objetFormulaire = new FormData();
        this.liste = new Array();
    };

    // envoi des données dans le local storage

    envoieFormulaire() {
        console.log('je suis la');
        this.objetFormulaire = new FormData(this.formulaireHTML);


        this.objetFormulaire.forEach((value, key) => {
            if (value !== '') {
                this.liste.push([key, value]);
            };
        });

        let JSONListe = JSON.stringify(this.liste);
        localStorage.setItem('test', JSONListe);
        document.getElementById('form').reset();
    };
};
const formulaire = new Formulaire('form');

const valider = document.getElementById('valider');
valider.addEventListener('click', () => {
    formulaire.envoieFormulaire();
});