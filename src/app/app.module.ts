import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule
import { provideHttpClient } from '@angular/common/http'; // Corrigido o nome do import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Corrigido para NgbModule
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Movido para cá (módulo necessário para forms)
    NgbModule // Corrigido para NgbModule
  ],
  providers: [provideHttpClient()], // Nome corrigido
  bootstrap: [AppComponent]
})
export class AppModule {}
