import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '@cb/core/services/data.service';
import { DecimalesPipe } from '../modulos-cb/core/pipes/decimales.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DataService]
})
export class SharedModule { }
