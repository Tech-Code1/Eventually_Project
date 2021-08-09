import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.scss']
})
export class CreateCommunityComponent implements OnInit {


  planes = {
    plan1: {
      name: "Plan Básico",
      price: "Plan gratuito",
      benefits:
      ["Crear landing para tu comundiad",
      "Crear blog para tu comunidad",
      "Tu comunidad aparecerá de manera global en la sección de comunidades"],
      button: "button1"
    },
    plan2: {
      name: "Plan Medio",
      price: "Suscripción 10 USD / mes",
      benefits:
      ["Crear landing para tu comundiad",
      "Crear blog para tu comunidad",
      "Tu comunidad aparecerá de manera global en la sección de comunidades",
    "Te permite vender los articulos de tu comunidad"],
    button: "button2"
    },
    plan3: {
      name: "Plan Pro",
      price: "Suscripción 25 USD / mes",
      benefits:
      ["Crear landing para tu comundiad",
      "Crear blog para tu comunidad",
      "Tu comunidad aparecerá de manera global en la sección de comunidades",
      "Te permite vender los articulos de tu comunidad",
      "Podrás hacer eventos en tu comunidad con una mecanica bastante dinamica",
      "Tu evento aparecerá de manera global en la sección de eventos"],
      button: "button3"
    }
  }

  data = Object.values(this.planes)

  constructor() { }

  ngOnInit(): void {
  }


  recorrido() {
    let planesone = this.planes.plan1.benefits && this.planes.plan2.benefits && this.planes.plan3.benefits;
    for (let index = 0; index < planesone.length; index++) {
      const element = planesone[index];
    }
    return planesone;
  }

}



