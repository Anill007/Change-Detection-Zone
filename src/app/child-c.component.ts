import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-child-c',
  standalone: true,
  template: `Child C {{cdTriggered()}}
  <br> On-push + &#64;Input() <br>Random Number from Parent.
  <span class="rand">{{randomNum}}</span>
  <br>
  CD triggers when ()Input changes`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildC extends BaseComponent {
  @Input() randomNum!: number;
}
