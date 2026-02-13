export default function Footer() {
  return (
    <div>
      {/* SIGN IN SECTION */}
      <div style={styles.signWrap}>
        <h2>See personalized recommendations</h2>

        <button style={styles.signBtn}>Sign in</button>

        <p style={{fontSize:12}}>
          New customer? <span style={styles.link}>Start here.</span>
        </p>
      </div>

      {/* BACK TO TOP */}
      <div style={styles.backTop}>Back to top</div>

      {/* MAIN FOOTER */}
      <div style={styles.footer}>
        <div style={styles.col}>
          <h4>Get to Know Us</h4>
          <p>About Amazon</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>

        <div style={styles.col}>
          <h4>Connect with Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div style={styles.col}>
          <h4>Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Supply to Amazon</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>

        <div style={styles.col}>
          <h4>Let Us Help You</h4>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Recalls and Product Safety Alerts</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>

      
    </div>
  );
}

const styles = {

  /* SIGN IN BOX */
  signWrap:{
    border:"1px solid #ddd",
    margin:"30px 20px",
    padding:"30px",
    textAlign:"center",
    background:"#fff"
  },

  signBtn:{
    background:"#ffd814",
    border:"none",
    padding:"10px 80px",
    borderRadius:"20px",
    margin:"10px 0",
    cursor:"pointer",
    fontWeight:"600"
  },

  link:{
    color:"#007185",
    cursor:"pointer"
  },

  /* BACK TO TOP */
  backTop:{
    background:"#37475a",
    color:"#fff",
    textAlign:"center",
    padding:"14px",
    cursor:"pointer",
    fontSize:"14px"
  },

  /* FOOTER */
  footer:{
    background:"#232f3e",
    color:"#fff",
    display:"flex",
    justifyContent:"space-around",
    padding:"60px 100px",
    flexWrap:"wrap"
  },

  col:{
    minWidth:"200px",
    lineHeight:"26px",
    fontSize:"14px"
  },

  /* BOTTOM */
  bottomBar:{
    background:"#232f3e",
    borderTop:"1px solid #3a4553",
    textAlign:"center",
    padding:"20px",
    color:"#fff"
  },

  bottomBtns:{
    marginTop:"10px",
    display:"flex",
    justifyContent:"center",
    gap:"10px"
  },

  bottomBtn:{
    background:"transparent",
    border:"1px solid #848688",
    color:"#fff",
    padding:"6px 14px",
    borderRadius:"4px",
    cursor:"pointer"
  }

};
