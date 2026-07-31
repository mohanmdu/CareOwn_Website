import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="container trusted">
      <div class="trusted-row">
        <div class="trusted-item"><app-icon name="building" /> Multi-Specialty Hospitals</div>
        <div class="trusted-item"><app-icon name="stetho" /> Clinics &amp; Diagnostic Centres</div>
        <div class="trusted-item"><app-icon name="bed" /> Nursing Homes</div>
        <div class="trusted-item"><app-icon name="heart-pulse" /> Emergency Care Units</div>
      </div>
      <p class="trusted-note">Illustrative categories — real hospital case studies featured as deployments go live.</p>
    </div>
  `,
  styles: [
    `
      .trusted {
        padding: var(--space-5) 0;
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
      }

      .trusted-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-6);
        flex-wrap: wrap;
      }

      .trusted-item {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        font-weight: 700;
        font-size: 0.92rem;
        color: var(--text-muted);

        .icon {
          color: var(--primary);
        }
      }

      .trusted-note {
        text-align: center;
        font-size: 0.76rem;
        color: var(--text-faint);
        margin: var(--space-3) 0 0;
      }
    `
  ]
})
export class TrustedByComponent {}
