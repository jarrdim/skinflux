import Container from "@/components/Container";
import React from "react";
import ManageOrdersClient from "./ManageOrdersClient";
import getOrders from "@/actions/getOrders";
import { getCurrectUser } from "@/actions/getCurrentUser";

const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrectUser();

  if (!currentUser || currentUser.role != "ADMIN") {
    return <div className="text-center text-red-500 mt-8">ACCESS DENIED</div>;
  }
  return (
    <div>
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
