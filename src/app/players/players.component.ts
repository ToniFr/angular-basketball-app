import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { SplitService } from '../services/split.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  crudButtonsShown: boolean = false;

  constructor(
    private router: Router,
    public playerService: PlayerService,
    private splitService: SplitService
  ) { }

  ngOnInit() {
    this.splitService.sdkReady$.subscribe(() => {
      const treatment = this.splitService.getTreatment();
      console.log('treatment:', treatment)

      if (treatment === 'on')
        this.crudButtonsShown = true;
      else
        this.crudButtonsShown = false;
    }, error => {
      console.log('Error connecting to Split SDK');
    });
  }

  addPlayer() {
    this.router.navigate(['/add-player']);
  }

  deletePlayer(id: string) {
    this.playerService.deletePlayer(id);
  }
}