import { useParams } from "react-router-dom";
import ButtonReturn from "../../ButtonReturn";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <div>
      <h1>Hello {username}</h1>
      <ButtonReturn text={"Log out"} />
    </div>
  );
}
