import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CatComponent } from './cat/cat.component';
import { CatService } from './cat/cat.service';
import { HttpClientModule } from '@angular/common/http';
import { UnlessDirective } from './unless.directive';
import { CatAddComponent } from './cat-add/cat-add.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatHeaderComponent } from './cat-header/cat-header.component';
import { CatControlsComponent } from './cat-controls/cat-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CatComponent,
    UnlessDirective,
    CatAddComponent,
    CatDetailsComponent,
    CatHeaderComponent,
    CatControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
