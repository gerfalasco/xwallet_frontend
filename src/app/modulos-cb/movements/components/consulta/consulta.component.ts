import { Component, OnInit } from '@angular/core';
import { IMovement } from '@cb/core/interfaces/movement';
import { ModalActivoRef } from 'src/app/shared/components/modal';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  movements: IMovement[] = [];
  movementsFiltrado: IMovement[] = [];
  filterTerm: string = "";

  constructor(private ModalActivoRef: ModalActivoRef) { }

  ngOnInit(): void {
    this.movementsFiltrado = [...this.movements].sort((a, b) => a.movementId - b.movementId);
  }

  keyUpSearch(): void {
    this.movementsFiltrado = [
      ...this.movements.filter((movement) => {
        return movement.movementDescription.toLowerCase().includes(this.filterTerm.toLowerCase()) || movement.movementId.toString().includes(this.filterTerm.toLowerCase());
      }),
    ].sort((a, b) => a.movementId - b.movementId);
  }

  cerrarModal(): void {
    this.ModalActivoRef.cerrar();
  }
}
