import React, { Component } from 'react'
import BannerBTTH from './BannerBTTH'
import ItemBTTH from './ItemBTTH'

export default class BodyBTTH extends Component {
    render() {
        return (
            <div className="container">
                <BannerBTTH />

                <div className="row text-center">
                    <div className="col-3">
                        <ItemBTTH />
                    </div>
                    <div className="col-3">
                        <ItemBTTH />
                    </div>
                    <div className="col-3">
                        <ItemBTTH />
                    </div>
                    <div className="col-3">
                        <ItemBTTH />
                    </div>
                </div>
            </div>
        )
    }
}
