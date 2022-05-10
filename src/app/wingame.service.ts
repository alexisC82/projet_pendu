import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WingameService {

  constructor() { }

  displayAlert() {
    alert("Vous avez gagné !");
  }
}
