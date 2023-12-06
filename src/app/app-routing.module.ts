import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ResourceComponent } from './resource/resource.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { MonodonComponent } from './monodon/monodon.component';
import { LearnComponent } from './learn/learn.component';
import { UnibayComponent } from './unibay/unibay.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'resource', component: ResourceComponent},
  {path: 'sustain', component: SustainabilityComponent},
  {path: 'monodon', component: MonodonComponent},
  { path: 'learn', component: LearnComponent },
  { path: 'unibay', component: UnibayComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
