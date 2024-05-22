import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,
} from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IModalConfig } from '../components/modal/interfaces/modal-config.interface';
import { ModalActivoRef } from '../components/modal';
import { ContenedorModalComponent } from '../components/modal/components/contenedor-modal/contenedor-modal.component';
import { ModalInjector } from '../components/modal/injectors/modal-injector';

@Injectable()
export class ModalService {
  contenedoresModalComponentRef: ComponentRef<ContenedorModalComponent>[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private readonly router: Router
  ) { }

  private suscribtionOnRouterChange(): any {

    this.router.events.pipe(take(1)).subscribe(() => {

      console.log('router change');

      this.contenedoresModalComponentRef?.forEach(c => {
        c.instance.cerrar();
      });

    });

  }

  public abrir<T, R = any>(
    componente: Type<T>,
    config: IModalConfig = {}
  ): ModalActivoRef<T, R> {

    config = {
      ancho: 'auto',
      alto: 'auto',
      cerrarConClickFueraDelModal: true,
      ...config
    };

    const modalActivoRef = this.agregarModalComponentAlBody<T, R>(config);

    this.contenedoresModalComponentRef[this.contenedoresModalComponentRef.length - 1].instance.cargarComponenteHijo<T>(componente);
    this.contenedoresModalComponentRef[this.contenedoresModalComponentRef.length - 1].instance.config = config;

    modalActivoRef.instancia = this.contenedoresModalComponentRef[this.contenedoresModalComponentRef.length - 1].instance.componenteRef.instance;

    this.suscribtionOnRouterChange();

    return modalActivoRef;
  }

  private agregarModalComponentAlBody<T, R>(
    config: IModalConfig
  ): ModalActivoRef<T, R> {

    config = {
      ...config
    };

    const map = new WeakMap<object, any>();
    map.set(IModalConfig, config);
    const modalActivoRef = new ModalActivoRef<T, R>();
    map.set(ModalActivoRef, modalActivoRef);

    const sub = modalActivoRef.respuesta$.subscribe({
      next: () => {
        this.eliminarModalComponentDelBody(modalActivoRef);
        sub.unsubscribe();
      },
      error: () => {
        this.eliminarModalComponentDelBody(modalActivoRef);
        sub.unsubscribe();
      }
    });

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory<
      ContenedorModalComponent
      >(ContenedorModalComponent);
    const componentRef = componentFactory.create(
      new ModalInjector(this.injector, map)
    );

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.contenedoresModalComponentRef.push(componentRef);

    this.contenedoresModalComponentRef[this.contenedoresModalComponentRef.length - 1].instance.alCerrar$.subscribe(() => {
      this.eliminarModalComponentDelBody(modalActivoRef);
    });

    return modalActivoRef;
  }

  private eliminarModalComponentDelBody(modalRef: ModalActivoRef): void {
    const index = this.contenedoresModalComponentRef.findIndex(c => c.instance.componenteRef.instance === modalRef.instancia);
    if (index > -1) {
      this.appRef.detachView(this.contenedoresModalComponentRef[index].hostView);
      this.contenedoresModalComponentRef[index].destroy();
      this.contenedoresModalComponentRef.splice(index, 1);
    }
  }
}
