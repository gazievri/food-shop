import Meal from "./Meal";

const MealsList = ({ meals = [] }) => {
  return (
    <div className="catalog list">
      {meals.map((el) => (
        <Meal key={el.idMeal} meal={el} />
      ))}
    </div>
  );
};

export default MealsList;
