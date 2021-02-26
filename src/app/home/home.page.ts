import { Component } from '@angular/core';
import { AnimeModel } from '../models/anime.model';
import { ApiModel } from '../models/api.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animeArray = []
  hideSearchResult = false
  constructor(
    private apiService: ApiService,
    public apiModel: ApiModel,
    public animeModel: AnimeModel
  ) { }

  Util = {
    Get: (searchInput) => {
      this.hideSearchResult = false
      this.apiModel.searchOptions.searchInput = searchInput
      this.apiService.getAnimeList(`${this.apiModel.searchApi}${this.apiModel.searchOptions.searchInput}`).then((anime: any) => {
        this.animeArray = anime
      }).then(() => {
        this.animeArray.splice(20, 50)
      }).then(() => {
        this.animeModel.animeArray = []
        this.apiModel.searchOptions.searchInput = ''
      })
    },
    SelectAnime: (selectedAnimeId,list) => {
      this.apiService.getAnimeInformation(`${this.apiModel.singleAnimeApi}${selectedAnimeId}`).then(()=>{
        this.hideSearchResult = true
        this.animeArray= []
        list.el.hidden = true
      })
    }
  }
}
