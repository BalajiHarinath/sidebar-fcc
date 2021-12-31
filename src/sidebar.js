import { FaTimes } from "react-icons/fa";
import { links } from "./data";
import logo from "./logo.svg";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebar ? "sidebar-container sidebar-visible" : "sidebar-container"
      }`}
    >
      <div className="sidebar-header">
        <img className="sidebar-header-img" src={logo} alt="img" />
        <button onClick={closeSidebar} className="sidebar-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="list-container">
        {links.map((item) => {
          const { id, url, text, icon } = item;
          return (
            <li className="item-container" key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
