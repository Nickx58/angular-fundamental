import { Passenger } from './models/passenger';

export class PassengerDashboardService {
	constructor() { }

	getPassengers(): Passenger[] {
		return [{
			id: 1,
			fullname: 'Nikhil',
			checkedIn: true,
			checkedInDate: 1490742000000,
			children: [{ name: 'Tanya', age: 5 }]
		}, {
			id: 2,
			fullname: 'Sharma',
			checkedIn: false
		}, {
			id: 3,
			fullname: 'Tushar',
			checkedIn: true,
			checkedInDate: 1490742000000
		}, {
			id: 4,
			fullname: 'Raman',
			checkedIn: false
		}, {
			id: 5,
			fullname: 'Hemu',
			checkedIn: true,
			checkedInDate: 1490742000000,
			children: [{ name: 'Tanya', age: 5 }]
		}]
	}
}