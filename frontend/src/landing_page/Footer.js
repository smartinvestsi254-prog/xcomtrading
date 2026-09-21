import React from "react";
function Footer() {
  return (
    <footer>
      <div className="container- bg-light mt-5 p-5  border-top ">
        <div className="row">
          <div className="col-3">
            <div className="mb-5">
              <img
                src="media/images/logo.svg"
                style={{ width: "50%" }}
                alt="logo"
              ></img>
            </div>
            <div>
              <p>&copy; 2010 - 2025, Not Zerodha Broking Ltd.</p>
              <p>All Rights Reserved</p>
            </div>
            <div>
              <h4 className="text-muted">
                <i class="fa-brands fa-twitter mx-2"></i>
                <i class="fa-brands fa-square-facebook mx-2"></i>
                <i class="fa-brands fa-instagram mx-2"></i>
                <i class="fa-brands fa-linkedin-in mx-2"></i>
                <i class="fa-brands fa-telegram mx-2"></i>
              </h4>
            </div>
          </div>
          <div className="col-3">
            {/* how to remove the underline from these all links below */}
            <p>Company</p>
            <div className="links-column">
              <a href="">About</a>
              <br></br>
              <a href="">Products</a>
              <br></br>
              <a href="">Pricing</a>
              <br></br>
              <a href="">Referral programme</a>
              <br></br>
              <a href="">Carrers</a>
              <br></br>
              <a href="">Zerodha.tech</a>
              <br></br>
              <a href="">Press & media</a>
              <br></br>
              <a href="">Zerodha cares (CSR)</a>
              <br></br>
            </div>
          </div>
          <div className="col-3">
            <p>Support</p>
            <div className="links-column">
              <a href="">Contact</a>
              <br />
              <a href="">Support portal</a>
              <br />
              <a href="">Z-Connect blog</a>
              <br />
              <a href="">List of charges</a>
              <br />
              <a href="">Downloads & resources</a>
              <br />
            </div>
          </div>
          <div className="col-3">
            <p>Account</p>
            <div className="links-column">
              <a href="">Open an account</a>
              <br />
              <a href="">Fund transfer</a>
              <br />
              <a href="">60 day challenge</a>
              <br />
            </div>
          </div>
        </div>
        <div className="row mt-5 text-small text-muted">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
