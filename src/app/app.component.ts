import { Component } from '@angular/core';
import { ChildA } from './child-a.component';
import { ChildB } from './child-b.component';
import { ChildC } from './child-c.component';
import { BaseComponent } from './base.component';
import { ChildD } from './child-d.component';
import { ChildE } from './child-e.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildA, ChildB, ChildC, ChildD, ChildE],
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent {
  protected randomNum = 0;
  protected trigger(): void {
    this.randomNum = Math.random();
  }
}
