import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(pokemon: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon);
  }
}
