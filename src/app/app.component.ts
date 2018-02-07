import { Component } from '@angular/core';
import { LogUpdateService } from './log-update.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private logUpdateServie: LogUpdateService) {}
}
