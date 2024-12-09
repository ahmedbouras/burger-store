import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";

export const tabsConfig = [
  {
    name: "add",
    label: "Add product",
    icon: <AiOutlinePlus />,
    content: <AddProduct />,
  },
  {
    name: "edit",
    label: "Edit product",
    icon: <MdModeEditOutline />,
    content: <EditProduct />,
  },
];

export const getTabContent = (selectedTab) => {
  return tabsConfig.find((tab) => tab.name === selectedTab).content;
};
