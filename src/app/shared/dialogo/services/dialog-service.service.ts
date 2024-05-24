import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { IDialogConfig } from '../interfaces/dialog-config';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable()
export class DialogService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public open(config: IDialogConfig): Promise<boolean> {
    const componentRef = this.createDialogComponent(config);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return new Promise<boolean>((resolve) => {
      componentRef.instance.confirmed.subscribe((confirmed: boolean) => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
        resolve(confirmed);
      });
    });
  }

  private createDialogComponent(config: IDialogConfig): ComponentRef<DialogComponent> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(this.injector);
    componentRef.instance.config = config;
    return componentRef;
  }
}
