import { Component } from '@angular/core';
import { MoshService } from './mosh.service';

@Component({
	selector: 'app-mosh',
	template: `
		<ul>
			<li *ngFor="let course of courses">{{ course }}</li>
		</ul>
	`
})

export class MoshComponent {
	courses;
	constructor(private service: MoshService) {
		this.courses = this.service.getCourses();
	}
}