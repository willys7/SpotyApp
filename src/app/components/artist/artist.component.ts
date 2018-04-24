import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private route:ActivatedRoute, public _spotify:SpotifyService ) { }

  artist:any = {};
  songs:any = {};
  ngOnInit() {
    this.route.params.map( params => params['id']).subscribe(id => {
      console.log(id);
      this._spotify.getArtist(id).subscribe(artist =>{
        this.artist = artist;
        console.log(this.artist);
      });

      this._spotify.getTop(id).map((resp:any) => resp.tracks).subscribe(songs =>{
        this.songs = songs;
        console.log(songs);
      })
    });
  }

}
