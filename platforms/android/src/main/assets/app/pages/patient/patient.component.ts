import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location, enableLocationRequest, watchLocation, clearWatch } from "nativescript-geolocation";

@Component({
    selector: "patient-page",
    templateUrl: "./pages/patient/patient.component.html"
})

export class patientPage{
    public monitorDirection: string = "0";
    public isMonitoring = false;
    public options;
    public listener;
    public buttonText = "Start location monitoring";

    constructor() {
        enableLocationRequest(true);
    }

    public monitor(args) {
        // >> location-monitoring
        if (this.isMonitoring) {
            clearWatch(this.listener);
            this.isMonitoring = false;
            this.buttonText = "Start location monitoring";
        } else {
            this.listener = watchLocation((loc: Location) => {
                if (loc) { 
                    this.monitorDirection = (loc.direction).toFixed(2);                    
                }
            }, (e) => {
                console.log("Error: " + e.message);
            }, this.options);

            this.isMonitoring = true;
            this.buttonText = "Stop location monitoring";
        }
    }

}