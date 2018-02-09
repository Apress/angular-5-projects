import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'Paragraph',
  template: `
  <div>
  <b>{{title.nativeElement.innerHTML}}</b>
  <p><ng-content></ng-content></p>
  </div>
  `,
  styles: ['p { border: 1px solid #c0c0c0 }']
})
export class Paragraph {
  @ContentChild('title') title;
}

@Component({
  selector: 'app-root',
  template: `
  <p>
  <Paragraph><title #title>Paragraph 1</title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar egestas massa sit amet scelerisque.</Paragraph>
  <Paragraph><title #title>Paragraph 2</title>Praesent eget ornare neque, vel consectetur eros. Morbi gravida finibus arcu, vel mattis justo dictum a.</Paragraph>
  </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
