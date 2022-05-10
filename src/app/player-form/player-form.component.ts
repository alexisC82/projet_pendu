import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-playerform',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerformComponent implements OnInit {
  numberPlayer = 1;
  @ViewChild("namePlayer")
  namePlayer!: ElementRef;
  @Output() sendRequestToFather = new EventEmitter;
  player1!: String;
  player2!: String;
  visibleAppPlayerform = "visible";

  constructor() {}

  ngOnInit(): void {}
  
  submit() {
    if(this.numberPlayer == 1) {
      this.player1 = this.namePlayer?.nativeElement.value;
      console.log(this.player1);
      this.namePlayer.nativeElement.value = "";
      this.numberPlayer += 1;
    }
    else {
      this.player2 = this.namePlayer?.nativeElement.value;
      console.log(this.player2);
      this.sendRequestToFather.emit([this.player1, this.player2]);
    }
  }
}
