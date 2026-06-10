import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Yup() {

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: 0,
            Gender: '',
            City: ''
        },
        validationSchema: yup.object({
            UserName: yup.string().required('User Name Required').min(4, 'Name is too short'),
            Email: yup.string().required('Email Required'),
            Age: yup.string().required('Age is Required').min(2, 'Age is not Valid')
        }),
        onSubmit: (data) => {
            console.log(data);
        }
    })
    return (
        <div className='container-fluid'>
            <h3>Register</h3>
            <form onSubmit={formik.handleSubmit} noValidate>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name='UserName' onChange={formik.handleChange} min={4} /></dd>
                    <dd className='text-danger'>{formik.errors.UserName}</dd>
                    <dt>Email</dt>
                    <dd><input type="email" name='Email' onChange={formik.handleChange} /></dd>
                    <dd className='text-danger'>{formik.errors.Email}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name='Age' onChange={formik.handleChange} /></dd>
                    <dd className='text-danger'>{formik.errors.Age}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name='Gender' value="male" onChange={formik.handleChange} /><label>Male</label>
                        <input type="radio" name='Gender' value="female" onChange={formik.handleChange} /><label>female</label>
                    </dd>
                    <dd className='text-danger'>{formik.errors.Gender}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name='City' onChange={formik.handleChange}>
                            <option value="1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                    <dd className='text-danger'>{formik.errors.City}</dd>
                
                </dl>
                <button type='submit'>Submit</button>
                <h5>Please Check the All Fields</h5>
                <ul className='list-unstyled text-danger'>
                    {
                        Object.keys(formik.errors).map(key=><li key={key}>{formik.errors[key]}</li>)
                    }
                </ul>
            </form>
        </div>
    )
}
