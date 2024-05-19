import { useNavigate } from "react-router-dom";

export default function ButtonReturn({ message }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return <button onClick={handleClick}>{message}</button>;
}
