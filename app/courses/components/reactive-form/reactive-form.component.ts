import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
	selector: 'reactive-form',
	styleUrls: ['./reactive-form.component.scss'],
	templateUrl: './reactive-form.component.html'
})

export class ReactiveFormComponent {
	form = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidator.cannotContainSpace]),
		password: new FormControl('', Validators.required)
	});

	get username() {
		return this.form.get('username');
	}

	get password() {
		return this.form.get('password');
	}

}