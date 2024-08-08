import AdminNav from "@/components/admin/AdminNav";
import React, { ReactNode } from "react";

export const metadata = {
  title: "SKINFLUX",
  description: "SKINFLUX ADMIN DASHBOARD",
};
const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminNav/>
      {children}
    </div>
  );
};

export default AdminLayout;
