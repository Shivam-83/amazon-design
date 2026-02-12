import "./AmazonCard.css";

export default function AmazonCard({
  title,
  items = [],
  linkText = "See more",
  isSingle = false
}) {
  return (
    <div className="amazon-card">
      <h2>{title}</h2>

      {/* 2x2 GRID */}
      {!isSingle && (
        <div className="card-grid">
          {items.map((item, i) => (
            <div key={i} className="grid-item">
              <img src={item.img} />
              {item.label && <p>{item.label}</p>}
            </div>
          ))}
        </div>
      )}

      {/* SINGLE IMAGE CARD */}
      {isSingle && (
        <div className="single-img">
          <img src={items[0]?.img} />
        </div>
      )}

      <a className="card-link">{linkText}</a>
    </div>
  );
}
