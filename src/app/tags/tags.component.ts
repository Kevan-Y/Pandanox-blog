import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  constructor() {}
  tags: Array<string> = [
    '#funny',
    '#dramatic',
    '#rental',
    '#seeagain',
    '#spooky',
    '#worththecost',
    '#lovedIt',
    '#scary',
    '#silly',
    '#good4kidz',
  ];
  ngOnInit(): void {}
}
