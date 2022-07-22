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
      {!recipe ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <table className="striped">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <th>{recipe[key]}</th>
                      <th>{recipe[`strMeasure${key.slice(13)}`]}</th>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{margin: '2rem 0 1.5rem'}} >Video Recipe</h5>
              <iframe
                title={recipe.idMeal}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
          <button className="btn" onClick={goBack}>
            Go Back
          </button>
        </div>
      )}
    </>
  );
};

export default Recipe;
