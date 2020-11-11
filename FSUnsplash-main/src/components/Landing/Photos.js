import React from "react";
import PhotoCard from "../reusableComponents/photoCard";

export default function Photos({ photos, updateLikes }) {
  return (
    <div>
      {photos.length <= 0 ? (
        <div className="container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container">
          <div className="parent">
            {photos.map((photo, index) => (
              <PhotoCard
                key={index}
                img={
                  photo.height < 4000 ? photo.urls.small : photo.urls.regular
                }
                id={photo.id}
                download={`${photo.links.download}?client_id=32qJF5IgxG6C5M23ex14c6hcs1xJ_-mH3dtH1ZUF23k`}
                likes={photo.likes}
                //  updateLikes={() => updateLikes(photo.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
