import { Component } from '@angular/core';
import { ChildA } from './child-a.component';
import { ChildB } from './child-b.component';
import { ChildC } from './child-c.component';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildA, ChildB, ChildC],
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent {
  protected randomNum = 0;
  protected trigger(): void {
    this.randomNum = Math.random();
  }
}
