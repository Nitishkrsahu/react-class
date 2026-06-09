import React from 'react'
import { useFormik } from 'formik';

export default function FormikForm() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: 0,
            Gender: ''
        },
        onSubmit: (data)=>{
            console.log(data);
        }
    })
    return (
        <div className='container-fluid'>
            <h3>Register</h3>
            <form onSubmit={formik.handleSubmit}    >
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name='UserName' onChange={formik.handleChange} /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name='Email' onChange={formik.handleChange}/></dd>
                    <dt>Age</dt>
                    <dd><input type="text" name='Age' onChange={formik.handleChange}/></dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name='Gender' value="male" onChange={formik.handleChange}/><label>Male</label>
                        <input type="radio" name='Gender' value="female" onChange={formik.handleChange}/><label>female</label>
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}
