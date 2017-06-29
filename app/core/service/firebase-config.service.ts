import { FIREBASE_CONFIG } from './../constant/constants';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()

export class FirebaseConfigService{
    constructor(){

    }

    configureApp(){
        const app = firebase.initializeApp(FIREBASE_CONFIG);
        console.log(app);
    }
}