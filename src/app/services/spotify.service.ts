import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[];
  baseUrl:string= "https://api.spotify.com/v1/"

  constructor(public http:HttpClient) { }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization':'Bearer BQAP3umamJ4bynJGpfwi-xzaHxfAGy8xQfS_vJgjhHZFR3iczL9tlmVGf3u_eTsPQ4HegQVjY1H_7LntO2s'
    });
    return headers;
  }

  getArtistas(termino:string){
    let url = `${this.baseUrl}search?query=${termino}&type=artist&market=US&offset=0&limit=20`;
    let headers = this.getHeaders();
    return this.http.get(url, {headers}).map( (resp:any) =>{
      this.artistas = resp.artists.items
      return this.artistas ;
    });
  }

  getArtist(id:string){
    let url = `${this.baseUrl}artists/${id}`
    let headers = this.getHeaders();
    return this.http.get(url, {headers});
  }

}
