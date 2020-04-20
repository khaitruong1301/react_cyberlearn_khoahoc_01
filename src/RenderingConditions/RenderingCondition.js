import React, { Component } from 'react'

export default class RenderingCondition extends Component {

    login = true;
    userName = "Trương Tấn Khải";

    renderContent = () => {
        if(this.login) {
            return <p>Hello {this.userName}</p>
        }
        return  <button>Đăng nhập</button>
    }


    render() {
        return (
            <div>
                {/* {this.login ? <p>Hello {this.userName}</p> : <button>Đăng nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
