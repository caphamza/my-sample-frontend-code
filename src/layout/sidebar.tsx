import { useMemo, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BackArrow from "assets/icons/back-arrow.png";
import { menuItems } from "utils/constants/sidebar";
import { updateCategory } from "slices/workshopSlice";

import { AppDispatch, RootState } from "store";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.workshops);

  const filterWorkshops = (categoryArg: string) => {
    dispatch(updateCategory(categoryArg));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-view">
        <p>Filter by category:</p>
        {menuItems.map(({ name, Icon }) => {
          const isActive = name === category;
          return (
            <div
              key={name}
              className="sidebar-view-menu"
              role="button"
              tabIndex={0}
              onClick={() => filterWorkshops(name)}
              onKeyDown={() => filterWorkshops(name)}
            >
              {Icon && <Icon fill={isActive ? "#0097CC" : "#1D1D1B"} />}
              <h5 className={isActive ? "sidebar-view-active" : ""}>{name}</h5>
            </div>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
