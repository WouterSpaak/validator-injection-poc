import { ValidatorFactory, Validator, ValidatorResult, Severity } from '../types';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ValidationModule } from '../validation.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ValidationModule
})
export class FooValidatorFactory implements ValidatorFactory {
  constructor(private readonly http: HttpClient) { }

  supports(stateId: number): boolean {
    if (stateId === 10 || stateId === 42) {
      return true;
    }
    return false;
  }

  create(stateId: number): Validator {
    if (stateId === 10) {
      return new FooValidator(this.http, 'Dit is de validator voor stap 10!', Severity.Optional);
    }
    if (stateId === 42) {
      return new FooValidator(this.http, 'Dit is een hele andere validator voor stap 42', Severity.Required);
    }
  }
}

export class FooValidator implements Validator {
  constructor(
    // Dit is hier alleen om aan te wijzen dat je dependencies kan doorpassen
    private readonly http: HttpClient,
    private readonly message: string,
    private readonly severity: Severity
  ) { }
  validate(): ValidatorResult {
    return {
      id: 'foo',
      message: this.message,
      passed: true,
      severity: this.severity
    }
  }
}