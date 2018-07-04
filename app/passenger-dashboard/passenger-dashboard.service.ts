import { Passenger } from './models/passenger';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const PASSENGER_API: string = '/api/passengers'

@Injectable()
export class PassengerDashboardService {
	constructor(private http: Http) { }

}