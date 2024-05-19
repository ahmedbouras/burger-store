import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Return to home page</button>
    </div>
  );
}
