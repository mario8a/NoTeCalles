import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestimoniosPage } from './testimonios';

@NgModule({
  declarations: [
    TestimoniosPage,
  ],
  imports: [
    IonicPageModule.forChild(TestimoniosPage),
  ],
})
export class TestimoniosPageModule {}
