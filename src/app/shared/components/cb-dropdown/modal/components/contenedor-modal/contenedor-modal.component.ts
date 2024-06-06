import {
  Component,
  Type,
  OnDestroy,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  AfterContentInit} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HostModalDirective } from '@layouts/modal/directives/host-modal.directive';
import { IModalConfig } from '../../interfaces/modal-config.interface';
import { ModalActivoRef } from '../../modal-activo-ref';

@Component({
  templateUrl: './contenedor-modal.component.html',
  styleUrls: ['./contenedor-modal.component.scss']
})
export class ContenedorModalComponent implements OnDestroy, AfterContentInit {
  @ViewChild(HostModalDirective, {static: true}) host!: HostModalDirective;

  componenteRef: ComponentRef<any>;

  config: IModalConfig;

  private readonly _alCerrar: Subject<void> = new Subject<void>();
  public alCerrar$: Observable<void> = this._alCerrar.asObservable();
  private _clickDentroDelModal: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalActivoRef: ModalActivoRef
  ) { }

  ngAfterContentInit(): void {
    console.log(this.host.vcr.element.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.componenteRef) {
      this.componenteRef.destroy();
    }
  }

  clickFueraDelModal(): void {
    if (this.config.cerrarConClickFueraDelModal && !this._clickDentroDelModal)
      this.modalActivoRef.cerrar('Se cerro haciendo click fuera del modal');

    this._clickDentroDelModal = false;
  }

  clickEnElModal(): void {
    this._clickDentroDelModal = true;
  }

  cerrar(): void {
    this._alCerrar.next();
  }

  public cargarComponenteHijo<T>(componentType: Type<T>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.host.vcr;
    viewContainerRef.clear();

    this.componenteRef = viewContainerRef.createComponent<T>(componentFactory);
  }
}
