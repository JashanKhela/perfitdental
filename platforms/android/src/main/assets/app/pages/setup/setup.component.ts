import  {Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router"
import { Page} from "ui/page";

@Component({
    selector: "setup-page",
    templateUrl: "./pages/setup/setup.component.html",
    styleUrls: ["pages/setup/setup-common.css"]
})

export class setupPage{
    constructor(private page: Page){
        this.page.actionBarHidden = true;
    }
   
}