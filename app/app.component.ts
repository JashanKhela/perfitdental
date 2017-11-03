import { Component } from "@angular/core";
import { Page } from "ui/page"; // to hide action bar

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
    constructor(private page: Page) {
        page.actionBarHidden = true;
    }
}