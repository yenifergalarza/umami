import { Component, OnInit } from "@angular/core";
import { ProductosService } from "../../services/productos.service";
import { SwiperOptions } from "swiper";
@Component({
  selector: "app-portafolio",
  templateUrl: "./portafolio.component.html",
  styleUrls: ["./portafolio.component.css"],
})
export class PortafolioComponent implements OnInit {
  constructor(public productosServices: ProductosService) {}
  config: SwiperOptions = {
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "@0.50": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };

  ngOnInit() {}
}
