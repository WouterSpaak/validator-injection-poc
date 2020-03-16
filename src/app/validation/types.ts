import { InjectionToken } from '@angular/core';
import { ValidationModule } from './validation.module';

export const VALIDATOR_FACTORIES = new InjectionToken<any>('ValidatorFactories');

export const enum Severity {
  Optional, Recommended, Required
}

export interface ValidatorResult {
  id: string;
  message: string;
  severity: Severity;
  passed: boolean;
}

export interface Validator {
  validate(): ValidatorResult;
}

export interface ValidatorFactory {
  supports(stateId: number): boolean;
  create(stateId: number): Validator;
}