import { Component, ResourceStatus, computed, effect, linkedSignal, signal } from '@angular/core';
import { Pokemon, PokemonRequest } from '../../models';
import { getIdFromUrl } from '../table/table.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-reactlike-table',
  imports: [DetailComponent],
  standalone: true,
  templateUrl: './reactlike-table.component.html',
  styleUrl: './reactlike-table.component.scss'
})
export class ReactlikeTableComponent {
  rs = ResourceStatus;

  page = signal(1);
  limit = signal(10);
  selected = signal('');

  pokemonResources = signal<Pokemon[]>([]);
  displayed = signal<Pokemon[]>([]);
  
  pokemonFetch = effect(() => {
      const offset = (this.page() - 1) * this.limit();
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit()}&offset=${offset}`)
        .then((res) => res.json())
        .then((result: PokemonRequest) => {
          const r = result.results.map((p) => {
            return { id: getIdFromUrl(p.url), ...p };
          });
          this.pokemonResources.set(r);
        },
        (error) => {
          throw new Error(`Unable to load ! : ${error}`);
        }
      );
  });



  previousEffect = effect(() => {
    if (this.pokemonResources()?.length) {
      this.displayed.update(() => this.pokemonResources())
    }
  })
}
