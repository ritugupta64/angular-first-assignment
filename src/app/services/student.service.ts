import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()

export class StudentService {
   
    constructor(private _http: HttpClient ){}

    getStudentDetails(): Observable<any> {
        return this._http.get('http://www.json-generator.com/api/json/get/cpreaUpEFu?indent=3')
    }
}