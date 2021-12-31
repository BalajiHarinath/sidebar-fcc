import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Home = () => {
  const { openModel, openSidebar } = useGlobalContext();
  return (
    <main>
      <button className="home-sidebar-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="home-model-btn" onClick={openModel}>
        Show Model
      </button>
    </main>
  );
};
export default Home;
