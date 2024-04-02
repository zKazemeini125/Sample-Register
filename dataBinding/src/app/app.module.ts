import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersTableComponent } from "./users-table/users-table.component";
import { UserComponent } from "./user/user.component";
import { CarouselDirective } from "./directives/carousel.directive";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersTableComponent,
    CarouselDirective,
    
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
