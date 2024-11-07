import electronics from "../../utils/Category/Electonics";
import CategoryTemplate from "../components/categoryTemplate";

const Electronics = () => {
  return (
    <div className="  my-6 h-full">
      <CategoryTemplate {...electronics} />
    </div>
  );
};

export default Electronics;
