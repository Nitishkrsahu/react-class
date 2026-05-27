import './header.css'

function Header(){
  return(
    <header style={{display: "flex", justifyContent: "space-between"}}>
      <div>
        <h2>Springtree</h2>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Service</li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;