import React from 'react'

export default function Form() {
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData);
    }
    return (
        <div className='container-fluid'>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name='UserName' /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name='Email' /></dd>
                    <dt>Age</dt>
                    <dd><input type="text" name='Age' /></dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name='Gender' value="male" /><label>Male</label>
                        <input type="radio" name='Gender' value="female" /><label>female</label>
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}
