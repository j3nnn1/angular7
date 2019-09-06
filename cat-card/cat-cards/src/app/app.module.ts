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
import { NotFoundComponent } from './not-found/not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInput, MatInputModule, MatIconModule, MatFormFieldControl} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CatComponent,
    UnlessDirective,
    CatAddComponent,
    CatDetailsComponent,
    CatHeaderComponent,
    CatControlsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
