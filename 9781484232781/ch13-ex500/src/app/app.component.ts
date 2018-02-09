import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedAnimal = 'cat';
  animals = ['cat', 'dog', 'zebra', 'giraffe'];

  onAnimalClicked(event:Event){
    const clickedAnimal = event.srcElement.innerHTML.trim();
    this.selectedAnimal = clickedAnimal;
  }

  getAnimalStyle(animal){
    const isSelected = (animal === this.selectedAnimal);
    return {
      'padding' : '10px',
      'margin' : '10px',
      'color' : isSelected ? '#ffffff' : '#000000',
      'background-color' : isSelected ? '#ff0000' : '#ffffff',
    }
  }
}
