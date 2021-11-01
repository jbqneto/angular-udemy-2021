import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  username: string = '';
  isDisplaying: boolean = false;
  displayLogs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getItemClass(index: number) {
    return (index > 3) ? 'special-item' : 'item';
  }

  toggleDisplay() {
    this.isDisplaying = !this.isDisplaying;
    this.displayLogs.push(this.isDisplaying + ' - ' + new Date())
  }

  colorLog(index: number) {
    if (index > 3) {
      return 'blue';
    } else {
      return 'none';
    }
  }

  onSubmit($event: Event) {
    console.log($event);
    this.username = '';
  }

}
