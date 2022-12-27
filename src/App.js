import "./App.css";
import Card from "./components/Card/Card";
import { useState } from "react";
function App() {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Asus Laptop",
      image: "https://picsum.photos/id/12/2500/1667",
      info: "Çift Çekirdek",
      piece: 1,
    },
    {
      id: 2,
      title: "Dell Laptop",
      image: "https://picsum.photos/id/20/3670/2462",
      info: "Intel",
      piece: 1,
    },
    {
      id: 3,
      title: "Samsung Laptop",
      image: "https://picsum.photos/id/23/3887/4899",
      info: "Dokunmatik Ekran",
      piece: 1,
    },
    {
      id: 4,
      title: "Monster Laptop",
      image: "https://picsum.photos/id/28/4928/3264",
      info: "Oyun Bilgisayari",
      piece: 1,
    },
  ]);
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <h1>React Sepet Uygulamasi</h1>
      <h2>Listelenen Urunler</h2>
      <div className="products">
        {products.map((product, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket];
                if (
                  arr.findIndex((ind) => {
                    return product.id === ind.id;
                  }) === -1
                ) {
                  arr.push(product);
                  setBasket(arr);
                } else {
                  arr.map((item) => {
                    if (item.id === product.id) {
                      return (product.piece += 1);
                    }
                    setBasket(arr);
                  });
                }
                console.log(basket);
              }}
              key={index}
              title={product.title}
              image={product.image}
              info={product.info}
            />
          );
        })}
      </div>
      <div className="basket">
        <h2>SEPETINIZ</h2>
        <ul className="basket">
          {basket.map((item, index) => {
            return (
              <li key={index}>
                {item.title + "----->" + item.info + "Adet: "}
                <b style={{ fontSize: "24px", color: "yellow" }}>
                  {item.piece}
                </b>
              </li>
            );
          })}
        </ul>
        {basket.length > 0 ? (
          <button onClick={() => setBasket([])}>Sepeti Temizle</button>
        ) : (
          <h2>Sepetinizde Urun Bulunmamaktadir.</h2>
        )}
      </div>
    </div>
  );
}

export default App;
