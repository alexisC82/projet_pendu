import { Component, OnInit,EventEmitter , Input, Output } from '@angular/core';


@Component({
  selector: 'app-dictionnaire',
  templateUrl: './dictionnaire.component.html',
  styleUrls: ['./dictionnaire.component.scss']
})
export class DictionnaireComponent implements OnInit {

  @Output()  sendRandomWord = new EventEmitter();
  @Input() getCategory: String | undefined;
  constructor() { }
  listemot!: Array<String>;
  i!: number;

  sendWord(){
      console.log('Valeur getCategory'+this.getCategory)
      if (this.getCategory=='geographie'){
        this.listemot=['france','espagne','italie','allemagne','angleterre','portugal','chine','japon','maroc'];
        this.i = this.listemot.length;
      }
      if (this.getCategory=='voiture'){
        this.listemot=['peugeot','fiat','renault','citroen','honda','opel','mercedes','volkswagen','ferrari'];
        this.i = this.listemot.length;
      }
      if (this.getCategory=='animaux'){
        this.listemot=['chat','chien','rat','tortue','lapin','hibou','hippopotame','zebre','vache','cochon','furet','souris','cheval','serpent','tigre'];
        this.i = this.listemot.length;
    }
  
    
    // console.log('**********************')
    // console.log(this.getCategory);
    // console.log('**********************')
    // console.log(this.i);
    // console.log(this.listemot);
    // console.log(this.listemot[Math.floor(Math.random() * this.i)]);
    this.sendRandomWord.emit(this.listemot[Math.floor(Math.random() * this.i)])
    // console.log('__________________')
  }
  
  ngOnInit(): void {
  }

}