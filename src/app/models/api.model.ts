import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ApiModel {

   searchOptions={
    searchMode : '',
    searchInput : ''
   }
    searchApi = `https://api.jikan.moe/v3/search/anime?q=`;
    singleAnimeApi = `https://api.jikan.moe/v3/anime/`
    // rootApi = `https://api.jikan.moe/v3/${this.searchMode}`;
}