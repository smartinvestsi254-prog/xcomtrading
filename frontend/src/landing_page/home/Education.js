import React from 'react';
function Education() {
    return ( 
        <div className='container'> 
        <div className='row'>
            <div className='col-6 mb-5 mt-5'>
               <img src='media/images/education.svg'></img>
            </div>
            <div className='col-6 '>
                <div className='mb-5 mt-5'>
                    <h1 className='fs-2 mb-5'>Free and open market education</h1>
                <p className='text-muted'>Varsity. the largest online stock market education book in the world
govering everything from the basics to advanced trading.</p>
                <a href="" className="text-decoration-none">Versity  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                    <p className='text-muted'>TradingQ&A, the most active trading and investment community in
India for all your market related queries.</p>
                <a href="" className="text-decoration-none">TradingQ&A  <i class="fa-solid fa-arrow-right-long"></i></a>
                <div>

                </div>
                
            </div>
        </div>
        </div>
     );
}

export default Education;