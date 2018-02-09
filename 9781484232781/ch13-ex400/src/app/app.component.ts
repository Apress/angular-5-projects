import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    '.selected { color: white; background-color:red; padding: 10px; margin: 10px }', 
    '.unselected { background-color: white; padding: 10px; margin: 10px}'
    ]
})
export class AppComponent {
  selectedAnimal = 'cat';
  animals = ['cat', 'dog', 'zebra', 'giraffe'];

  onAnimalClicked(event:Event){
    const clickedAnimal = event.srcElement.innerHTML.trim();
    this.selectedAnimal = clickedAnimal;
  }
}

