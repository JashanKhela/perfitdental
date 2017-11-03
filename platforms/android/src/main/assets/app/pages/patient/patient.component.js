"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var patientPage = (function () {
    function patientPage() {
        this.monitorDirection = "0";
        this.isMonitoring = false;
        this.buttonText = "Start location monitoring";
        nativescript_geolocation_1.enableLocationRequest(true);
    }
    patientPage.prototype.monitor = function (args) {
        var _this = this;
        // >> location-monitoring
        if (this.isMonitoring) {
            nativescript_geolocation_1.clearWatch(this.listener);
            this.isMonitoring = false;
            this.buttonText = "Start location monitoring";
        }
        else {
            this.listener = nativescript_geolocation_1.watchLocation(function (loc) {
                if (loc) {
                    _this.monitorDirection = (loc.direction).toFixed(2);
                }
            }, function (e) {
                console.log("Error: " + e.message);
            }, this.options);
            this.isMonitoring = true;
            this.buttonText = "Stop location monitoring";
        }
    };
    patientPage = __decorate([
        core_1.Component({
            selector: "patient-page",
            templateUrl: "./pages/patient/patient.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], patientPage);
    return patientPage;
}());
exports.patientPage = patientPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXRpZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxxRUFBc0c7QUFPdEc7SUFPSTtRQU5PLHFCQUFnQixHQUFXLEdBQUcsQ0FBQztRQUMvQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUdyQixlQUFVLEdBQUcsMkJBQTJCLENBQUM7UUFHNUMsZ0RBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDZCQUFPLEdBQWQsVUFBZSxJQUFJO1FBQW5CLGlCQWtCQztRQWpCRyx5QkFBeUI7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEIscUNBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUNsRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUFhLENBQUMsVUFBQyxHQUFhO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNOLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7WUFDTCxDQUFDLEVBQUUsVUFBQyxDQUFDO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWpCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsMEJBQTBCLENBQUM7UUFDakQsQ0FBQztJQUNMLENBQUM7SUE3QlEsV0FBVztRQUx2QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHdDQUF3QztTQUN4RCxDQUFDOztPQUVXLFdBQVcsQ0ErQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24sIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgd2F0Y2hMb2NhdGlvbiwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicGF0aWVudC1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgcGF0aWVudFBhZ2V7XHJcbiAgICBwdWJsaWMgbW9uaXRvckRpcmVjdGlvbjogc3RyaW5nID0gXCIwXCI7XHJcbiAgICBwdWJsaWMgaXNNb25pdG9yaW5nID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb3B0aW9ucztcclxuICAgIHB1YmxpYyBsaXN0ZW5lcjtcclxuICAgIHB1YmxpYyBidXR0b25UZXh0ID0gXCJTdGFydCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb25pdG9yKGFyZ3MpIHtcclxuICAgICAgICAvLyA+PiBsb2NhdGlvbi1tb25pdG9yaW5nXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb25pdG9yaW5nKSB7XHJcbiAgICAgICAgICAgIGNsZWFyV2F0Y2godGhpcy5saXN0ZW5lcik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb25pdG9yaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU3RhcnQgbG9jYXRpb24gbW9uaXRvcmluZ1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB3YXRjaExvY2F0aW9uKChsb2M6IExvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckRpcmVjdGlvbiA9IChsb2MuZGlyZWN0aW9uKS50b0ZpeGVkKDIpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU3RvcCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==