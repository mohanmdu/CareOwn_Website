import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-mobile-app',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './mobile-app.component.html',
  styleUrl: './mobile-app.component.scss'
})
export class MobileAppComponent {}
