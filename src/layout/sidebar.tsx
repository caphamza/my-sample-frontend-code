import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import DesignLogo from "assets/icons/design.png";
import FrontendLogo from "assets/icons/frontend.png";
import BackendLogo from "assets/icons/backend.png";
import MarketingLogo from "assets/icons/marketing.png";
import { updateCategory } from "slices/workshopSlice";

import { AppDispatch, RootState } from "store";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const dispatch: AppDispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.workshops);

  const menuItems = [
    { name: "all" },
    { name: "design", icon: DesignLogo },
    { name: "frontend", icon: FrontendLogo },
    { name: "backend", icon: BackendLogo },
    { name: "marketing", icon: MarketingLogo },
  ];

  const filterWorkshops = (categoryArg: string) => {
    dispatch(updateCategory(categoryArg));
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
            <h5 className={menu.name === category ? "sidebar-view-active" : ""}>
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
