import React from 'react'
import Navbar from '../../component/controlled/Navbar'
import Table from '../../component/table/Table';
import {Footer} from '../../component/footer';
export default function Home() {
  return (
    <div>
        <Navbar signin={false}
         theme="bg-warning text-dark"
         brandName="Amazon"
         menuItems={[
            'Home', 
            'Pages', 
            'Privacy', 
            'Service'
            ]} color='btn btn-danger' 
        />
        <Table 
        caption="Employees Data table" 
        field={[
            'First Name', 
            'Last Name', 
            'Phone', 
            'City'
        ]} data={[
            {
            'First Name': 'Neha',
            'Last Name': 'Wankhede', 
            'Phone': 6543245654, 
            'City': 'Pune'
        }, 
            {
            'First Name': 'Gayatri',
            'Last Name': 'Bagul',
            'Phone': 7878845654,
            'City': 'Hyd'
            }
        ]} />
        <Footer />
    </div>
  )
}
