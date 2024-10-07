import React from "react";
import { getReviews } from "@/app/lib/getReviews";

export default async function Reviews({ params }) {
  const country = `${params.country}`;
  const id = `${params.id}`;
  const reviews = await getReviews(country, id);
  console.log(reviews);
  
  return (
    <div>
    </div>
  );
}
