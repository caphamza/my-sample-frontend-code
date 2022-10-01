import { ReactNode } from "react";

export default function sidebar({ children }: { children: ReactNode }) {
  const menuItems = [
    { name: "All", link: "/" },
    { name: "Design", icon: "", link: "" },
    { name: "Frontend", icon: "", link: "/fronted" },
    { name: "Backend", icon: "", link: "/backend" },
    { name: "Marketing", icon: "", link: "/marketing" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-view">
        <p>Filter by category:</p>
        {menuItems.map((menu) => (
          <div key={menu.name} className="sidebar-view-menu">
            <h5>{menu.name}</h5>
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
