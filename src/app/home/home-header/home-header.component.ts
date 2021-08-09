import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  cards= {
    cardOne: {
      title: "Eventos",
      image: "../../../assets/jpg/Events.jpg",
      link: "/eventos"
    },
    cardTwo: {
      title: "Tienda",
      image: "../../../assets/jpg/shop.jpg",
      link: "/tienda"
    },
    cardThree: {
      title: "Comunidades",
      image: "../../../assets/jpg/communities.jpg",
      link: "/comunidades"
    }
  }

  dateOfCards = Object.values(this.cards)

  constructor() { }

  ngOnInit(): void {
  }

}
