import { Component } from '@angular/core';
import { ValidationService } from './validation/validation.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hoi</h1>
  <pre>{{ service.results | json }}</pre>
  <button (click)="triggerValidation(10)">Valideer stap 10</button>
  <button (click)="triggerValidation(42)">Valideer stap 42</button>
  <button (click)="triggerValidation(100)">Valideer stap 100</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'injection-poc';
  constructor(public readonly service: ValidationService) { }

  triggerValidation(stepId: number) {
    this.service.validate(stepId);
  }
}
