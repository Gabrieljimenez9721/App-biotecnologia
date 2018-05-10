import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from './AppSettings';

@Injectable()
export class EvaluationsService {
    constructor(
        private http: Http) { }
  
    getEvaluations(idUnit: any, idQuestion: any){
        return this.http.get(AppSettings.API_URL + 'evaluaciones/' + idUnit 
        + '/' + idQuestion + '/.json').map(response => response.json());
    }
  




}
