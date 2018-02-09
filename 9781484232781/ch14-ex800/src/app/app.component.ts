import { Component } from '@angular/core';

@Component({
  selector: 'Paragraph',
  template: `
  <p><ng-content></ng-content></p>
  `,
  styles: ['p { border: 1px solid #c0c0c0 }']
})
export class Paragraph {
}

@Component({
  selector: 'app-root',
  template: `
  <p>
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar egestas massa sit amet scelerisque. Proin placerat, ipsum sit amet condimentum condimentum, lorem libero efficitur mi, nec ullamcorper quam elit in nunc. Donec rhoncus mauris sit amet odio hendrerit, ac condimentum nunc maximus. Etiam et nibh fermentum, fringilla nisl mollis, pulvinar lectus. Morbi non lacinia metus. Maecenas non metus sit amet ante facilisis accumsan eu at urna. Phasellus sed elementum arcu. Nunc mollis et nulla eu eleifend. Sed congue nisl ut nunc elementum faucibus.</Paragraph>
  <Paragraph>Praesent eget ornare neque, vel consectetur eros. Morbi gravida finibus arcu, vel mattis justo dictum a. Fusce non tortor non justo sodales eleifend. Ut ac mi turpis. Nullam eleifend euismod erat, vel tincidunt nisi rutrum et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque eget cursus neque. Curabitur ultricies massa nisl, id ullamcorper nibh luctus nec. Proin eros mi, dapibus non mi vel, porttitor pulvinar urna.</Paragraph>
  </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
