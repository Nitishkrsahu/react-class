import Home from "./pages/Home/Home"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App(){


  return(
    <div>
      {/* <Home /> */}
      {/* <Navbar signin={true} theme="bg-dark text-white" brandName="Fllipkart" menuItems={['Home', 'Shop', 'About', 'Contact']} color='btn btn-warning'></Navbar>
      <Navbar signin={false} theme="bg-warning text-dark" brandName="Amazon" menuItems={['Home', 'Pages', 'Privacy', 'Service']} color='btn btn-danger'></Navbar> */}
      {/* <Table caption="Employees Data table" field={['First Name', 'Last Name', 'Phone', 'City']} data={[{'First Name': 'Neha', 'Last Name': 'Wankhede', 'Phone': 6543245654, 'City': 'Pune'}, {'First Name': 'Gayatri', 'Last Name': 'Bagul', 'Phone': 7878845654, 'City': 'Hyd'}]}></Table> */}
      {/* <Table caption="Employees Data table" field={['First Name', 'Last Name', 'Phone', 'City']} data={[{'First Name': 'Neha', 'Last Name': 'Wankhede', 'Phone': 6543245654, 'City': 'Pune'}, {'First Name': 'Gayatri', 'Last Name': 'Bagul', 'Phone': 7878845654, 'City': 'Hyd'}]}></Table> */}
      {/* <ReactRoute></ReactRoute> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route path="/about" element={<div>About Page</div>}></Route>
        <Route path="products/:category/:brand" element={<Params />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App