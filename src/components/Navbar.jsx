import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MobileBzr</h1>
      <ul className="nav-links">
         <a href="#">Home</a>
         <a href="#">Products</a>
         <a href="#">Deals</a>
         <a href="#">Add To card</a>
         <a href="#">Contact Us</a>
      </ul>
      <input type="text" placeholder='Search .in'/>
      <button Class="Search-btn">Click Me</button>
    </nav>
  )
}

export default Navbar











