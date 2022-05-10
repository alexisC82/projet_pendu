export class TailleMot {

    nbreDeCase!: number;
    motATrouver!: any;
    motATrouvertab!: any;
    className!: string;
    tailleMot!: any;
    decouverteMotActuelle!: any;
    ancienDecouverteMotActuelle!: any;

    constructor(nbreDeCase: number, motATrouver: string, className: string, decouverteMotActuelle: any) {
        this.nbreDeCase = nbreDeCase;
        this.motATrouver = motATrouver;
        this.className = className;
        this.decouverteMotActuelle = decouverteMotActuelle;
        this.ancienDecouverteMotActuelle = decouverteMotActuelle;
    }

    getWordSize() {
        console.log('Entrée dans Word Size');
        console.log('Taille du mot: ' + this.nbreDeCase);
        console.log('Nom de la classe: ' + this.className);
        console.log('Mot actuel: ' + this.decouverteMotActuelle)
        let i = 0;
        let mot = '';
        let g:string[]=[];
        if (this.className == 'null') {
            while (i < this.nbreDeCase) {
                mot = mot + '_ ';
                i = i + 1;
            }
            console.log(this.tailleMot)
            console.log('cpt: ' + i)    
        }
        else {  
            console.log('Le nom de la classe est ' + this.className)
            this.nbreDeCase = this.motATrouver.length;
            i = 0
            let j:number=0
            this.motATrouvertab = this.decouverteMotActuelle.split('')
            console.log('Valeur mot a trouvertab:'+this.motATrouvertab.join(" "))
            while (i < this.nbreDeCase) {
               // console.log('Valeur i ' + i)
                //console.log(this.motATrouvertab[i])
                j=i+i;
                if (this.motATrouver[i] == this.className) {
                   // console.log(`valeur assigné a g: ${this.motATrouvertab[i]}`)
                    g[i] =this.motATrouver[i]
                }
                else {
                    if (this.motATrouvertab[j]==='_') {
                        g[i] = this.motATrouvertab[j]
                        //console.log((`valeur assigné a g: ${g[i]}`))
                    }
                    else{
                    console.log(this.motATrouver[i])
                    g[i] =this.motATrouver[i]
                }
                }
            
                i = i + 1;
            }
            console.log(g)
            mot = g.join(" ")
    }
    return mot;
        }
    }