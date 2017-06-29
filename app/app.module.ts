import { CoreModule } from './core/core.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BugModule } from './bugs/bug.module';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//The decorator
@NgModule({
    imports: [
        BrowserModule,
        BugModule,
        AppRoutingModule,
        CoreModule.forRoot()
        ],
    //Declarations are self-defined components in ypur app
    declarations: [
        AppComponent,
        NavbarComponent
        ],
    //Bootstrap to the root
    bootstrap: [AppComponent]
})

export class AppModule { };