import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimeModel } from '../models/anime.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  header = new HttpHeaders('Content')

  constructor(
    private http: HttpClient,
    private animeModel: AnimeModel
  ) { }

  getAnimeList(url) {
    return new Promise((ok, rej) => {
      this.http.get(url).subscribe((pass: any) => {
        this.animeModel.animeArray.push(pass.results)
        console.log(this.animeModel.animeArray[0]);
        ok(this.animeModel.animeArray[0])
      }, (error) => {
        console.log(error);
        rej(error)
      })
    })
  }
  getAnimeInformation(url){
    return new Promise((ok)=>{
      this.http.get(url).subscribe((pass:any)=>{

        this.animeModel.animeInfo.title = pass.title
        this.animeModel.animeInfo.airing = pass.airing
        this.animeModel.animeInfo.episodes = pass.episodes
        this.animeModel.animeInfo.genres = pass.genres
        this.animeModel.animeInfo.rating = pass.rating
        this.animeModel.animeInfo.trailerUrl = pass.trailer_url
        this.animeModel.animeInfo.imgUrl = pass.image_url
        this.animeModel.animeInfo.score = pass.score
        console.log(this.animeModel.animeInfo);
        
        ok(this.animeModel.animeInfo)
      })
    })
  }
}
