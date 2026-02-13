import { FaGlobe } from "react-icons/fa";

export default function AmazonBottomBar(){
  return (
    <div style={styles.bar}>
      
      {/* Amazon Logo */}
     <img
   src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
  alt="Amazon"
  width={90}
  style={styles.logo}
/>




      {/* Controls */}
      <div style={styles.controls}>
        
        {/* Language */}
        <div style={styles.box}>
          <span style={{
  marginRight:8,
  filter:"grayscale(100%) brightness(0.7)"
}}>
  🌐
</span>

          English
          <span style={styles.arrows}>▲▼</span>
        </div>

        {/* Country */}
        <div style={styles.box}>
          <img
            src="https://flagcdn.com/w20/in.png"
            style={styles.flag}
          />
          India
        </div>

      </div>

    </div>
  );
}

const styles = {

  bar:{
    background:"#232f3e",
    padding:"20px 0",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"60px",
    borderTop:"1px solid #3a4553"
  },

  logo:{
    width:"90px",
    objectFit:"contain"
  },

  controls:{
    display:"flex",
    gap:"12px"
  },

  box:{
    color:"#ddd",
    border:"1px solid #848688",
    padding:"8px 18px",
    borderRadius:"3px",
    fontSize:"14px",
    display:"flex",
    alignItems:"center",
    cursor:"pointer",
    background:"transparent",
    minWidth:"120px",
    justifyContent:"center",
    gap:"8px"
  },

  flag:{
    width:"18px",
    height:"12px",
    objectFit:"cover"
  },

  arrows:{
    fontSize:"9px",
    marginLeft:"8px",
    opacity:0.7,
    lineHeight:"10px"
  }

};
