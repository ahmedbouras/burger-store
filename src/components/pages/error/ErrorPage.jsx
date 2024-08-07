import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>ErrorPage</h1>
      <button onClick={() => navigate("/")} type="button">
        Go back to Homepage
      </button>
    </div>
  );
}
