import React, { Component } from 'react'

export default class BaiTapThuKinh extends Component {



    render() {
        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: '0.7'
        }

        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0,.5)',
            textAlign: 'left',
            height: '105px'
        }


        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '2000px', minHeight: '2000px' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0, 0 ,0,.3)' }} className="text-center text-light p-5">TRY GLASSES APP ONLINE</h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img className="position-absolute" style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />
                                    <img style={styleGlasses} className="position-absolute" src="./glassesImage/v1.png" />
                                    <div style={infoGlasses} className="position-relative ">
                                        <span style={{color:'#AB82FF',fontSize:'17px'}} className="font-weight-bold">Tên kính</span> <br />
                                        <span style={{fontSize:'13px',fontWeight:'400'}}>Mô tả</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
