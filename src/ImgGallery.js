import React from "react";

const ImgGallery = ({ data }) => {
  return (
    <div className="row">
      {data.map((image) => (
        <div className="key" key={image.id}>
          <div>
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="200px"
              width="300px"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ImgGallery;
