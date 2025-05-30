import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Brain,
  LayoutGrid,
  Briefcase
} from 'lucide-react';

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <LayoutGrid size={20} />,
      label: "Portfolio",
      path: "/dashboard/portfolio",
    },
    {
      icon: <Briefcase size={20} />,
      label: "Tool Tracker",
      path: "/dashboard/tools",
    }
  ];

  return (
    <div className="border-r border-sortmy-gray/30 bg-sortmy-darker w-64 flex-shrink-0 p-4 h-screen">
      <div className="flex items-center mb-8 py-2">
        <Brain className="w-8 h-8 mr-2" />
        <span className="text-xl font-bold tracking-tight">SortMyAI</span>
      </div>      

      <div className="flex-1 flex flex-col space-y-1">
        {sidebarItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 py-3 px-4 rounded-md transition-colors
              ${isActive 
                ? 'bg-sortmy-blue/20 text-sortmy-blue'
                : 'hover:bg-sortmy-gray/20 text-gray-300 hover:text-white'}
            `}
          >
              {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;