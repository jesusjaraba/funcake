import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  url: SafeResourceUrl;
  exist:boolean;

  constructor(sanitizer: DomSanitizer) { 
    this.url = sanitizer.bypassSecurityTrustResourceUrl('https://itch.io/embed-upload/1693595?color=333333');
  }

  ngOnInit() {
    this.exist = localStorage.exist? true: false;
  }

}
