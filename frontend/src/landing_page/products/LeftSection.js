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
          <img src={imageURL} alt={productName || "Product preview"} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mb-3">
            <a
              href={tryDemo || "/products"}
              className="text-decoration-none"
              style={{ marginRight: "75px" }}
            >
              Try demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore || "/products"} className="text-decoration-none">
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <a
              href={googlePlay || "https://play.google.com"}
              className="text-decoration-none"
              style={{ marginRight: "25px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="media/images/googlePlayBadge.svg" alt="Google Play Badge" />
            </a>
            <a
              href={appStore || "https://apple.com/app-store"}
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="media/images/appStoreBadge.svg" alt="App Store Badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
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
