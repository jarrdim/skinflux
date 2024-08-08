"use client";
import React from "react";
import Heading from "../Heading";
import moment from "moment";
import { Rating } from "@mui/material";
import UserAvatar from "../UserAvatar";

interface RatingProps {
  product: any;
}
const Ratings = ({ product }: RatingProps) => {
  if(product.reviews.length === 0) return null
  return (
    <div className="md:mx-8">
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} >
                <div className="max-w-300px flex">
                  <UserAvatar src={review?.user.image}/>
                  <div className="font-bold mx-2">{review?.user.name}</div>
                  <div>{moment(review.createdDate).fromNow()}</div>
                </div>
                <div className="mt-3">
                  <Rating value={review.rating} readOnly />
                  <div className="ml-2">{review.comment}</div>
                </div>
                <hr className="mt-2 py-8 w-[50%]"/>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Ratings;
