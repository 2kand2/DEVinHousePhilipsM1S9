import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    ModalComponent,
    NavbarComponent,
    ItemCardComponent,
    FormRegisterComponent,
    SearchBoxComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
