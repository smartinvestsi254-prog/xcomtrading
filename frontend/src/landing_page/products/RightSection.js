import React from "react";
function RightSection({imageURL,
  productName,
  productDescription,
  learnMore,}
) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        
        <div className="col-6 p-5 mt-5 ">
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mb-3 ">
            <a href={learnMore} className="text-decoration-none">
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
