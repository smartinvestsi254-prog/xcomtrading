import React, { useEffect } from "react";

function Footer() {
  // Initialize PayPal Hosted Button once component mounts
  useEffect(() => {
    if (window.paypal && window.paypal.HostedButtons) {
      window.paypal.HostedButtons({
        hostedButtonId: "PLDUTTW4EA9B6",
      }).render("#paypal-container-PLDUTTW4EA9B6");
    }
  }, []);

  return (
    <footer>
      <div className="container- bg-light mt-5 p-5 border-top">
        <div className="row">
          <div className="col-3">
            <div className="mb-5">
              <img
                src="media/images/logo.svg"
                style={{ width: "50%" }}
                alt="logo"
              />
            </div>
            <div>
              <p>&copy; 2010 - 2026, Not XcomTrading Broking Ltd.</p>
              <p>All Rights Reserved</p>
            </div>
            <div>
              <h4 className="text-muted">
                <i className="fa-brands fa-twitter mx-2"></i>
                <i className="fa-brands fa-square-facebook mx-2"></i>
                <i className="fa-brands fa-instagram mx-2"></i>
                <i className="fa-brands fa-linkedin-in mx-2"></i>
                <i className="fa-brands fa-telegram mx-2"></i>
              </h4>
            </div>
          </div>

          <div className="col-3">
            <p>Company</p>
            <div className="links-column">
              <a href="/About">Link</a>
              <br />
              <a href="/Products">Link</a>
              <br />
              <a href="/Pricing">Link</a>
              <br />
              <a href="/Referral programme">Link</a>
              <br />
              <a href="/Careers">Link</a>
              <br />
              <a href="/Zerodha.tech">Link</a>
              <br />
              <a href="/Press & media">Link</a>
              <br />
              <a href="XcomTrading cares (CSR)">Link</a>
              <br />
            </div>
          </div>

          <div className="col-3">
            <p>Support</p>
            <div className="links-column">
              <a href="/Contact">Link</a>
              <br />
              <a href="/Support portal">Link</a>
              <br />
              <a
                href="https://smartinvestsi.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <br />
              <a href="List of charges">Link</a>
              <br />
              <a href="/Downloads & resources">Link</a>
              <br />
            </div>
          </div>

          <div className="col-3">
            <p>Account</p>
            <div className="links-column">
              <a href="/Open an account">Link</a>
              <br />
              <a href="/Fund transfer">Link</a>
              <br />
              <a href="/60 day challenge">Link</a>
              <br />
            </div>
          </div>
        </div>

        {/* PayPal Donation Button Section */}
        <div className="row mt-4 text-center">
          <div className="col-12">
            <p className="fw-bold mb-2">Support Us</p>
            <div id="paypal-container-PLDUTTW4EA9B6"></div>
          </div>
        </div>

        {/* Legal Disclaimers & Compliance Text */}
        <div className="row mt-5 text-small text-muted">
          <p>
            XcomTrading Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through XcomTrading Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: XcomTrading Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@xcomtrading.com, for DP related to dp@xcomtrading.com. Please
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
            claiming to be part of XcomTrading and offering such services, please
            create a ticket here.
          </p>
          
          {/* Educational Disclaimer */}
          <div className="p-3 mt-3 border border-warning rounded bg-light text-dark">
            <p className="mb-0 fw-bold">Educational Disclaimer:</p>
            <p className="mb-0">
              This website and its simulation tools are strictly for educational and informational purposes only. Features on this site may simulate or involve live transactions. The owner and operators of this website assume no responsibility or liability for any illegal activities, financial losses, regulatory non-compliance, or inconveniences experienced globally by users interacting with this platform or its integrations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;                
