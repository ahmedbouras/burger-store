import { useParams } from "react-router-dom";

export default function OrderPage() {
  let urlParams = useParams();
  
  return (
    <div>
      <h1>Hello {urlParams.name}</h1>
    </div>
  );
}
