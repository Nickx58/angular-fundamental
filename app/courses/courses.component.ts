import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
	selector: 'app-mosh',
	styleUrls: ['./courses.component.scss'],
	template: `
		<div *ngIf="courses.length > 0; then course else noCourse"></div>
		<template #course>
			<h1> Courses as Follow </h1>
		</template>
		<template #noCourse>
		<h1> No course try later </h1>
		</template>
		<ul>
			<li *ngFor="let course of courses">{{ course }}</li>
		</ul>
		<div>
			<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
		</div>
		<div>
			<hm-button [isClicked]="isClicked" (update)="onUpdate()"></hm-button>
		</div>
	`
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