import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { ValidatorFactory, VALIDATOR_FACTORIES } from './types';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ValidationModule {
  static forRoot(factories: Type<ValidatorFactory>[]): ModuleWithProviders<ValidationModule> {
    return {
      ngModule: ValidationModule,
      providers: factories.map(factory => {
        return {
          provide: VALIDATOR_FACTORIES,
          useClass: factory,
          multi: true,
        }
      })
    }
  }
}
