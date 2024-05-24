import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICustomer } from '@cb/core/interfaces/customer.interface';
import { CustomerService } from '@cb/core/services/customer.service';
import { ModalActivoRef } from 'src/app/shared/components/modal';
import { IDialogConfig } from 'src/app/shared/dialogo/interfaces/dialog-config';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';

/**
 * Estados posibles de la pantalla:
 * 0 -> Alta,
 * 1 -> Modificacion,
 * 2 -> Detalle
 **/
export enum Estado {
  Alta,
  Modificacion,
  Detalle,
}
@Component({
  selector: 'cb-ingreso-modificacion',
  templateUrl: './ingreso-modificacion.component.html',
  styleUrls: ['./ingreso-modificacion.component.scss']
})
export class IngresoModificacionComponent implements OnInit {
  customer!: ICustomer | null;
  grupoCustomer: FormGroup;
  estado: Estado = Estado.Detalle;
  titulo: string = '';

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private modalActivoRef: ModalActivoRef,
    private dialogService: DialogService,
  ) {
    this.grupoCustomer = this.fb.group({
      customerId: [],
      customerName: [''],
      customerPhone: [''],
      customerEmail: [''],
      customerAddress: [''],
      customerCity: ['']
    });
  }

  ngOnInit(): void {
    if (this.estado !== Estado.Alta) {
      this.cargarPantalla();

      if (this.estado === Estado.Detalle) {
        this.grupoCustomer.disable();
      }
    }

    // this.customerService.getCustomer().subscribe((customer: ICustomer) => {
    //   this.customer = customer;
    //   this.grupoCustomer.patchValue(this.customer);
    // });
  }

  onSubmit(): void {
    if (this.grupoCustomer.valid) {
      this.customer = this.grupoCustomer.value;

      if (this.estado === Estado.Alta) {
        this.customerService.setCustomer({ customer: this.customer }).subscribe({
          next: (customer: ICustomer) => {
            console.log(customer);
            this.closeForm();

            const dialogConfig = {
              title: 'Cliente creado',
              message: 'El cliente se ha creado correctamente',
              tipo: 'exito',
              confirmText: 'Aceptar',
              cancelText: undefined,
            } as IDialogConfig;

            this.dialogService.open(dialogConfig);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }

      else {
        let dialogConfig = {
          title: 'Modificar cliente',
          message: '¿Está seguro que desea modificar el cliente seleccionado?'  ,
          tipo: 'advertencia',
          confirmText: 'Aceptar',
          cancelText: 'Cancelar',
        } as IDialogConfig;

        this.dialogService.open(dialogConfig).then((aceptar: boolean) => {
          this.customerService.updateCustomer({ customer: this.customer }).subscribe({
            next: (customer: ICustomer) => {
              console.log(customer);
              this.closeForm();

              dialogConfig = {
                title: 'Cliente modificado',
                message: 'El cliente se ha modificado correctamente',
                tipo: 'exito',
                confirmText: 'Aceptar',
                cancelText: undefined,
              } as IDialogConfig;

              this.dialogService.open(dialogConfig);
            },
            error: (error: any) => {
              console.log(error);
            }
          });
        });
      }
    }

  }

  cargarPantalla() {
    if (this.customer) {
      this.grupoCustomer.patchValue(this.customer);
    }
  }


  //Cierro el modal
  closeForm(): void {
    this.customer = null;
    this.modalActivoRef.cerrar();
  }

}
