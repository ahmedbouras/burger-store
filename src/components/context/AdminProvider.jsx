import { createContext, useState } from "react";

export const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdminMode = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdminMode }}>
      {children}
    </AdminContext.Provider>
  );
}
