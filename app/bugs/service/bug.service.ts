import { Bug } from './../model/bug';
import { FirebaseConfigService } from './../../core/service/firebase-config.service';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BugService {
    bugsDbRef = this.fire.database.ref('/bugs');
    constructor(private fire: FirebaseConfigService) {

    }
    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_added', bug => {
                const newBug = bug.val() as Bug;
                obs.next(newBug);
            },
            err =>{
                obs.throw(err);
            });
        })
    }
    
}