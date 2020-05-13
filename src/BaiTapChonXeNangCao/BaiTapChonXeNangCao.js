import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css';
//Import mảng dữ liệu các model xe
import dataFeatures from '../Data/arrayFeatures.json';
import dataWheels from '../Data/wheels.json';
export default class BaiTapChonXeNangCao extends Component {




    renderIcon = () => {
        return dataFeatures.map((item, index) => {
            return <div className="row mt-1 border border-color-default m-3" key={index}>
                <div className="col-2">
                    <img className="p-3" style={{ width: '100%' }} src={item.img} alt={index} />
                </div>
                <div className="col-10">
                    <h3 className="p-3">{item.title}</h3>
                    <span className="p-3 pt-0 mt-0">{item.type}</span>
                </div>
            </div>
        })
    }

    renderWheels = () => {
        return dataWheels.map((item, index) => {
            return <div className="row mt-1 border border-color-default m-3" key={index}>
                <div className="col-2">
                    <img className="p-3" style={{ width: '100%' }} src={item.img} alt={index} />
                </div>
                <div className="col-10 d-flex flex-colum align-items-center" >
                    <span className="p-3">{item.title}</span>

                </div>
            </div>
        })
    }


    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            <img style={{ width: '100%' }} src="./images/images-black/images-black-1/civic-1.jpg" />
                        </div>
                        <div className="card mt-2">
                            <h5 className="card-header text-default">Exterior color</h5>
                            <table className="table border border-color-light" border="1" >
                                <tbody>
                                    <tr>
                                        <td>Color</td>
                                        <td>Black</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>$ 19.000,00</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>In-line-4-cylinder</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="card text-left">
                            <h5 className="card-header text-default">Exterior color</h5>
                            <div className="container-fluid">
                                {this.renderIcon()}

                            </div>
                        </div>
                        <div className="card text-left mt-1">
                            <h5 className="card-header text-default">Wheels</h5>

                            <div className="container-fuild">
                                {this.renderWheels()}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
