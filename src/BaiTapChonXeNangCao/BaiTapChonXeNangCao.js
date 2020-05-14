import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css';
//Import mảng dữ liệu các model xe
import dataFeatures from '../Data/arrayFeatures.json';
import dataWheels from '../Data/wheels.json';
export default class BaiTapChonXeNangCao extends Component {

    //Tạo ra state chứa thông tin xe thay đổi

    state = {
        carCurrent: {
            "id": 4,
            "title": "Rallye Red",
            "type": "Metallic",
            "img": "./images/icons/icon-red.jpg",
            "srcImg": "images-red/images-red-1/",
            "color": "Red",
            "price": "22,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
              {
                "idWheel": 1,
                "srcImg": "images-red/images-red-1/"
              },
              {
                "idWheel": 2,
                "srcImg": "images-red/images-red-2/"
              },
              {
                "idWheel": 3,
                "srcImg": "images-red/images-red-3/"
              }
            ]
          }
    }

    //Viết phương thức xử lý đổi xe = cách set lại giá trị mới cho carCurrent từ carItem
    changeCar = (newCar) => {
        this.setState({
            carCurrent:newCar
        })
    } 

    renderIcon = () => {
        return dataFeatures.map((item, index) => {
            return <div onClick={()=>{this.changeCar(item)}} style={{cursor:'pointer'}} className="row mt-1 border border-color-default m-3" key={index}>
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

    componentDidMount = () => {
        //Đây là phương thức có sẵn của component tự động thực thi sau khi render được gọi, lưu ý: componentDidmount chỉ chạy 1 lần đầu tiên sau khi render thực thi
        // <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.4.1/js-cloudimage-360-view.min.js"></script>

        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.4.1/js-cloudimage-360-view.min.js';

        document.querySelector('#appendScript').appendChild(tagScript);
    }

    componentDidUpdate = () => {
        //Hàm này chạy sau khi state thay đổi (Tự kích hoạt sau render)
        //Lưu ý: Không được phép setState tại component này vì infinity loop

        //clean ảnh cũ
        document.querySelector('#carCurrent').innerHTML = '';

        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js';

        //clear script cũ trước khi append script mới của thư viện vào
        document.querySelector('#appendScript').innerHTML = "";
        document.querySelector('#appendScript').appendChild(tagScript);
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="model"   style={{ width: '100%' }}>
                            <div
                                id="carCurrent" 
                                style={{ minWidth: '100%' }}
                                className="cloudimage-360"
                                data-folder={ "./images/" + this.state.carCurrent.srcImg}
                                data-filename="civic-{index}.jpg"
                                data-amount="8"
                            ></div>
                            {/* <img style={{ width: '100%' }} src="./images/images-black/images-black-1/civic-1.jpg" /> */}
                        </div>
                        <div id="appendScript">
                        
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
