import { useEffect, useState } from "react";
import { Aside } from "./components/Aside";
import { api } from "./data/api";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import "./styleApp.css";

function App() {
  useEffect(() => {
    try {
      api.get("/products").then((res) => {
        setProductList(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const [productList, setProductList] = useState([]);

  const [cartList, setCartList] = useState([]);

  const [searchBar, setSearchBar] = useState("");

  const [filtredList, setFiltredList] = useState([]);

  const [isFiltred, setIsFiltred] = useState(false);

  const filterSearchBar = () => {
    setFiltredList(
      productList.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchBar.toLowerCase()) ||
          product.category.toLowerCase().includes(searchBar.toLowerCase())
        );
      })
    );
  };

  const addProductCart = (newProduct) => {
    let arrayRepeatedProducts = [];
    cartList.forEach((product) => {
      if (product === newProduct) {
        arrayRepeatedProducts.push(newProduct);
      }
    });
    if (arrayRepeatedProducts.length === 0) {
      setCartList([...cartList, newProduct]);
    }
  };

  const removeProductCart = (removeProduct) => {
    setCartList(
      cartList.filter((product) => {
        return product !== removeProduct;
      })
    );
  };

  return (
    <div className="App">
      <Header
        setSearchBar={setSearchBar}
        filterSearchBar={filterSearchBar}
        setIsFiltred={setIsFiltred}
        setFiltredList={setFiltredList}
        isFiltred={isFiltred}
      ></Header>
      <section className="positionMainAside">
        <Main
          productList={productList}
          addProductCart={addProductCart}
          filtredList={filtredList}
          isFiltred={isFiltred}
        ></Main>
        <Aside
          setCartList={setCartList}
          cartList={cartList}
          removeProductCart={removeProductCart}
        ></Aside>
      </section>
    </div>
  );
}

export default App;
