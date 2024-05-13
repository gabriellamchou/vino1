import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VinosListComponent } from './vinos-list/vinos-list.component';
import { VinoItemComponent } from './vinos-list/vino-item/vino-item.component';
import { HeaderComponent } from './header/header.component';
import { VinoDetailComponent } from './vino-detail/vino-detail.component';
import { UvaDetailComponent } from './uva-detail/uva-detail.component';
import { UvaEditComponent } from './uva-edit/uva-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VinosListComponent,
    VinoItemComponent,
    HeaderComponent,
    VinoDetailComponent,
    UvaDetailComponent,
    UvaEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
