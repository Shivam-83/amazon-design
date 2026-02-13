export default function AmazonFooterEnd(){
  return (
    <div style={styles.wrapper}>

      {/* SERVICES GRID */}
      <div style={styles.grid}>

        <div>
          <p style={styles.heading}>AbeBooks</p>
          <p style={styles.text}>Books, art<br/>& collectibles</p>

          <p style={{...styles.heading, marginTop:20}}>Shopbop</p>
          <p style={styles.text}>Designer<br/>Fashion Brands</p>
        </div>

        <div>
          <p style={styles.heading}>Amazon Web Services</p>
          <p style={styles.text}>Scalable Cloud<br/>Computing Services</p>

          <p style={{...styles.heading, marginTop:20}}>Amazon Business</p>
          <p style={styles.text}>Everything For<br/>Your Business</p>
        </div>

        <div>
          <p style={styles.heading}>Audible</p>
          <p style={styles.text}>Download<br/>Audio Books</p>

          <p style={{...styles.heading, marginTop:20}}>Amazon Prime Music</p>
          <p style={styles.text}>
            100 million songs, ad-free<br/>
            Over 15 million podcast episodes
          </p>
        </div>

        <div>
          <p style={styles.heading}>IMDb</p>
          <p style={styles.text}>Movies, TV<br/>& Celebrities</p>
        </div>

      </div>

      {/* LEGAL */}
      <div style={styles.legal}>
        <p>
          Conditions of Use & Sale&nbsp;&nbsp;
          Privacy Notice&nbsp;&nbsp;
          Interest-Based Ads
        </p>

        <p style={{marginTop:6}}>
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </div>

    </div>
  );
}

const styles = {

  wrapper:{
    background:"#131A22",
    color:"#DDD",
    padding:"40px 0 30px"
  },

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(4, 1fr)",
    maxWidth:"1000px",
    margin:"0 auto",
    gap:"40px"
  },

  heading:{
    color:"#FFF",
    fontSize:"14px",
    fontWeight:"500",
    marginBottom:"4px",
    cursor:"pointer"
  },

  text:{
    fontSize:"12px",
    color:"#999",
    lineHeight:"1.4",
    cursor:"pointer"
  },

  legal:{
    textAlign:"center",
    marginTop:"40px",
    fontSize:"12px",
    color:"#DDD"
  }

};
