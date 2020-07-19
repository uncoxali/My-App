import React, {Component} from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

class FormComment extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    comment: ''

                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    comment: Yup.string()
                        .min(6, 'pls comment ')
                        .required('comment send me'),
                })}
                onSubmit={fields => {
                    alert('SUCSS n\nn' + JSON.stringify(fields, null, 4))
                }}
                render={({errors, status, touched}) => (
                    <Form className="d-flex">
                        <div className="row justify-content-between">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text"
                                       className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}/>
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type="text"
                                       className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')}/>
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback"/>
                            </div>
                        </div>
                        <div className="justify-content-between">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text"
                                       className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                                <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">Comment</label>
                                <Field name="" type="text"
                                       className={'form-control' + (errors.comment && touched.comment ? '' : '')}/>
                                <ErrorMessage name="comment" component="div" className="invalid-feedback"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Comment</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default FormComment;