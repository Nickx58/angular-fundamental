import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
	selector: 'app-mosh',
	styleUrls: ['./courses.component.scss'],
	templateUrl: './courses.component.html'
})

export class CoursesComponent {
	courses;
	isClicked: boolean = false;
	email: string;
	constructor(private service: CoursesService) {
		this.courses = this.service.getCourses();
	}

	onKeyUp(email) {
		console.log(this.email);
	}

	onUpdate() {
		this.isClicked = !this.isClicked;
	}
} 