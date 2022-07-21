import CategoryItem from "./CategoryItem";

const CategoryList = ({ catalog = [] }) => {
  return (
    <div className="catalog list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} catalogItem={el} />
      ))}
    </div>
  );
};

export default CategoryList;
