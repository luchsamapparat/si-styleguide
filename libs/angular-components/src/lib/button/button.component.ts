import { Component, Input } from '@angular/core';

@Component({
  selector: 'si-ng-button',
  templateUrl: './button.component.html',
  // styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  variant: 'primary';

  @Input()
  label: string;

  get variantClass() {
    return `btn-${this.variant}`
  }

}
