import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMealById } from "../utils/api";
import Preloader from "../components/Preloader";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return (
    <>
      {!recipe ? ( <Preloader />) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.area ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <button className="btn" onClick={goBack}>
            Go Back
          </button>
        </div>
      )}
    </>
  );
};

export default Recipe;
