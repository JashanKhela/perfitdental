"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var setupPage = (function () {
    function setupPage(page) {
        this.page = page;
        this.page.actionBarHidden = true;
    }
    setupPage = __decorate([
        core_1.Component({
            selector: "setup-page",
            templateUrl: "./pages/setup/setup.component.html",
            styleUrls: ["pages/setup/setup-common.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], setupPage);
    return setupPage;
}());
exports.setupPage = setupPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLGdDQUE4QjtBQVE5QjtJQUNJLG1CQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUhRLFNBQVM7UUFOckIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzt5Q0FHNEIsV0FBSTtPQURyQixTQUFTLENBS3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQUxELElBS0M7QUFMWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge0NvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxyXG5pbXBvcnQgeyBQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJzZXR1cC1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3NldHVwL3NldHVwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3NldHVwL3NldHVwLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBzZXR1cFBhZ2V7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2Upe1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICBcclxufSJdfQ==