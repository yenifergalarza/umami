import { Component, OnInit } from "@angular/core";
import { ProductosService } from "../../services/productos.service";
@Component({
  selector: "app-smoothies",
  templateUrl: "./smoothies.component.html",
  styleUrls: ["./smoothies.component.css"],
})
export class SmoothiesComponent implements OnInit {
  constructor(public productosServices: ProductosService) {}

  ngOnInit() {}
}
