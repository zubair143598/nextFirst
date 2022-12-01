import React from 'react'

const Available = () => {
  return (
    <div className='Available-section'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-2">
                    <h1 className='head1 mt-4'>Available Now</h1>
                </div>
                <div className="col-lg-4">
                    <img src="./Assists/available1.png" className='ms-4' style={{width:"18%"}} alt="" />
                    <img src="./Assists/available2.png" className='ms-4' style={{width:"18%"}} alt="" />
                    <img src="./Assists/available3.png" className='ms-4 ' style={{width:"18%"}} alt="" />
                    <img src="./Assists/available4.png" className='ms-4' style={{width:"18%"}} alt="" />
                    {/* <img src="./Assists/available1.png" className='ms-4' style={{width:"18%"}} alt="" /> */}
                </div>
                <div className="col-lg-2">
                <h1 className='head1 mt-4'>Ready to Play</h1>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </div>
  )
}

export default Available