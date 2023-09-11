import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ResourceComponent } from './resource/resource.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'resource', component: ResourceComponent},
  {path: 'sustain', component: SustainabilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
