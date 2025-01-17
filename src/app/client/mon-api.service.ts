import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonDetail, PokemonList } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonApiService {

  constructor() { }
  httpClient = inject(HttpClient);
  getPokemons(limit: number, offset: number): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }


  getPokemon(uri:string): Observable<PokemonDetail> {
    return this.httpClient.get<PokemonDetail>(uri);
  }

}
