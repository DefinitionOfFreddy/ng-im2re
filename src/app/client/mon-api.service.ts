import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonDetail, PokemonRequest } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonApiService {

  constructor() { }
  httpClient = inject(HttpClient);
  getPokemons(limit: number, offset: number): Observable<PokemonRequest> {
    return this.httpClient.get<PokemonRequest>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }


  getPokemon(uri:string): Observable<PokemonDetail> {
    return this.httpClient.get<PokemonDetail>(uri);
  }

}
