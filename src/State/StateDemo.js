import React, { Component } from 'react'

export default class StateDemo extends Component {

    //state: là thuộc tính có sẵn của react class component giúp định nghĩa những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
    state = {
        status : false
    }
    //setState là phương thức có sẵn của react class component giúp thay đổi giá trị state và render lại giao diện
    

    

    userLogin = {
        name: 'Song Lê',
        age: 20
    }

    login = () => {
        // this.state.status = true; //Không set giá trị trực tiếp trên state mà phải thông qua phương thức setState
        let newState =  {
            status : true
        }
        //Gọi phương thức setState => truyền vào state mới
        //setState: là phương thức bất đồng bộ
        this.setState(newState,() => {
            console.log(this.state)
        } );
        // console.log(this.state)
        
    }

    renderUserLogin = () => {
        if (this.state.status) {
            return <div className="text-center">{this.userLogin.name}</div>
        }
        return <button onClick={() => { this.login() }}>Login</button>
    }

    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>
        )
    }
}
