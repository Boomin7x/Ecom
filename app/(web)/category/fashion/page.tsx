import fashion from "../../utils/Category/Fasion";
import CategoryTemplate from "../components/categoryTemplate";

const FashionPage = () => {
  return (
    <div className="  my-6 h-full">
      <CategoryTemplate {...fashion} />
    </div>
  );
};

export default FashionPage;
