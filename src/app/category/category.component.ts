import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Output() sendRequestToFather = new EventEmitter;
  
  constructor() {}

  ngOnInit(): void {
  }

  goToFormPage(categoryName: string) {
    this.sendRequestToFather.emit(categoryName);
  }
}
