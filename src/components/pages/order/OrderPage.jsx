import { useParams } from "react-router-dom";
import ButtonReturn from "../../ButtonReturn";

export default function OrderPage() {
  let urlParams = useParams();

  return (
    <div>
      <h1>Hello {urlParams.name}</h1>
      <ButtonReturn message={"Log out"} />
    </div>
  );
}
