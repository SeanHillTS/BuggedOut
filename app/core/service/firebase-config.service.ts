import { FIREBASE_CONFIG } from './../constant/constants';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
require('firebase/database');

@Injectable()

export class FirebaseConfigService {

    private _database: firebase.database.Database;

    public get database(){
        return this._database;
    }
    constructor() {
        this.configureApp();
        this.configureDatabase();
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG);
    }

    configureDatabase(){
        this._database = firebase.database();
    }

}