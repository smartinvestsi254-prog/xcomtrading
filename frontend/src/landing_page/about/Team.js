import React from 'react';
function Team() {
    return ( 
        <div className='container border-top p-5'>
            <div className='row'>
                <h1 className=' text-center'>People</h1>
                <div className='col-6 text-center p-5 text-muted'>
                    <img src='media/images/nithinKamath.jpg' alt='Nithin Kamath' style={{width:"60%", borderRadius:"100%"}}/>
                    <div className='mt-5'>
                        <h4>Nithin Kamath</h4>
                        <h6>Founder & CEO</h6>
                    </div>
                    

                </div>
                <div className='col-6  text-muted fs-5 mt-5' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen</p>
                    <p>Connect on <a href='#'> Homepage</a> /<a href='#'>TradingQnA </a> / <a href='#'>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;