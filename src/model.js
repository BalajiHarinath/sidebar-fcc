import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
const Model = () => {
  const { isModel, closeModel } = useGlobalContext();
  return (
    <div className={`${isModel ? "model-overlay visible" : "model-overlay"}`}>
      <div className="model-container">
        <h3 className="model-header">Model container</h3>
        <button className="model-close-btn" onClick={closeModel}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Model;
