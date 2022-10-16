import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ContactService } from './services/contact.service';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DeleteContactComponent,
    ListContactComponent,
    UpdateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
