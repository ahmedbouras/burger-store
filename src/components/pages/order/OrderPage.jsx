import { useNavigate, useParams } from "react-router-dom";

export default function OrderPage() {
  let urlParams = useParams();
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>Hello {urlParams.name}</h1>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
}
