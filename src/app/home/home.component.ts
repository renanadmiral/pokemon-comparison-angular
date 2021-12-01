import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  desiredPokemons: string[] = ['moltres', 'zapdos', 'articuno'];
  pokemonsData: Object[] = [];
  chosenStat: string = 'hp';
  maxStat: number = 0;
  selectedStat: string= '';

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getpokemonsData(this.desiredPokemons);
  }

  getpokemonsData(desiredPokemons: string[]) {
    desiredPokemons.forEach((pokemon) => {
      this.service.getPokemon(pokemon)
      .subscribe((pokemonResponse) => this.pokemonsData.push(pokemonResponse));
    });
  }

  changeSelectedStat(event: any) {
    this.selectedStat = event.target.value
  }

  findChosenStatValue(pokemon: any) {
    return (pokemon.stats.find((stat: any) => stat.stat.name === this.chosenStat)).base_stat;
  }

  defineMaxStat() {
    this.chosenStat = this.selectedStat;
    const comparisonArr = this.pokemonsData.map((pokemon: any) => {
      return this.findChosenStatValue(pokemon);
    });

    this.maxStat = Math.max(...comparisonArr);
  }

}
