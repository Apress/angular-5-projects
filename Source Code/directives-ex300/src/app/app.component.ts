import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.block1 {background-color:#d5f4e6;margin:10px;padding:10px;}',
  '.block2 {background-color:#d5f4ff;margin:10px;padding:10px;}',
  '.block3 {background-color:#d5cce6;margin:10px;padding:10px;}']
})
export class AppComponent {
  selection = 'name';
  options = ['name','address','other'];
}
