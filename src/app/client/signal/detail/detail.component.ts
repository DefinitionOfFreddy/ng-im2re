import {
  Component,
  WritableSignal,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { MonApiService } from '../../mon-api.service';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { of, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TypeComponent } from '../type/type.component';

@Component({
  selector: 'app-detail',
  imports: [AsyncPipe, TypeComponent],
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  monApiService = inject(MonApiService);

  url = input.required<string>();

  url$ = toObservable(this.url);
  pokemonDetail$ = this.url$.pipe(
    switchMap((url) => this.monApiService.getPokemonDetail(url))
  );
  pokemonDetailSignal = toSignal(this.pokemonDetail$);

  types = computed(() => {
    const detail = this.pokemonDetailSignal();
    console.log(detail);
    if (!detail) return [];
    return detail.types.map((t) => t.type);
  });

  speciesDetails = rxResource({
    request: () => this.pokemonDetailSignal(),
    loader: (params) => {
      const detail = params.request;
      if (!detail) return of(undefined);
      return this.monApiService.getSpecies(detail.species.url);
    },
  });

  constructor() {
    effect(() => {
      console.log(`The url has been updated : ${this.url()}`);
    });
  }

  encounters: WritableSignal<undefined | any[]> = signal(undefined);
  
  //@deprecated ? : can be replaced by resource
  namedEffectEncountersExample = effect(async () => {
    const detail = this.pokemonDetailSignal();
    if (!detail) return;
    const res = (await fetch(
      `https://pokeapi.co/api/v2/pokemon/${detail.id}/encounters`
    ).then((r) => r.json())) as any[];
    this.encounters.set(res);
  });
}
