import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameoverService {

  constructor() { }

  displayAlert() {
    alert("Vous avez perdus");
  }
}
