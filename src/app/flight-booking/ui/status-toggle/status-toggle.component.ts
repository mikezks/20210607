import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.css']
})
export class StatusToggleComponent {
  @Input() status: boolean;
  @Output() statusChange = new EventEmitter<boolean>();

  toggleStatus() {
    this.status = !this.status;
    this.statusChange.emit(this.status);
  }
}
