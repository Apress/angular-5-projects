import { Component } from '@angular/core';

@Component({
  selector: 'pasta',
  template: `
    <div>
      <h2>Pasta</h2>
      <img src="https://capetowncafe.files.wordpress.com/2015/04/spaghetti-recipe-wikipedia.jpg">
    </div>
  `,
  styles: []
})
export class NestedPastaComponent {
}

@Component({
  selector: 'calzone',
  template: `
    <div>
      <h2>Calzone</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Calzone_fritto.jpg">
    </div>
  `,
  styles: []
})

export class NestedCalzoneComponent {  
}

@Component({
  selector: 'other',
  template: `
    <div>
      <h2>Other Menu Items</h2>
      <a [routerLink]="['pasta']" routerLinkActive="router-link-active">Pasta</a>
      <a [routerLink]="['calzone']" routerLinkActive="router-link-active">Calzone</a>
      <router-outlet></router-outlet>
      <br/>
      <br/>
    </div>
  `,
  styles: []
})
export class OtherComponent {
}
