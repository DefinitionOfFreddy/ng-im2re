import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Type } from '@angular/core';
import { PokemonDetail, PokemonRequest, PokemonSpecies, PokemonType } from './models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonApiService {

  constructor() { }
  httpClient = inject(HttpClient);
  getPokemons(limit: number, offset: number): Observable<PokemonRequest> {
    return this.httpClient.get<PokemonRequest>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }


  getPokemonDetail(uri:string): Observable<PokemonDetail> {
    return this.httpClient.get<PokemonDetail>(uri);
  }

  getSpecies(uri:string): Observable<PokemonSpecies> {
    return this.httpClient.get<any>(uri)
  }
}
