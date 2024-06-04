import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { ResourceComponent } from './resource/resource.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { AssosciatesComponent } from './components/assosciates/assosciates.component';
import { MonodonComponent } from './monodon/monodon.component';
import { LearnComponent } from './learn/learn.component';
import { UnibayComponent } from './unibay/unibay.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { MediaComponent } from './media/media.component';
import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    MainComponent,
    AboutComponent,
    WelcomeComponent,
    PrivacyComponent,
    TermsComponent,
    ResourceComponent,
    SustainabilityComponent,
    AssosciatesComponent,
    MonodonComponent,
    LearnComponent,
    UnibayComponent,
    OffcanvasComponent,
    MediaComponent,
    NewsComponent,
    EventComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule,MatButtonModule,MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
