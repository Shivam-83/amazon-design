export default function DealRow({ title, linkText, items }) {
  return (
    <div style={{
      background:"#fff",
      margin:"20px",
      padding:"15px",
      borderRadius:"4px"
    }}>

      {/* Header */}
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

      {/* Scroll Row */}
      <div style={{
        display:"flex",
        gap:"15px",
        overflowX:"auto"
      }}>
        {items.map((img,i)=>(
          <img
            key={i}
            src={img}
            alt=""
            style={{
              height:"160px",
              objectFit:"contain",
              cursor:"pointer"
            }}
          />
        ))}
      </div>

    </div>
  );
}
