"use cliect";
import Heading from "@/components/Heading";
import { Order } from "@prisma/client";
import React from "react";
import priceFormat from "../../../../utils/priceFormat";
import Status from "@/components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import moment from "moment";
import OrderItem from "./OrderItem";

interface Props {
  order: Order;
}
const OrderDetails = ({ order }: Props) => {
  return (
    <div className="max-w-[1000px] m-auto flex flex-col gap-2">
      <div className="mt-20">
        <Heading title="SKINFLUX ORDER DETAILS SECTION" />
      </div>

      <div className="flex gap-4 items-center">
        <div>OrderID: {order.id}</div>
        <div>
          Total Amount: <span>{priceFormat(order.amount)}</span>
        </div>
        <div className="flex gap-2 items-center">
          <div>Payment Status:</div>
          <div>
            {order.status === "pending" ? (
              <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : order.status === "complete" ? (
              <Status
                text="Completed"
                icon={MdDone}
                bg="bg-green-200"
                color="text-slate-700"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>Delivery Status:</div>
          <div>
            {order.deliveryStatus === "pending" ? (
              <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : order.deliveryStatus === "dispatched" ? (
              <Status
                text="dispatched"
                icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-slate-700"
              />
            ) : order.deliveryStatus === "delivered" ? (
              <Status
                text="delivered"
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-700"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* <div>OderID: {order.id}</div>
      <div>
        TOtal Amount: <span>{priceFormat(order.amount)}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div>Payment Status:</div>
        <div>
          {order.status === "pending" ? (
            <Status
              text="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complete" ? (
            <Status
              text="Completed"
              icon={MdDone}
              bg="bg-green-200"
              color="text-slate-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>Delivery Status:</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              text="pending"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              text="dispatched"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status
              text="delivered"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div> */}

      <div>Date: {moment(order.createDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">PRODUCT ORDERED</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center font-bold">
          <div className="col-span-2 justify-self-start">PRODUCT</div>
          <div className="justify-self-center">PRICE</div>
          <div className="justify-self-center">QTY</div>
          <div className="justify-self-center">TOTAL</div>
        </div>
        {order.products &&
          order.products.map((item) => {
            return <OrderItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default OrderDetails;
