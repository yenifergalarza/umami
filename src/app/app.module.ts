import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Angular2UsefulSwiperModule } from "angular2-useful-swiper";
import { HttpClientModule } from "@angular/common/http";

// Rutas
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { SearchComponent } from "./pages/search/search.component";
import { SmoothiesComponent } from "./pages/smoothies/smoothies.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    SmoothiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Angular2UsefulSwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
