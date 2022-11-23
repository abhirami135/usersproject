import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistsComponent } from './userlists/userlists.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { AddlistComponent } from './addlist/addlist.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { DeletelistComponent } from './deletelist/deletelist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{ HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserlistsComponent,
    ViewlistComponent,
    AddlistComponent,
    UpdatelistComponent,
    DeletelistComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

