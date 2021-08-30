import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  constructor(
    private router: Router,
    public playerService: PlayerService
  ) { }

  addPlayer() {
    this.router.navigate(['/add-player']);
  }

  deletePlayer(id: string) {
    this.playerService.deletePlayer(id);
  }
}