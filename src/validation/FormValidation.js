import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const FormValidation = () => {
    return (
        <Formik
            initialValues={{ firstname: '', lastname: '', email: '', password: '', cpassword: '' }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .max(20, 'must be 20 characters or less')
                    .required('Firstname is required'),

                lastname: Yup.string()
                    .max(20, 'must be 20 characters or less')
                    .required('Lastname is required'),

                email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),

                password: Yup.string()
                    .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&?!*])[A-Za-z\d@#$%&?!*]{8,}$/, 'Must contain one uppercase,one lowercase,one numeric digit and one special charcter and must conatin 8 charcters')
                    .required('Password is required'),

                cpassword: Yup.string()
                    .required('confirm passowrd is required')
                    .oneOf([Yup.ref('password'), null], 'password and confirm password doenot match')

            })}

        >
            <div className='col-md-6 offset-md-3 shadow-lg p-3 mt-4'>
                <Form>
                    <div className="mb-3">
                        <label htmlFor='firstname'>FirstName</label>
                        <Field type="text" id="firstname" name="firstname" className="form-control" />
                        <ErrorMessage name="firstname">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='lastname'>LastName</label>
                        <Field type="text" id="lastname" name="lastname" className="form-control" />
                        <ErrorMessage name="lastname">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email'>Email</label>
                        <Field type="email" id="email" name="email" className="form-control" />
                        <ErrorMessage name="email">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='password'>Password</label>
                        <Field type="password" id="password" name="password" className="form-control" />
                        <ErrorMessage name="password">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <Field type="password" id="cpassword" name="cpassword" className="form-control" />
                        <ErrorMessage name="cpassword">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <button className='btn btn-primary'>Register</button>

                </Form>
            </div>

        </Formik>
    )
}

export default FormValidation
