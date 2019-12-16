import { NgModule } from '@angular/core';
import { SeerBitButtonDirective } from './seer-bit.directive';
import { SeerBitComponent } from './seer-bit.component'; 
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SeerBitButtonDirective, SeerBitComponent],
  imports: [CommonModule],
  exports: [SeerBitButtonDirective,SeerBitComponent]
})
export class NgxSeerbitModule { }
