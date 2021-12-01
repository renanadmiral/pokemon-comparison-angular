import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() data: any;
  @Input() maxStat: any;
  @Input() chosenStat: any;

  desiredStats: string[] = ["hp", "attack", "defense", "speed"];
  constructor() {

  }

  ngOnInit(): void {
  }

  findChosenStatValue(pokemon: any) {
    return (pokemon.stats.find((stat: any) => stat.stat.name === this.chosenStat)).base_stat;
  }

}
