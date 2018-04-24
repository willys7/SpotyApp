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

  ngOnInit() {
    this.route.params.map( params => params['id']).subscribe(id => {
      console.log(id);
    });
  }

}
