import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './services/modal.service';
import { HostModalDirective } from './directives/host-modal.directive';
import { ContenedorModalComponent } from './components/contenedor-modal/contenedor-modal.component';
import { EventosModule } from '@shared/eventos/eventos.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    HostModalDirective,
    ContenedorModalComponent
  ],
  imports: [
    CommonModule,
    EventosModule,
    DragDropModule
  ],
  providers: [
    ModalService,
  ]
})
export class ModalModule { }
