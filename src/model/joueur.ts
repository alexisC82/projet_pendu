export class Joueur {
    nom! : String;
    score! :number;

    constructor(nomJoueur: String) {
        this.nom = nomJoueur;
        this.score = 0;
    }

    addPoints(points: number) {
        this.score += points;
    }

    getInfo() {
        return this.nom + " : " + this.score;
    }
}