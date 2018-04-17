import { Component } from '@angular/core';

@Component({
  selector: 'Paragraph',
  template: `
  <p><ng-content></ng-content></p>
  `,
  styles: ['p { border: 1px solid #c0c0c0; padding: 10px }']
})
export class Paragraph {
}

@Component({
  selector: 'app-root',
  template: `
  <p>
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Paragraph>
  <Paragraph>Praesent eget ornare neque, vel consectetur eros. </Paragraph>
  </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "app works!";
}
