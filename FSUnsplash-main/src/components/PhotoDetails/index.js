import React from "react";
import Details from "./Details";

export default function index({ photos }) {
  return (
    <div>
      <Details photos={photos} />
    </div>
  );
}
