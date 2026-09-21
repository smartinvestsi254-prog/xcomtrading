import React from "react";
function Hero() {
  return (
    <div className="container-fluid">
      <div className="row text-center mt-5 border-bottom pb-4 ">
        <h1 className="mt-5">Pricing</h1>
        <p className="mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row text-center mt-5">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="Pricing Equity" />
          <h3 className="">Free equity delivery</h3>
          <p className="">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" alt="Pricing FNO" />
          <h3 className="">Intraday and F&O trades</h3>
          <p className="">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" alt="Pricing Investments" />
          <h3 className="">Free direct MF</h3>
          <p className="">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <div className="row text-center p-5 mb-5 mt-5">
        <h1 className="mt-5 mb-3">Open a Zerodha account</h1>
        <p className="mb-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 "
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
