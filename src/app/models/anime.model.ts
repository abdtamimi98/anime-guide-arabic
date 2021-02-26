import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AnimeModel {
    animeArray = []
    animeInfo = {
        title:'',
        episodes:0,
        airing:false,
        genres:[],
        imgUrl:'',
        rating:'',
        score:'',
        trailerUrl:''
    }
}