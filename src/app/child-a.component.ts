import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-child-a',
  standalone: true,
  template: `Child A {{cdTriggered()}} <br> Default CD strategy <br> This component will trigger CD after 5 seconds.`,
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildA extends BaseComponent {

    constructor(zone: NgZone, elRef: ElementRef) {
        super(zone, elRef);
        setTimeout(() => {
            // do something
        }, 5000)
    }
}
