import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 p-5 mt-5 ">
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mb-3 ">
            <a
              href={tryDemo}
              className="text-decoration-none "
              style={{ marginRight: "75px" }}
            >
              Try demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <a
              href={googlePlay}
              className="text-decoration-none "
              style={{ marginRight: "25px" }}
            >
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore} className="text-decoration-none">
              <img src="media/images/appStoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
