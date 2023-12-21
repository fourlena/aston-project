import React from 'react';
import {
	Button,
	FormControl,
	FormGroup,
	FormLabel,
	TextField
} from '@mui/material';
import { useFormik } from 'formik';

import style from './form.module.css';

const FormC = ({ name, submit }) => {
	const formik = useFormik({
		validate: values => {
			const errors = {};
			if (!values.email) {
				errors.email = 'Email is required';
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = 'Invalid email address';
			}
			if (!values.password) {
				errors.password = 'Password is required';
			} else if (values.password.length < 3) {
				errors.password = 'Must be 3 characters or more';
			}
			return errors;
		},
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: values => {
			submit(values);
		}
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<FormControl>
				<FormLabel>
					<h1>{name}</h1>
				</FormLabel>
				<FormGroup>
					<TextField
						label="Email"
						margin="normal"
						{...formik.getFieldProps('email')}
					/>
					{formik.touched.email && formik.errors.email && (
						<p className={style.error}>{formik.errors.email}</p>
					)}
					<TextField
						type="password"
						label="Password"
						margin="normal"
						{...formik.getFieldProps('password')}
					/>
					{formik.touched.password && formik.errors.password && (
						<p className={style.error}>{formik.errors.password}</p>
					)}
					<Button type={'submit'} variant={'contained'} color={'primary'}>
						{name}
					</Button>
				</FormGroup>
			</FormControl>
		</form>
	);
};

export default FormC;
