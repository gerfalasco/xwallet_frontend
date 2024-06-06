import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDialogConfig } from '../../interfaces/dialog-config';

@Component({
  selector: 'cb-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  icono!: 'fas fa-check-circle' | 'fas fa-exclamation-circle' | 'fas fa-info-circle' | 'fas fa-times-circle';

  @Input() config!: IDialogConfig;
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    switch (this.config.tipo) {
      case 'exito': {
        this.icono = 'fas fa-check-circle';
        break;
      }
      case 'advertencia': {
        this.icono = 'fas fa-exclamation-circle';
        break;
      }
      case 'error': {
        this.icono = 'fas fa-times-circle';
        break;
      }
      default:
        this.icono = 'fas fa-info-circle';
        this.config.tipo = 'default';
        break;
    }
  }

  onConfirm(): void {
    this.confirmed.emit(true);
  }

  onCancel(): void {
    this.confirmed.emit(false);
  }
}
