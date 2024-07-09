import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MaiorIdadeDirective } from './directives/maior-idade.directive';
import { ValidandoCepDirective } from './directives/validando-cep.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent, MensagemComponent, MaiorIdadeDirective, ValidandoCepDirective],
  imports: [BrowserModule, AppRoutingModule,FormsModule,AngularFireModule.initializeApp(environment.firebase),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
