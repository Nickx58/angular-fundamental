import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
	selector: 'app-mosh',
	template: `
		<ul>
			<li *ngFor="let course of courses">{{ course }}</li>
		</ul>
	`
})

export class CoursesComponent {
	courses;
	constructor(private service: CoursesService) {
		this.courses = this.service.getCourses();
	}
}