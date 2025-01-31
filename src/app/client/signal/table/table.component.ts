import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  linkedSignal,
  ResourceLoaderParams,
  ResourceStatus,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { MonApiService } from '../../mon-api.service';
import { JsonPipe } from '@angular/common';
import { Pokemon, PokemonRequest } from '../../models';
import { FormsModule } from '@angular/forms';
import { catchError, debounceTime, delay, map, switchMap } from 'rxjs';
import { DetailComponent } from '../detail/detail.component';

function getIdFromUrl(url: string) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

@Component({
  selector: 'app-table',
  imports: [FormsModule, DetailComponent],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  page = signal(1);
  limit = signal(10);

  rs = ResourceStatus;

  selected = signal('');

  private monApiService = inject(MonApiService);

  pokemonsResource = rxResource<Pokemon[], { page: number; limit: number }>({
    request: () => ({ page: this.page(), limit: this.limit() }),
    loader: (params: ResourceLoaderParams<{ page: number; limit: number }>) => {
      return this.monApiService
        .getPokemons(
          params.request.limit,
          (params.request.page - 1) * params.request.limit
        )
        .pipe(
          catchError((error) => {
            throw new Error(`Unable to load ! : ${error}`);
          }),
          delay(600),
          map((response: PokemonRequest) =>
            response.results.map((pokemon) => {
              return { id: getIdFromUrl(pokemon.url), ...pokemon };
            })
          )
        );
    },
  });

  pokemonListWithPrevious = linkedSignal<Pokemon[] | undefined, Pokemon[]>({
    source: this.pokemonsResource.value,
    computation: (newPokemons, previous) => {
      if (newPokemons?.length) return newPokemons;
      return previous?.value ?? [];
    },
  });
}
