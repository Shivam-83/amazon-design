import { useState } from "react";

function ProductCard({ product }) {
  const [active, setActive] = useState(0);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{product.title}</h3>

      <div style={styles.imgBox}>
        <img src={product.images[active]} style={styles.mainImg}/>
      </div>

      <p style={styles.name}>{product.name}</p>

      <div style={styles.priceRow}>
        <span style={styles.price}><sup style={{ fontSize: '0.6em' }}>₹</sup>{product.price}</span>
        <span style={styles.mrp}>M.R.P ₹{product.mrp}</span>
      </div>

      <div style={styles.thumbRow}>
        {product.images.map((img,i)=>(
          <div
            key={i}
            onClick={()=>setActive(i)}
            style={{
              ...styles.thumbBox,
              border: active===i
                ? "2px solid #007185"
                : "1px solid #ccc"
            }}
          >
            <img src={img} style={styles.thumb}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductShowcaseRow(){

  const products = [
    {
      title:"Up to 60% Off | Smart furniture for every room",
      name:"Wakefit ShapeSense Orthopedic Mattress Queen Size",
      price:"12,998",
      mrp:"21,665",
      images:[
        "https://images.unsplash.com/photo-1505693314120-0d443867891c",
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
      ]
    },
    {
      title:"Up to 80% off | Latest collections from Indian artisans",
      name:"Wooden Coaster Set (Set of 4)",
      price:"944",
      mrp:"1,015",
      images:[
        "https://m.media-amazon.com/images/I/91Ij9ZDfsFL._AC_UL480_FMwebp_QL65_.jpg",
        "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
      ]
    },
    {
      title:"Under ₹849 | Upgrade your home",
      name:"Decorative Table Vase",
      price:"349",
      mrp:"999",
      images:[
        "https://m.media-amazon.com/images/I/81HGTKG5jrL._AC_UL480_FMwebp_QL65_.jpg",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
      ]
    },
    {
      title:"Under ₹899 | Budget-friendly home essentials",
      name:"Cushion Pillow Covers Set",
      price:"499",
      mrp:"1,999",
      images:[
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
        "https://m.media-amazon.com/images/I/91Cg9dXESNL._AC_UL480_FMwebp_QL65_.jpg"
      ]
    }
  ];

  return (
    <div style={styles.wrapper}>
      {products.map((p,i)=>(
        <ProductCard key={i} product={p}/>
      ))}
    </div>
  );
}

const styles = {

  wrapper:{
    display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",
    gap:"20px",
    padding:"20px",
    background:"#e3e6e6",
    alignItems:"stretch"
  },

  card:{
    background:"#fff",
    padding:"16px",
    display:"flex",
    flexDirection:"column",
    minHeight:"420px",
    transition:"0.2s",
    cursor:"pointer"
  },

  title:{
    fontSize:"20px",
    fontWeight:700,
    height:"48px",
    lineHeight:"24px",
    overflow:"hidden",
    display:"-webkit-box",
    WebkitLineClamp:2,
    WebkitBoxOrient:"vertical",
    marginBottom:"10px"
  },

  imgBox:{
    width:"100%",
    height:"160px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"10px"
  },

  mainImg:{
    width:"100%",
    height:"100%",
    objectFit:"contain"
  },

  name:{
    fontSize:"14px",
    height:"36px",
    overflow:"hidden",
    display:"-webkit-box",
    WebkitLineClamp:2,
    WebkitBoxOrient:"vertical"
  },

  priceRow:{
    display:"flex",
    gap:"8px",
    alignItems:"center",
    margin:"6px 0",
    height:"24px"
  },

  price:{
    fontSize:"20px",
    fontWeight:400
  },

  mrp:{
    textDecoration:"line-through",
    color:"#565959",
    fontSize:"12px",
    marginTop:"2px"
  },

  thumbRow:{
    display:"flex",
    justifyContent:"center",
    gap:"8px",
    marginTop:"auto"
  },

  thumbBox:{
    width:"56px",
    height:"56px",
    borderRadius:"8px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    overflow:"hidden",
    background:"#fff"
  },

  thumb:{
    width:"100%",
    height:"100%",
    border:"1px solid #000",
    objectFit:"cover"
  }
};
