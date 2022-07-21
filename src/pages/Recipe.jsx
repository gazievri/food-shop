import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMealById } from "../utils/api";
import Preloader from "../components/Preloader";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const meal = recipe[0];

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals);
      console.log(data.meals);
    });
  }, [id]);

  return (
    <>
      <div className="category-header">
        <h2 className="title">Meal: {meal.strMeal}</h2>
        <button className="btn" onClick={goBack}>
          Go Back
        </button>
      </div>
      {!recipe ? <Preloader /> : ""}
    </>
  );
};

export default Recipe;
