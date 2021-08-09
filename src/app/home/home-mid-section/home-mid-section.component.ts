import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-mid-section',
  templateUrl: './home-mid-section.component.html',
  styleUrls: ['./home-mid-section.component.scss']
})
export class HomeMidSectionComponent implements OnInit {

  cardsSteps= {
    cardOne: {
      title: "Registrate en eventually",
      number: "1",
      image: "../../../assets/svg/register-icon.svg"
    },
    cardTwo: {
      title: "Busca tu comunidad favorita",
      number: "2",
      image: "../../../assets/svg/search-community-icon.svg"
    },
    cardThree: {
      title: "Registrate en un evento",
      number: "3",
      image: "../../../assets/svg/register-event-icon.svg"
    },
    cardFour: {
      title: "Únete a tu grupo y disfruta",
      number: "4",
      image: "../../../assets/svg/join-team-icon.svg"
    }
  }

  dateSteps = Object.values(this.cardsSteps)


  constructor() { }

  ngOnInit(): void {
  }

}
