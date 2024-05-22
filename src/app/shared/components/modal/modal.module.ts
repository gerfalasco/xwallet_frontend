import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './services/modal.service';
import { HostModalDirective } from './directives/host-modal.directive';
import { ContenedorModalComponent } from './components/contenedor-modal/contenedor-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    HostModalDirective,
    ContenedorModalComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  providers: [
    ModalService,
  ]
})
export class ModalModule { }
