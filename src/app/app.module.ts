import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component'; // Verifique o caminho
import { ChildComponent } from './components/child/child.component'; // Verifique o caminho
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent, // Certifique-se de que o ParentComponent está aqui
    ChildComponent   // Certifique-se de que o ChildComponent está aqui
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionar FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adicione esta linha
})
export class AppModule { }


