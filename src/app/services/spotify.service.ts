import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[];

  constructor(public http:HttpClient) { }

  getArtistas(termino:string){
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=US&offset=0&limit=20`;
    let headers = new HttpHeaders({
      'authorization':'Bearer BQCpUyjn-tSi4CI3xubCKZWHxwx5ql5V8WPivqrP_rhtu9MhJGjX3U_7_MPt9WRigpOTHjXQRJP4axiq9CM'
    });
    return this.http.get(url, {headers}).map( (resp:any) =>{
      this.artistas = resp.artists.items
      return this.artistas ;
    });
  }

}
