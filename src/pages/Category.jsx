import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategory } from "../utils/api";
import Preloader from "../components/Preloader";
import MealsList from "../components/MealsList";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getFilteredCategory(name)
      .then((data) => {
        setMeals(data.meals);
        console.log(data.meals);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <>
      <div className="category-header">
        <h2 className="title">Category: {name}</h2>
        <button className="btn" onClick={goBack}>
          Go Back
        </button>
      </div>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
};

export default Category;
