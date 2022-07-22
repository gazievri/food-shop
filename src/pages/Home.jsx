import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../utils/api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => {
        return item.strCategory.toLowerCase().includes(str.toLowerCase());
      })
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCatalog(data.categories);
        setFilteredCatalog(
          search
            ? data.categories.filter((item) => {
                return item.strCategory
                  .toLowerCase()
                  .includes(search.split("=")[1].toLowerCase());
              })
            : data.categories
        );
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default Home;
