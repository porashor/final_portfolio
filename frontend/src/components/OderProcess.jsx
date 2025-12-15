"use client";
import React, { useEffect, useState } from "react";
import { PlanHandle } from "../Store/PlanZus";
import { payhandle } from "../Store/Payzust";
import orderHandle from "../Store/orderZust";
import { useRouter } from "next/navigation";
const OderProcess = ({ productIDs, profile }) => {
  const router = useRouter();
  const { allPlan, onGet } = PlanHandle();
  const { clientSecret, payOver } = payhandle();
  const { delLoading, delOrder } = orderHandle();
  useEffect(() => {
    onGet();
  }, []);
  console.log(productIDs);
  const planDetails = allPlan.find(
    (plan) => plan._id === productIDs?.productID
  );
  const currency = "bdt";
  const onToken = async () => {
    const res = await payOver(planDetails.price, currency);
    if (res) {
      router.push(`/deshboard/${productIDs._id}`)
    }
  };
  return (
    <div className="border border-slate-300 rounded-lg py-3 px-5">
      <h1 className="bg-slate-300 px-3 py-1 rounded font-bold">
        Order Details
      </h1>
      <div className="space-y-5">
        {productIDs ? (
          <div className="space-y-5">
            <div>
              <span className="font-bold">Headline:</span> {planDetails.name}
            </div>
            <div>
              <span className="font-bold">Price:</span> {planDetails.price}
            </div>
            <div>
              <span className="font-bold">Duration:</span>{" "}
              {planDetails.duration}
            </div>
            <div>
              <span className="font-bold">PayStatus:</span>{" "}
              {productIDs?.payStatus}
            </div>
            <button
              onClick={() => delOrder(productIDs._id)}
              className="w-full bg-red-300 text-black py-2 rounded-xl"
            >
              {delLoading ? "loading" : " Cancel order"}
            </button>
            <div>
              {productIDs?.payStatus === "pending" && (
                <div>
                  <button
                    onClick={onToken}
                    className="w-full bg-green-300 text-black py-2 rounded-xl"
                  >
                    Place order
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>No product selected</div>
        )}
      </div>
    </div>
  );
};

export default OderProcess;
