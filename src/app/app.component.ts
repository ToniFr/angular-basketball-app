import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SplitService } from './services/split.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private splitService: SplitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.user)
        this.splitService.initSdk(params.user);
    });
  }
}
