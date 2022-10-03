import { useState, ReactNode } from "react";

import DesignLogo from "assets/icons/design.png";
import FrontendLogo from "assets/icons/frontend.png";
import BackendLogo from "assets/icons/backend.png";
import MarketingLogo from "assets/icons/marketing.png";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const menuItems = [
    { name: "All" },
    { name: "Design", icon: DesignLogo },
    { name: "Frontend", icon: FrontendLogo },
    { name: "Backend", icon: BackendLogo },
    { name: "Marketing", icon: MarketingLogo },
  ];

  const filterWorkshops = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-view">
        <p>Filter by category:</p>
        {menuItems.map((menu) => (
          <div
            key={menu.name}
            className="sidebar-view-menu"
            role="button"
            tabIndex={0}
            onClick={() => filterWorkshops(menu.name)}
            onKeyDown={() => filterWorkshops(menu.name)}
          >
            {menu.icon && (
              <img
                className="sidebar-view-menu-logo"
                alt={menu.name}
                src={menu.icon}
              />
            )}
            <h5
              className={
                menu.name === activeCategory ? "sidebar-view-active" : ""
              }
            >
              {menu.name}
            </h5>
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
