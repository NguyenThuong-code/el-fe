import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router, UrlSegment, UrlTree} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {
    // Subscribe to router events to listen for navigation changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check the active route and update a flag accordingly
        this.updateRouteFlags();
      }
    });
  }
  private updateRouteFlags(): void {
    // Optional: If you need to perform additional actions on route change
  }
  ngOnInit(): void {
  }
  // isUserRouteActive(): boolean {
  //   const urlTree = this.router.parseUrl(this.router.url);
  //   const segments = urlTree.root.children['primary'].segments;
  //   return segments.some(segment => segment.path === 'user' || segment.path === 'display');
  // }
  //
  // isContactRouteActive(): boolean {
  //   const urlTree = this.router.parseUrl(this.router.url);
  //   const segments = urlTree.root.children['primary'].segments;
  //   return segments.some(segment => segment.path === 'contact');
  // }

}
