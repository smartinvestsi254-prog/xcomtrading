import React from 'react';
function Hero() {
    return ( 
           <div className='container-fluid text-white' style={{backgroundColor: '#387ed1'}}>
                <div className='row '>
                    <div className=' p-5 col-6 text-center'>
                       <h4>Support Portal</h4> 
                    </div>
                    <div className=' p-5 col-6 text-center'>
                        <a href='' className='text-white '>Track Tickets</a>
                    </div>
                </div>
                <div className='row mx-5 pb-5 mt-5'> 
                    <div className='col-6 p-3'>
                        <h3 className=''>Search for an answer or browse help topics to create a ticket</h3>
                        <input type="text" className='form-control mt-4 p-4' placeholder='Eg. how do I activate F&O'/>
                        <a href={""} className=' mt-4 text-white'>Track account openingTrack segment activationIntraday marginsKite user manual</a>
                    </div>
                    <div className='col-6 p-3'>
                        <h3>Featured</h3>
                        <ol>
                            <li><a href={""} className=' mt-4 text-white'>Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href={""} className=' mt-4 text-white'>Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                </div>
           </div>
     );
}

export default Hero;