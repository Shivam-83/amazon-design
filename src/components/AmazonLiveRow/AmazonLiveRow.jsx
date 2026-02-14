import { useRef } from "react";

export default function AmazonLiveRow(){

  const scrollRef = useRef();

  const scroll = (dir)=>{
  const cardWidth = 220; // card + gap
  scrollRef.current.scrollBy({
    left: dir === "left" ? -cardWidth*3 : cardWidth*3,
    behavior:"smooth"
  });
};


  const products = [
    {
      img:"https://m.media-amazon.com/images/I/71bqt9T5z4L._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
      title:"Athena Lifestyle Women's Fit and Flare Maxi Dresses",
      price:"990",
      mrp:"2,999"
    },
    {
      img:"https://m.media-amazon.com/images/I/71y04WrRCKL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
      title:"Styli Women Wrap Midi Dress",
      price:"720",
      mrp:"1,999"
    },
    {
      img:"https://m.media-amazon.com/images/I/61VhbTKijBL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
      title:"Styli Women Bodysuit",
      price:"713",
      mrp:"1,399"
    },
    {
      img:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      title:"Styli Women Long Sleeve Top",
      price:"805",
      mrp:"1,299"
    },
    {
      img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      title:"Styli Women's Solid Relaxed Midi",
      price:"999",
      mrp:"2,299"
    },
    {
    img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    title:"Women Solid Casual Cotton T-Shirt",
    price:"599",
    mrp:"1,199"
  },

  {
    img:"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    title:"Women's Floral Summer Dress",
    price:"899",
    mrp:"1,999"
  },

  {
    img:"https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title:"Stylish Women's Handbag",
    price:"1,299",
    mrp:"2,799"
  },

  {
    img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    title:"Women's Slim Fit Jeans",
    price:"1,099",
    mrp:"2,299"
  },

  {
    img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    title:"Elegant Party Wear Gown",
    price:"1,799",
    mrp:"3,999"
  },

  {
    img:"https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    title:"Women's Off Shoulder Top",
    price:"699",
    mrp:"1,499"
  },

  {
    img:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
    title:"Trendy Women's Sneakers",
    price:"1,499",
    mrp:"3,199"
  },

  {
    img:"https://m.media-amazon.com/images/I/71DCFWHFolL._AC_SY200_.jpg",
    title:"Women's Designer Kurti",
    price:"849",
    mrp:"1,899"
  }
  ];

  return(
    <div style={styles.wrapper}>

      {/* HEADER */}
      <div style={styles.header}>
        <h2>Amazon LIVE - Watch, Chat & Shop LIVE</h2>
        <span style={styles.link}>See more from Amazon Live</span>
      </div>

      <div style={styles.row}>

        {/* VIDEO */}
        <div style={styles.liveBox}>
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay muted loop
            style={styles.video}
          />
          <div style={styles.live}>LIVE</div>
          <div style={styles.watch}>▶ Watch now</div>
        </div>

        {/* PRODUCTS AREA */}
        <div style={styles.productWrap}>

          {/* LEFT ARROW */}
          <button style={{...styles.arrow,left:0}} onClick={()=>scroll("left")}>
            ❮
          </button>

          {/* SCROLLER */}
          <div ref={scrollRef} style={styles.products}>
            {products.map((p,i)=>(
              <div key={i} style={styles.card}>
                <div style={styles.imgBox}>
                  <img src={p.img} style={styles.img}/>
                </div>
                <p style={styles.title}>{p.title}</p>
                <div>
                  <span style={styles.price}><sup style={{ fontSize: '0.6em' }}>₹</sup>{p.price}</span>
                  <span style={styles.mrp}> ₹{p.mrp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button style={{...styles.arrow,right:0}} onClick={()=>scroll("right")}>
            ❯
          </button>

        </div>

      </div>

      <p style={styles.sponsored}>Sponsored Live Earns commissions</p>

    </div>
  );
}

const styles={

  wrapper:{
    background:"#fff",
    padding:"16px",
    margin:"20px",
    borderRadius:"6px",
    overflow:"hidden" // ⭐ prevents page overflow
  },

  header:{
    display:"flex",
    gap:"16px",
    marginBottom:"12px",
    alignItems:"center"
  },

  link:{
    color:"#007185",
    cursor:"pointer",
    fontSize:"14px"
  },

  row:{
    display:"flex",
    gap:"16px"
  },

  /* VIDEO */
  liveBox:{
    width:"420px",
    height:"260px",
    position:"relative",
    overflow:"hidden",
    borderRadius:"6px",
    flexShrink:0,
    background:"#000"
  },

  video:{
    width:"100%",
    height:"100%",
    objectFit:"cover"
  },

  live:{
    position:"absolute",
    top:"10px",
    left:"10px",
    background:"red",
    color:"#fff",
    padding:"6px 12px",
    borderRadius:"20px",
    fontWeight:"bold"
  },

  watch:{
    position:"absolute",
    bottom:"14px",
    left:"14px",
    background:"rgba(0,0,0,0.7)",
    color:"#fff",
    padding:"8px 14px",
    borderRadius:"20px"
  },

  /* PRODUCT SCROLLER */
  productWrap:{
    position:"relative",
    flex:1,
    overflow:"hidden" // ⭐ KEY FIX
  },

  products:{
  display:"flex",
  gap:"14px",
  overflowX:"auto",
  scrollBehavior:"smooth",
  padding:"0 40px",
  scrollbarWidth:"none" // Firefox
},


  /* Chrome */
  "products::-webkit-scrollbar":{
    display:"none"
  },

  /* ARROWS */
  arrow:{
    position:"absolute",
    top:"50%",
    transform:"translateY(-50%)",
    background:"#fff",
    border:"1px solid #ddd",
    width:"36px",
    height:"90px",
    cursor:"pointer",
    zIndex:2,
    fontSize:"22px",
    boxShadow:"0 0 5px rgba(0,0,0,0.2)"
  },

  /* CARDS */
  card:{
    minWidth:"200px",
    maxWidth:"200px",
    flex:"0 0 auto",
    border:"1px solid #e6e6e6",
    borderRadius:"8px",
    padding:"10px",
    background:"#fff"
  },

  imgBox:{
    height:"180px",
    background:"#f7f7f7",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:"6px",
    marginBottom:"10px"
  },

  img:{
    maxWidth:"100%",
    maxHeight:"100%",
    objectFit:"contain"
  },

  title:{
    fontSize:"14px",
    height:"40px",
    overflow:"hidden"
  },

  price:{
    fontWeight:"400",
    fontSize:"16px"
  },

  mrp:{
    textDecoration:"line-through",
    color:"#565959",
    fontSize:"13px"
  },

  sponsored:{
    fontSize:"12px",
    color:"#565959",
    marginTop:"8px"
  }

};
