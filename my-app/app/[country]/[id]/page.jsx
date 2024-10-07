import React from "react";
import { getReviews } from "@/app/lib/getReviews";

export default async function Reviews({ params }) {
  const country = `${params.country}`;
  const id = `${params.id}`;
  const reviews = await getReviews(country, id);
  
  return (
    <div>
      <div>{params.country}</div>
      <div>{params.id}</div>
    </div>
  );
}
