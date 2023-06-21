import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string  = '';
  @Input() buttonType: 'primary' | 'secondary' = 'primary';
  @Output() onButtonClick = new EventEmitter<void>();


  handleButtonClick() {
    this.onButtonClick.emit();
  }
}
