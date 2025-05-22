import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dataRaw from '../../../../data/tracks.json';

import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  imports: [SectionGenericComponent,CommonModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{
  mockTrackList: Array<TrackModel> = [

  ]

  constructor() { }

  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default
    this.mockTrackList = data
  }
}
