import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-child-b',
  standalone: true,
  template: `Child B {{cdTriggered()}} <br> On-push only`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildB extends BaseComponent {
}
