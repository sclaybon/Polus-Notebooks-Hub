import {Component, OnInit} from '@angular/core';
import {AuthService, EventService} from '@labshare/ngx-core-services';
import {Router} from '@angular/router';
import {LeftMenuEventKeys} from '@labshare/ngx-components/left-menu';
import {filter} from 'rxjs/operators';
import { labshareConfig } from './theme/config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public onAuthorizationResult;
  public tokenResponse: String;
  constructor(private authService: AuthService, private router: Router, private eventService: EventService) {
    this.onAuthorizationResult = this.authService.onAuthorizationResult();

  }

  ngOnInit(): void {
    
    this.authService.onAuthCallback();

    /* Observable for receiving the Auth Events */
    this.onAuthorizationResult.subscribe(result => {
      if (result.authorizationState === 'authorized') {
        console.log(`authorized`);
      }
    });

    /* Observable for receiving AppMenu Events and navigating to route */
    this.eventService
      .get(LeftMenuEventKeys.OnClick)
      .pipe(filter(i => !!i))
      .subscribe(i => {
        this.router.navigate(['labshare', i.route]);
      });

  }

    get token() {

      //add an ngIf conditional directive to protect against the router for the initial page load
      //consider routeGuards after the logic is working
      let token: String = this.authService.getAccessToken();
      // console.log(token);
      return token ? token : null;

    }
}