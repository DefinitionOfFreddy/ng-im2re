import { Component, computed, effect, inject, Injector, Signal, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MonApiService } from '../../mon-api.service';
import { JsonPipe } from '@angular/common';
import { PokemonList } from '../../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [JsonPipe, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  page = signal(1);
  limit = signal(10);


  private _injector = inject(Injector);
  private monApiService = inject(MonApiService);
  pokemonsSignal: Signal<PokemonList | undefined>;

  // list: WritableSignal<PokemonList | undefined> = signal(undefined);


  


  constructor() {
    this.pokemonsSignal = toSignal(
      this.monApiService.getPokemons(this.limit(), (this.page() - 1) * this.limit()),      
    );
  }

}
