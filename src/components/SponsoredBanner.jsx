export default function SponsoredBanner(){
  return(
    <div style={{
      background:"#fff",
      margin:"20px",
      padding:"20px",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      borderRadius:"4px"
    }}>

      {/* Left */}
      <div>
        <h1 style={{color:"#a020f0", fontSize:"40px"}}>
          Wottagirl!
        </h1>
        <p>Long Lasting Body Splash</p>
      </div>

      {/* Center Image */}
      <img
        src="https://m.media-amazon.com/images/I/61PqL8D4U1L._AC_SY300_.jpg"
        style={{height:"180px"}}
      />

      {/* Right */}
      <div>
        <p style={{color:"#007185"}}>
          Wottagirl Secret Crush & Amber Kiss Body Splash
        </p>

        <p style={{fontSize:"20px", fontWeight:"bold"}}>
          ₹191 <span style={{
            textDecoration:"line-through",
            color:"#555",
            fontSize:"14px"
          }}>₹222</span>
        </p>

        <button style={{
          background:"#ffd814",
          border:"none",
          padding:"8px 15px",
          borderRadius:"20px",
          cursor:"pointer"
        }}>
          Shop now
        </button>

        <p style={{fontSize:"12px", color:"#777"}}>
          Sponsoredd
        </p>
      </div>

    </div>
  );
}
