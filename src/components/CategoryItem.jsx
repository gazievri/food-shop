import { Link } from "react-router-dom";

const CategoryItem = ({ catalogItem = [] }) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } =
    catalogItem;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Watch category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
