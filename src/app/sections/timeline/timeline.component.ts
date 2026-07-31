import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  readonly steps = [
    { icon: 'search', title: 'Requirement Analysis', body: 'Understand your departments, workflows, and package tier' },
    { icon: 'gear', title: 'Setup', body: 'Masters, roles, branding, and clinic settings configured' },
    { icon: 'migrate', title: 'Data Migration', body: 'Existing patient and billing data brought into CareOwn HMS' },
    { icon: 'graduation', title: 'Training', body: 'Front desk, billing, and clinical staff trained on their screens' },
    { icon: 'rocket', title: 'Go Live', body: 'Your hospital runs on CareOwn HMS, fully supported' },
    { icon: 'headset', title: 'Support', body: 'Ongoing 24×7 support as your hospital grows' }
  ];
}
