import { useParams, useNavigate } from "react-router-dom";

function Food() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);

  return (
    <>
      <h1>Food {id}</h1>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      <button className="btn" onClick={goForward}>
        Go Forward
      </button>
    </>
  );
}

export default Food;
