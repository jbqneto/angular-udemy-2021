import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<div class="alert alert-success">Alerta de sucesso!</div>`,
  styleUrls: [`
    .alert {
      font-weight: bold;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
