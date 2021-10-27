import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  username: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit($event: Event) {
    console.log($event);
    this.username = '';
  }

}
