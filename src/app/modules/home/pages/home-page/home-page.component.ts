import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from "../../../../shared/components/side-bar/side-bar.component";
import { MediaPlayerComponent } from "../../../../shared/components/media-player/media-player.component";

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [SideBarComponent, RouterModule, MediaPlayerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
