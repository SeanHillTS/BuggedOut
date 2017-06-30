import { BugDetailComponent } from './bug-detail/bug-detail.component';
import { BugService } from './service/bug.service';
import { BugRoutingModule } from './bug-routing.module';
import { BugListComponent } from './bug-list/bug-list.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        BugRoutingModule,
        ReactiveFormsModule 
        ],
    declarations: [
        BugListComponent,
        BugDetailComponent
        ],
    exports: [],
    providers: [BugService]
})

export class BugModule { }