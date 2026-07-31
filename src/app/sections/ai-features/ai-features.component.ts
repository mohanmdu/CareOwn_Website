import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-ai-features',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './ai-features.component.html',
  styleUrl: './ai-features.component.scss'
})
export class AiFeaturesComponent {
  readonly items = [
    { icon: 'calendar', title: 'AI Appointment Assistant', body: 'Smart scheduling suggestions for front-desk staff' },
    { icon: 'chat', title: 'AI Chatbot', body: 'Answers patient FAQs and routes urgent queries' },
    { icon: 'chart-bar', title: 'Smart Reports', body: 'Auto-summarized collection and activity reports' },
    { icon: 'trend', title: 'AI Analytics', body: 'Trend and anomaly detection across departments' },
    { icon: 'mic', title: 'Voice Assistant', body: 'Hands-free navigation for busy clinical staff' },
    { icon: 'ocr', title: 'OCR', body: 'Digitize scanned reports and old paper records' },
    { icon: 'prescription', title: 'Digital Prescription', body: 'Structured, legible prescriptions every time' }
  ];
}
