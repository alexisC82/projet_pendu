import { Component, ElementRef, ViewChild } from '@angular/core';
import { TailleMot } from '../model/taillemot';
import { Joueur } from '../model/joueur';
import { GameoverService } from './gameover.service';
import { WingameService } from './wingame.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pendu';
  visibilityButtonCategory = "visible";
  visibleAppCategory = "hidden";
  visibleAppPlayerform = "hidden";
  visibleHungTable = "hidden";
  visibleAppDictionnaire = "hidden";
  player1: Joueur | undefined;
  player2: Joueur | undefined;
  listemot!: any;
  mot!: String;
  wordAtFind!: String;
  valueBeforeEndGame = 10;
  numberPlayer = 1;
  nameCategory!: String;

  // Style alphabet button
  colorA : String = "none";
  colorB : String = "none";
  colorC : String = "none";
  colorD : String = "none";
  colorE : String = "none";
  colorF : String = "none";
  colorG : String = "none";
  colorH : String = "none";
  colorI : String = "none";
  colorJ : String = "none";
  colorK : String = "none";
  colorL : String = "none";
  colorM : String = "none";
  colorN : String = "none";
  colorO : String = "none";
  colorP : String = "none";
  colorQ : String = "none";
  colorR : String = "none";
  colorS : String = "none";
  colorT : String = "none";
  colorU : String = "none";
  colorV : String = "none";
  colorW : String = "none";
  colorX : String = "none";
  colorY : String = "none";
  colorZ : String = "none";

  
  visibilityButton = "visible";

  wrongWords:string[]=[];
  i!: number;
  wordSize = new TailleMot(5,"","","");
  leMot!: any;

  @ViewChild("inputPlayer") wordInput: ElementRef | undefined;

  constructor(private gameOverService: GameoverService, private winGameService: WingameService) {}

  goToPlayerFormPage() {
    this.visibilityButtonCategory = "hidden";
    this.visibleAppPlayerform = "visible";
  }

  goToCategoryPage(message: String) {    
    if(message[0] != "" && message[1] != "") {
      this.visibleAppPlayerform = "hidden";
      this.visibleAppCategory = "visible";

      this.player1 = new Joueur(message[0]);
      this.player2 = new Joueur(message[1]);
    }
    else {
      alert("Une erreur est survenue. Nous vous prions de bien vouloir ressaisir les noms des joureurs en validant leur saisies à l'aider du bouton de validation");
    }
  }

  displayToast(message: String) {
    if(message != null) {
      this.nameCategory = message;
      this.visibleAppCategory = "hidden";
      this.visibleAppDictionnaire = "visible";
      let i=0;

      console.log('listemotvaleur: '+this.listemot)
      console.log(i)
      this.mot=this.listemot[Math.floor(i * Math.random())]
      console.log(this.mot)
    }
  }


  checkWord(mot: string){
    this.wordAtFind = mot;
    this.visibleHungTable = "visible";
    this.visibleAppDictionnaire = "hidden";
    console.log(mot);
    this.leMot = mot.split('');
    this.i=mot.length;
    console.log(this.i);
    this.wordSize= new TailleMot(this.i,mot,'null','null');
    this.leMot=mot;
    console.log('leMot: '+ this.leMot);
    
  }

  submit() {
    if(this.wordAtFind == this.wordInput?.nativeElement.value) {
      this.numberPlayer == 1 ? this.player1?.addPoints(10) : this.player2?.addPoints(10);
      this.winGameService.displayAlert();
    }
    else {
      this.wrongWords.push(this.wordInput?.nativeElement.value);
      console.log(this.wrongWords);

      this.valueBeforeEndGame -= 1;
      if(this.valueBeforeEndGame == 0) {
        this.gameOverService.displayAlert();
      }
      else {
        if(this.numberPlayer == 1) {
          this.numberPlayer += 1;
        }
        else {
          this.numberPlayer = 1;
        }
      }
    }
  }

  getValue(className: string){
    console.log(className);
    let motactuel=document.getElementById('motactuel')
    const motConv=motactuel?.innerHTML;
    console.log("*********************");
    const leMotTab=this.leMot.split('')
    console.log(leMotTab);
    console.log("_____________________");
    let x = 0;
    let j=0;
    while (x<leMotTab.length){
      if (leMotTab[x]==className){
        j= j + 1;
      }
      x=x+1;
    }

    switch(className) {
      case "a":
        j > 0 ? this.colorA = "green" : this.colorA = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "b":
        j > 0 ? this.colorB = "green" : this.colorB = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "c":
        j > 0 ? this.colorC = "green" : this.colorC = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "d":
        j > 0 ? this.colorD = "green" : this.colorD = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "e":
        j > 0 ? this.colorE = "green" : this.colorE = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "f":
        j > 0 ? this.colorF = "green" : this.colorF = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "g":
        j > 0 ? this.colorG = "green" : this.colorG = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "h":
        j > 0 ? this.colorH = "green" : this.colorH = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "i":
        j > 0 ? this.colorI = "green" : this.colorI = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "j":
        j > 0 ? this.colorJ = "green" : this.colorJ = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "k":
        j > 0 ? this.colorK = "green" : this.colorK = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "l":
        j > 0 ? this.colorL = "green" : this.colorL = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "m":
        j > 0 ? this.colorM = "green" : this.colorM = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "n":
        j > 0 ? this.colorN = "green" : this.colorN = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "o":
        j > 0 ? this.colorO = "green" : this.colorO = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "p":
        j > 0 ? this.colorP = "green" : this.colorP = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "q":
        j > 0 ? this.colorQ = "green" : this.colorQ = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "r":
        j > 0 ? this.colorR = "green" : this.colorR = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "s":
        j > 0 ? this.colorS = "green" : this.colorS = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "t":
        j > 0 ? this.colorT = "green" : this.colorT = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "u":
        j > 0 ? this.colorU = "green" : this.colorU = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "v":
        j > 0 ? this.colorV = "green" : this.colorV = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "w":
        j > 0 ? this.colorW = "green" : this.colorW = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "x":
        j > 0 ? this.colorX = "green" : this.colorX = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "y":
        j > 0 ? this.colorY = "green" : this.colorY = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
      case "z":
        j > 0 ? this.colorZ = "green" : this.colorZ = "red";
        this.valueBeforeEndGame > 1 ? j == 0 ? this.valueBeforeEndGame -=1 : null : this.endGame();
        this.numberPlayer == 1 ? this.numberPlayer += 1 : this.numberPlayer = 1;
        j > 0 ? this.numberPlayer == 1 ? this.player1?.addPoints(2): this.player2?.addPoints(2) : null;
        break;
    }
    this.wordSize= new TailleMot(0,this.leMot,className,motConv);
  }

  endGame() {
    this.valueBeforeEndGame -= 1;
    this.gameOverService.displayAlert();
  }
}
