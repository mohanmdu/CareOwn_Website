import { Component } from '@angular/core';
import { IconSpriteComponent } from './shared/icon-sprite/icon-sprite.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { TrustedByComponent } from './sections/trusted-by/trusted-by.component';
import { AboutComponent } from './sections/about/about.component';
import { ProductsComponent } from './sections/products/products.component';
import { ModulesComponent } from './sections/modules/modules.component';
import { WhyChooseComponent } from './sections/why-choose/why-choose.component';
import { DashboardShowcaseComponent } from './sections/dashboard-showcase/dashboard-showcase.component';
import { AiFeaturesComponent } from './sections/ai-features/ai-features.component';
import { MobileAppComponent } from './sections/mobile-app/mobile-app.component';
import { ComparisonComponent } from './sections/comparison/comparison.component';
import { CaseStudyComponent } from './sections/case-study/case-study.component';
import { TimelineComponent } from './sections/timeline/timeline.component';
import { PricingComponent } from './sections/pricing/pricing.component';
import { FaqComponent } from './sections/faq/faq.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ToastComponent } from './shared/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IconSpriteComponent,
    ToastComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    TrustedByComponent,
    AboutComponent,
    ProductsComponent,
    ModulesComponent,
    WhyChooseComponent,
    DashboardShowcaseComponent,
    AiFeaturesComponent,
    MobileAppComponent,
    ComparisonComponent,
    CaseStudyComponent,
    TimelineComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
