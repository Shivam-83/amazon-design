import AmazonCard from "../AmazonCard/AmazonCard";

export default function ExtraSection() {

  const computers = [
    { img: "https://m.media-amazon.com/images/I/61W8xeZTwxL._AC_SY170_.jpg" },
    { img: "https://m.media-amazon.com/images/I/41uSdnQa7nL._AC_SY170_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61s6d6BxW4L._AC_SY170_.jpg" },
    { img: "https://m.media-amazon.com/images/I/81rRMwFG0+L._AC_SY170_.jpg" }
  ];

  const international = [
    {
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/WK_1/2026/PC_CC_379X304._SY304_CB788260163_.jpg"
    }
  ];

  const loved = [
    { img: "https://m.media-amazon.com/images/I/71zDrTl-NaL._AC_SY145_.jpg" },
    { img: "https://m.media-amazon.com/images/I/615873vXvfL._AC_SY145_.jpg" },
    { img: "https://m.media-amazon.com/images/I/81q1GCE3fJL._AC_SY145_.jpg" },
    { img: "https://m.media-amazon.com/images/I/71JtekzufnL._AC_SY145_.jpg" }
  ];

  const storage = [
    { img: "https://m.media-amazon.com/images/I/716O2Qd96HL._AC_SY170_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61YXCTi86sL._AC_SY170_.jpg" },
    { img: "https://m.media-amazon.com/images/I/A1DGze7wgeL._AC_SY170_.jpg" },
    { img: "https://m.media-amazon.com/images/I/81JLf7q+KmL._AC_SY170_.jpg" }
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "20px",
      padding: "20px",
      background: "#e3e6e6"
    }}>

      <AmazonCard
        title="Best Sellers in Computers & Accessories"
        items={computers}
        linkText="See more"
      />

      <AmazonCard
        title="Up to 50% off | International brands"
        items={international}
        linkText="See all offers"
        isSingle
      />

      <AmazonCard
        title="Customers’ Most-Loved products"
        items={loved}
        linkText="Explore more"
      />

      <AmazonCard
        title="Up to 40% off | Smart storage, clutter-free living"
        items={storage}
        linkText="Shop now"
      />

    </div>
  );
}
