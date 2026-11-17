
import logo from '../assets/images/logo.png'
import searchIcons from '../assets/icons/search-icon.svg'
import heartIcons from '../assets/icons/heart-icon.svg'
import cartIcons from '../assets/icons/cart-icon.svg'
import '../pages/Navbar.css'

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container-fluid">
          <span className="new-badge">NEW</span>
          Free Shipping On Orders Above ₹499 | Easy 7-Day Returns
        </div>
      </div> 

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              alt="Shopkart"
              className="shopkart-logo"  
            />
          </a>

          {/* Category Dropdown */} 
          <div className="dropdown category-dropdown">   
            <button
              className="category-btn dropdown-toggle"  
              type="button"
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              All Categories
            </button>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Electronics</a></li>
              <li><a className="dropdown-item" href="#">Fashion</a></li>
              <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
              <li><a className="dropdown-item" href="#">Beauty And Personal Care</a></li>
              <li><a className="dropdown-item" href="#">Sports And Fitness</a></li>
              <li><a className="dropdown-item" href="#">Books And Stationery</a></li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar"
            aria-controls="shopKartNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="shopKartNavbar">

            <ul className="navbar-nav main-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Deals</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>

            {/* Search Box */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for products..."
              />

              <button className="search-btn" type="button">
                <img src={searchIcons} alt="Search" />
              </button>
            </div>

            {/* Wishlist and Cart */}
            <div className="nav-actions">

              <img
                src={heartIcons}
                alt="Wishlist"
                className="nav-icon"
              />

              <div className="cart-wrapper">
                <img
                  src={cartIcons}
                  alt="Cart"
                  className="nav-icon"
                />

                <span className="cart-count">3</span>
              </div>

            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
