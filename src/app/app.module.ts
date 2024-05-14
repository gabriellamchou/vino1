import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VinosListComponent } from './vino/vinos-list/vinos-list.component';
import { VinoItemComponent } from './vino/vinos-list/vino-item/vino-item.component';
import { HeaderComponent } from './header/header.component';
import { VinoDetailComponent } from './vino/vino-detail/vino-detail.component';
import { UvaDetailComponent } from './uva/uva-detail/uva-detail.component';
import { UvaEditComponent } from './uva/uva-edit/uva-edit.component';
import { VinoComponent } from './vino/vino.component';
import { UvaComponent } from './uva/uva.component';

@NgModule({
  declarations: [
    AppComponent,
    VinosListComponent,
    VinoItemComponent,
    HeaderComponent,
    VinoDetailComponent,
    UvaDetailComponent,
    UvaEditComponent,
    VinoComponent,
    UvaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
