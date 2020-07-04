import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './material/angular-material.module';

@NgModule({
  imports: [AngularMaterialModule],
  exports: [AngularMaterialModule],
  declarations: [],
})
export class SharedModule {}
