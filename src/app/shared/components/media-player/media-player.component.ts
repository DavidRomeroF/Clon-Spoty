import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model';
import { start } from 'repl';

@Component({
  selector: 'app-media-player',
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit{
  mockCover: TrackModel = {
  cover: 'http://i.scdn.co/image/ab67616d0000b273aae4d69c976988ed29d6dab1',
  album: 'Bota Niña',
  name: 'Bad Gyal, Anitta',
  url: 'http://localhost/track.mp3',
  _id: 1,
  duration: {
    start: 0,
    end: 180
  }
}


  constructor() { }

  ngOnInit(): void {

  }
}
