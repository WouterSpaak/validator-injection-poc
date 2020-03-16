import { Injectable, Inject } from '@angular/core';
import { ValidationModule } from './validation.module';
import { VALIDATOR_FACTORIES, ValidatorFactory, ValidatorResult } from './types';

@Injectable({
  providedIn: ValidationModule
})
export class ValidationService {
  public results: ValidatorResult[];
  constructor(@Inject(VALIDATOR_FACTORIES) private factories: ValidatorFactory[]) { }

  validate(stateId: number) {
    const targetFactories = this.factories.filter(factory => factory.supports(stateId));
    if (!targetFactories) {
      this.results = [];
    }
    const validators = targetFactories.map(f => f.create(stateId));
    this.results = validators.map(v => v.validate());
  }
}
