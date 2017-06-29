import { BugRoutingModule } from './bug-routing.module';
import { BugListComponent } from './bug-list/bug.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule,
        BugRoutingModule
        ],
    declarations: [
        BugListComponent
        ],
    exports: [],
    providers: []
})

export class BugModule { }