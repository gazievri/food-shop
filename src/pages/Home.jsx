import { useState, useEffect } from "react";
import { getAllCategories } from "../utils/api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCatalog(data.categories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
}

export default Home;
