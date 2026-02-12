import { useRef } from "react";
import "./HorizontalScroller.css";

export default function HorizontalScroller({ title, linkText, items }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    const amount = 600;
    if (dir === "left") rowRef.current.scrollLeft -= amount;
    else rowRef.current.scrollLeft += amount;
  };

  return (
    <div className="amazon-row">

      <div className="amazon-row-header">
        <h2>{title}</h2>
        {linkText && <span className="row-link">{linkText}</span>}
      </div>

      <div className="amazon-row-body">

        <button className="row-arrow left" onClick={() => scroll("left")}>
          ❮
        </button>

        <div className="amazon-row-items" ref={rowRef}>
          {items.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>

        <button className="row-arrow right" onClick={() => scroll("right")}>
          ❯
        </button>

      </div>
    </div>
  );
}
