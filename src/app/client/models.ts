export interface PokemonRequest {
    count: number,
    next: string,
    previous: string,
    results: {
        name: string,
        url: string
    }[]    
}

export interface Pokemon {
    name: string,
    url: string,
    id: string,
}

export interface PokemonDetail {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: {
        is_hidden: boolean,
        slot: number,
        ability: {
            name: string,
            url: string
        }
    }[],
    forms: {
        name: string,
        url: string
    }[],
    game_indices: {
        game_index: number,
        version: {
            name: string,
            url: string
        }
    }[],
    held_items: {
        item: {
            name: string,
            url: string
        },
        version_details: {
            rarity: number,
            version: {
                name: string,
                url: string
            }
        }[]
    }[],
    location_area_encounters: string,
    moves: {
        move: {
            name: string,
            url: string
        },
        version_group_details: {
            level_learned_at: number,
            version_group: {
                name: string,
                url: string
            },
            move_learn_method: {
                name: string,
                url: string
            }
        }[]
    }[],
    species: {
        name: string,
        url: string
    },
    sprites: {
        back_default: string,
        back_female: string | null,
        back_shiny: string,
        back_shiny_female: string | null,
        front_default: string,
        front_female: string | null,
        front_shiny: string,
        front_shiny_female: string | null,
        other?: {
            dream_world: {
                front_default: string,
                front_female: string | null
            },
            home: {
                front_default: string,
                front_female: string | null,
                front_shiny: string,
                front_shiny_female: string | null
            },
            "official-artwork": {
                front_default: string
            }
        },
        versions?: {
            [key: string]: {
                [key: string]: {
                    back_default: string,
                    back_female: string | null,
                    back_shiny: string,
                    back_shiny_female: string | null,
                    front_default: string,
                    front_female: string | null,
                    front_shiny: string,
                    front_shiny_female: string | null
                }
            }
        }
    },
    stats: {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }[],
    types: {
        slot: number,
        type: {
            name: string,
            url: string
        }
    }[]
}


export interface PokemonType {
    id: number;
    sprites: {
        "generation-ix": {
            "scarlet-violet": {
                "name_icon": string
            }
        }
    }
}

export interface PokemonSpecies {
    egg_groups: {name: string}[];
    capture_rate: number;
    is_legendary: false;
    is_mythical: false;
    names: {
        name: string;
        language: {
            name: string;
            url: string;
        }
    }[]
}