import { Component, ResourceStatus, computed, inject, input, resource } from '@angular/core';
import { MonApiService } from '../../mon-api.service';
import { JsonPipe } from '@angular/common';
import { PokemonType } from '../../models';

@Component({
  selector: 'app-type',
  imports: [JsonPipe],
  standalone: true,
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss'
})
export class TypeComponent {
  type = input.required< {
    name: string;
    url: string;
  }>();

  typeSpriteUrl = resource({
    request: () => ({rUrl: this.type().url}),
    loader: (params) => {
      return fetch(params.request.rUrl, {signal: params.abortSignal}).then(r => r.json())
    }
  })

  spriteUri = computed(() => {
    if (!this.typeSpriteUrl.hasValue()) return undefined;
    const res = this.typeSpriteUrl.value() as PokemonType;
    return res.sprites['generation-ix']['scarlet-violet'].name_icon;
  })
}