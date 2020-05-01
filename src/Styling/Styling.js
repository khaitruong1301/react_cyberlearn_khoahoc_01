import React, { Component } from 'react'
import './Styling.css';
import style from './Styling.module.css';
import Child from './Child'

export default class Styling extends Component {
    render() {
        //Lưu ý: viết dưới dạng thuộc tính document.getElmentById('id').style.backgroundColor
        const styleText = {
            color: 'pink',
            padding: '15px',
            backgroundColor: 'black'
        }

        return (
            <div>
                <Child />
                <p className="txt"> hello khải</p>
                <span className={style.txtStyle}>Hello khải cyberlearn</span>
                <p style={styleText}>hello khải 321321321</p>
                <p style={{
                    color: 'pink',
                    padding: '15px',
                    backgroundColor: 'black'
                }}>hello khải 321321321</p>

            </div>
        )
    }
}
