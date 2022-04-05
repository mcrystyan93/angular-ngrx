import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { CounterEffects } from './store/effects';
import { countFeature } from './store/reducers';



@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(countFeature),
    EffectsModule.forFeature([CounterEffects])
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
