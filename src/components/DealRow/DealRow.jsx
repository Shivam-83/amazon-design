import { useRef } from "react";

export default function HorizontalScroller({ title, linkText, items }) {

  const scrollRef = useRef();

  const scroll = (dir) => {
    const amount = 400;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  return (
    <div style={{
      background:"#fff",
      margin:"20px",
      padding:"15px",
      borderRadius:"4px",
      position:"relative"
    }}>

      {/* HEADER */}
      <div style={{
        display:"flex",
        gap:"15px",
        alignItems:"center",
        marginBottom:"10px"
      }}>
        <h2 style={{fontSize:"21px"}}>{title}</h2>

        {linkText && (
          <span style={{
            color:"#007185",
            fontSize:"14px",
            cursor:"pointer"
          }}>
            {linkText}
          </span>
        )}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={()=>scroll("left")}
        style={arrowStyle("left")}
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={()=>scroll("right")}
        style={arrowStyle("right")}
      >
        ›
      </button>

      {/* SCROLL ROW */}
      <div
        ref={scrollRef}
        style={{
          display:"flex",
          gap:"18px",
          overflowX:"auto",
          scrollBehavior:"smooth",
          scrollbarWidth:"none",
    msOverflowStyle:"none"
        }}
      >
        {items.map((img,i)=>(
          <div key={i} style={{
            minWidth:"180px",
            height:"180px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>
            <img
              src={img}
              alt=""
              style={{
                maxWidth:"100%",
                maxHeight:"100%",
                objectFit:"contain"
              }}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

/* ===== Arrow Style ===== */

const arrowStyle = (side) => ({
  position:"absolute",
  top:"55%",
  [side]: "0",
  transform:"translateY(-50%)",
  width:"46px",
  height:"90px",
  background:"rgba(255,255,255,0.9)",
  border:"1px solid #ddd",
  fontSize:"28px",
  cursor:"pointer",
  zIndex:5,
  boxShadow:"0 2px 5px rgba(0,0,0,0.2)"
});
