import React, {PropTypes} from 'react';
import SignUpForm from './SignUpForm';

Class SignUpPage extends React.Component {
	constructor(props, context){
		super(props, context);

		// set the initial component state
		this.state = {
			errors: {},
			user: {
				email: '',
				password: '',
				confirm_password: ''
			}
		};

		this.processForm = this.processForm.bind(this);
		this.changeUser = this.changeUser.bind(this);
	}
}