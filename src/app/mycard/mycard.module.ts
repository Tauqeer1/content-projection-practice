import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { MycardComponent } from './mycard.component';

@NgModule({
  declarations: [MycardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [MycardComponent]
})
export class MycardModule {}
