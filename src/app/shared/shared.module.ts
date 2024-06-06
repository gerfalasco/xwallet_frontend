import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '@cb/core/services/data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DataService]
})
export class SharedModule { }
