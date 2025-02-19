"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";

interface MenuItem {
  title: string;
  path?: string;
  icon: React.ReactNode;
  submenu?: { title: string; path: string }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    path: "/churchControl/home",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    title: "Membros",
    icon: <PeopleIcon className="w-5 h-5" />,
    path: "/churchControl/members",
  },
  {
    title: "Financeiro",
    icon: <EventIcon className="w-5 h-5" />,
    path: "/churchControl/financeiro",
    submenu: [
      { title: "Calendário", path: "/churchControl/financeiro" },
      { title: "Novo Evento", path: "/churchControl/events/new" },
    ],
  },
  {
    title: "Relatórios",
    icon: <AssessmentIcon className="w-5 h-5" />,
    submenu: [
      { title: "Financeiro", path: "/churchControl/reports/financial" },
      { title: "Frequência", path: "/churchControl/reports/attendance" },
    ],
  },
];

export function Sidebar({
  onToggle,
}: {
  onToggle: (expanded: boolean) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const { logout } = useAuth();

  const handleMenuClick = (title: string, hasSubmenu: boolean) => {
    if (!isExpanded && hasSubmenu) {
      setIsExpanded(true);
    }
    setExpandedSubmenu(expandedSubmenu === title ? null : title);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    onToggle(!isExpanded);
  };

  return (
    <div
      className={`bg-white min-h-screen shadow-lg transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {isExpanded && (
          <span className="text-xl font-semibold text-primary">Ekklesia</span>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isExpanded ? (
            <ChevronLeftIcon className="w-5 h-5" />
          ) : (
            <ChevronRightIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => handleMenuClick(item.title, true)}
                    className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                      !isExpanded && "justify-center"
                    }`}
                  >
                    {item.icon}
                    {isExpanded && (
                      <>
                        <span className="ml-3">{item.title}</span>
                        <ExpandMoreIcon
                          className={`w-4 h-4 ml-auto transition-transform ${
                            expandedSubmenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </>
                    )}
                  </button>
                  {isExpanded && expandedSubmenu === item.title && (
                    <ul className="mt-2 ml-6 space-y-2">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.path}>
                          <Link
                            href={subitem.path}
                            className="block p-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900"
                          >
                            {subitem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path!}
                  className={`flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                    !isExpanded && "justify-center"
                  }`}
                >
                  {item.icon}
                  {isExpanded && <span className="ml-3">{item.title}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-full p-4 border-t">
        <button
          onClick={logout}
          className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 text-red-600 transition-colors ${
            !isExpanded && "justify-center"
          }`}
        >
          <LogoutIcon className="w-5 h-5" />
          {isExpanded && <span className="ml-3">Sair</span>}
        </button>
      </div>
    </div>
  );
}
