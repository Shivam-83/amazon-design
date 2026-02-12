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
        <div className="header-left">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="logo"
          />

          <div className="nav-item location">
            <FaMapMarkerAlt className="loc-icon" />
            <div>
              <span className="line1">Deliver to Shivam</span>
              <span className="line2">Karad 415539</span>
            </div>
          </div>
        </div>

        {/* SEARCH */}
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

        {/* RIGHT */}
        <div className="header-right">

          <div className="nav-item lang">
            🇮🇳 EN ▾
          </div>

          <div className="nav-item">
            <span className="line1">Hello, Shivam</span>
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
          <span className="all">
            <FaBars /> All
          </span>

          <span className="rufus">Rufus</span>
          <span>Fresh</span>
          <span>Today's Deals</span>
          <span>MX Player</span>
          <span>Sell</span>
          <span>Gift Cards</span>
          <span>Amazon Pay</span>
          <span>Gift ideas</span>
          <span>Buy Again</span>
          <span>AmazonBasics</span>
          <span>Prime ▾</span>
        </div>

        <div className="sub-right">
          Festive bus offer | Up to 17% + flat ₹100 off
        </div>

      </nav>
    </>
  );
}
