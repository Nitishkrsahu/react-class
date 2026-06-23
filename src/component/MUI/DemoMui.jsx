import React from 'react'
import { TextField, Button, FormGroup, FormControlLabel, Switch } from '@mui/material'

export default function DemoMui() {
    return (
        <div className='container-fluid'>
            <h2>Bootstrap</h2>
            <div className='mt-2 w-25'>
                <label className='form-label'>User Name</label>
                <div>
                    <input type="text" className='form-control' placeholder='You Name' />
                </div>
                <button className='btn btn-primary w-100 mt-3'>Submit</button>
            </div>
            <h2>MUI</h2>
            <div className='mt-2 w-25'>
                <div>
                    <TextField className='w-100' label="Your Name" variant='outlined'></TextField>
                    <Button className='w-100 mt-2' variant='contained'>Submit</Button>
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                        <FormControlLabel required control={<Switch />} label="Required" />
                        <FormControlLabel disabled control={<Switch />} label="Disabled" />
                    </FormGroup> */}
                </div>
            </div>
        </div>
    )
}
