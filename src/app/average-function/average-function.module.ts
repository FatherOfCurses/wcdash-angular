// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Plugins


// Components
import { AverageHandlingTimeComponent } from './averageHandlingTime/averageHandlingTime.component';

// Services


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [AverageHandlingTimeComponent],
  exports: [ AverageHandlingTimeComponent ]
})
export class AverageFunctionModule { }
