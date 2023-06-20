import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  myScriptElement: HTMLScriptElement;

  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/js/script.js"
  }
}
