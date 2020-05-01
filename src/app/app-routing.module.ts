import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { SearchComponent } from "./pages/search/search.component";
import { SmoothiesComponent } from "./pages/smoothies/smoothies.component";

const app_routes: Routes = [
  { path: "home", component: PortafolioComponent },
  { path: "smoothies", component: SmoothiesComponent },
  { path: "about", component: AboutComponent },
  { path: "item/:id", component: ItemComponent },
  { path: "search/:termino", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
