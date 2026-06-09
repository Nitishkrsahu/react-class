import React from 'react'
import { useFormik } from 'formik';

export default function FormikValidate() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: 0,
            Gender: ''
        },
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
                    <dd><input type="text" name='UserName' onChange={formik.handleChange} /></dd>
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
                <button>Submit</button>
            </form>
        </div>
    )
}
