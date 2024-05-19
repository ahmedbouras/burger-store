import { useNavigate } from "react-router-dom";

export default function ButtonReturn({ text }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return <button onClick={handleClick}>{text}</button>;
}
