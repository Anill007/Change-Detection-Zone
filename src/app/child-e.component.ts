import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { BaseComponent } from './base.component';
import { HttpClient } from '@angular/common/http';
import { of, timer } from 'rxjs';

@Component({
  selector: 'app-child-e',
  standalone: true,
  template: `Child E {{cdTriggered()}}
  <br> Subscrptions do trigger CD cycle`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildE extends BaseComponent {
    protected timer = 0;
    constructor(zone: NgZone, elRef: ElementRef, protected cd: ChangeDetectorRef) {
        super(zone, elRef);
        timer(7000).subscribe(() => {});
    }
}
