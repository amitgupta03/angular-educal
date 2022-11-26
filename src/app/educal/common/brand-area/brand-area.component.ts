import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-brand-area',
  templateUrl: './brand-area.component.html',
  styleUrls: ['./brand-area.component.scss']
})
export class BrandAreaComponent implements OnInit {

  brandData = [
    {
      id: "1",
      img: "assets/img/brand/brand-1.png",
    },
    {
      id: "2",
      img: "assets/img/brand/brand-2.png",
    },
    {
      id: "3",
      img: "assets/img/brand/brand-3.png",
    },
    {
      id: "10",
      img: "assets/img/brand/brand-10.png",
    },
    {
      id: "4",
      img: "assets/img/brand/brand-6.jpg",
    },
    {
      id: "5",
      img: "assets/img/brand/brand-5.png",
    },
    {
      id: "6",
      img: "assets/img/brand/brand-4.png",
    },
    {
      id: "7",
      img: "assets/img/brand/brand-7.jpg",
    },
    {
      id: "8",
      img: "assets/img/brand/brand-8.png",
    },
    {
      id: "9",
      img: "assets/img/brand/brand-9.png",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
