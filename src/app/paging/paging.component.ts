import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css'],
})
export class PagingComponent implements OnInit {
  constructor() {}
  @Input() page: number;
  @Output() newPage = new EventEmitter();
  ngOnInit(): void {}

  nextPage() {
    this.newPage.emit(this.page + 1);
  }
  previousPage() {
    if (this.page > 1) this.newPage.emit(this.page - 1);
  }
}
