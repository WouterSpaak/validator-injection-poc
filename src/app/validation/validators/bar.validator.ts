import { ValidatorFactory, Validator, Severity, ValidatorResult } from '../types';
import { Injectable } from '@angular/core';
import { ValidationModule } from '../validation.module';

@Injectable({
  providedIn: ValidationModule
})
export class BarValidatorFactory implements ValidatorFactory {
  supports(stateId: number): boolean {
    return stateId === 10 || stateId === 100;
  }

  create(stateId: number): Validator {
    switch (stateId) {
      case 10:
        return new BarValidator('BarValidatorFor10', 'Bar validation from 10', Severity.Optional);
      case 100:
        return new BarValidator('bar_validator_for_100', 'A whole other message!!', Severity.Required);
      default:
        throw new Error(`BarValidator unsupported for ${stateId}`);
    }
  }
}

export class BarValidator implements Validator {
  constructor(private readonly id: string, private readonly message: string, private readonly severity: Severity) { }
  validate(): ValidatorResult {
    return {
      id: this.id,
      message: this.message,
      passed: false,
      severity: this.severity
    }
  }
}