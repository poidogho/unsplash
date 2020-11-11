import React from "react";
import Landing from "./LandingImg";
import Photos from "./Photos";
function index({ photos, filterPhotos, getPhotos, updateLikes }) {
  return (
    <div>
      <Landing filterPhotos={filterPhotos} getPhotos={getPhotos} />
      <Photos photos={photos} updateLikes={updateLikes} />
    </div>
  );
}

export default index;
