import "./Header.css";
import {
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaBars,
} from "react-icons/fa";


export default function Header() {
  return (
    <>
      <header className="header">

        {/* LEFT */}
       {/* LEFT */}
<div className="header-left">
  <div className="logo-container">
    <img
      src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      className="logo"
      alt="Amazon Logo"
    />
    <span className="logo-in">.in</span>
  </div>

  <div className="nav-item location">
    <FaMapMarkerAlt className="loc-icon" />
    <div className="loc-text">
      <span className="line1">Deliver to Mumbai 400016</span>
      <span className="line2">Update location</span>
    </div>
  </div>
</div>

        {/* SEARCH */}
       <div className="search-container">
  <div className="search">
    <select className="search-select">
      <option>All</option>
    </select>
    <input
      className="search-input"
      placeholder="Search Amazon.in"
    />
    <button className="search-btn">
      <FaSearch />
    </button>
  </div>
</div>

        {/* RIGHT */}
        <div className="header-right">

          <div className="nav-item lang">
            <img
  src="https://flagcdn.com/w20/in.png"
  alt="India Flag"
  style={{marginTop: "10px", marginRight: '8px' }} 
/>
          EN ▾
          </div>

          <div className="nav-item">
            <span className="line1">Hello, Sign in</span>
            <span className="line2">Account & Lists ▾</span>
          </div>

          <div className="nav-item">
            <span className="line1">Returns</span>
            <span className="line2">& Orders</span>
          </div>

          <div className="nav-item cart">
            <FaShoppingCart size={26} />
            <span className="cart-count">2</span>
            <span className="line2">Cart</span>
          </div>

        </div>
      </header>

      {/* SUB NAV */}
      <nav className="subnav">
  <div className="sub-left">
    {/* The 'All' menu item with bold weight */}
    <span className="nav-link all">
      <FaBars style={{ marginRight: '5px' }} /> All
    </span>

    <span className="nav-link">Fresh ▾</span>
    <span className="nav-link">MX Player</span>
    <span className="nav-link">Sell</span>
    <span className="nav-link">Bestsellers</span>
    <span className="nav-link">Today's Deals</span>
    <span className="nav-link">Mobiles</span>
    <span className="nav-link">Customer Service</span>
    <span className="nav-link">New Releases</span>
    <span className="nav-link">Prime ▾</span>
    <span className="nav-link">Fashion</span>
    <span className="nav-link">Amazon Pay</span>
    <span className="nav-link">Electronics</span>
    <span className="nav-link">Home & Kitchen</span>
    <span className="nav-link">Computers</span>
    <span className="nav-link">Books</span>
    <span className="nav-link">Gift Cards</span>
  </div>

  
</nav>
    </>
  );
}
