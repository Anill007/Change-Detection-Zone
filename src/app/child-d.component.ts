import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-child-d',
  standalone: true,
  template: `Child D {{cdTriggered()}}
  <br> RunOutsideAngular with interval 1 sec.
  <br> Will not trigger app wise re-render.
  <br>Current timer: {{timer}}`,
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildD extends BaseComponent {
    protected timer = 0;
    constructor(zone: NgZone, elRef: ElementRef, protected cd: ChangeDetectorRef) {
        super(zone, elRef);
        this.zone.runOutsideAngular(() => {
            setInterval(() => {
                // do something
                this.timer++;
                // see differences amond both
                // mark only marks for another cycle whenever happens
                // detect changes triggers cd for child and current component
                // this.cd.markForCheck();
                // do check skipped or other lifecycle hooks in detect changes
                this.cd.detectChanges();
            }, 1000)
        })
    }
}
