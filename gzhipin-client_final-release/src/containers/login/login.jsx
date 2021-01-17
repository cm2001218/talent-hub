/*
登陆的路由组件
 */

import React, { Component } from "react";
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Button } from "antd-mobile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { login } from "../../redux/actions";

import Logo from "../../components/logo/logo";

// const ListItem = List.Item;

class Login extends Component {
  state = {
    username: "", // 用户名
    password: "", // 密码
  };

  login = () => {
    this.props.login(this.state);
  };

  // 处理输入数据的改变: 更新对应的状态
  handleChange = (name, val) => {
    // 更新状态
    this.setState({
      [name]: val, // 属性名不是name, 而是name变量的值
    });
  };

  toRegister = () => {
    this.props.history.replace("/register");
  };

  render() {
    const { redirectTo } = this.props.user;
    // const { msg, redirectTo } = this.props.user;
    // 如果redirectTo有值, 就需要重定向到指定的路由
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }

    return (
      <div>
        <NavBar>TALENTS&nbsp;&nbsp;&nbsp;HUB</NavBar>
        {/* <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar> */}
        <Logo />
        <WingBlank>
          <List>
            {/* {msg ? <div className='error-msg'>{msg}</div> : null} */}
            <WhiteSpace />
            <InputItem
              style={{ border: "1px solid gray", borderRadius: "5px", height: "40px", paddingLeft: "5px" }}
              placeholder="Username"
              // placeholder="请输入用户名"
              onChange={(val) => {
                this.handleChange("username", val);
              }}>
              {/* 用户名: */}
            </InputItem>
            <WhiteSpace />
            <InputItem
              style={{ border: "1px solid gray", borderRadius: "5px", height: "40px", paddingLeft: "5px" }}
              placeholder="Password"
              // placeholder="请输入密码"
              type="password"
              onChange={(val) => {
                this.handleChange("password", val);
              }}>
              {/* 密&nbsp;&nbsp;&nbsp;码: */}
            </InputItem>
            <WhiteSpace />

            <Button type="primary" style={{ fontWeight: "bold", fontSize: "24px" }} onClick={this.login}>
              Log&nbsp;&nbsp;in
            </Button>
            {/* <Button type="primary" onClick={this.login}>
              登&nbsp;&nbsp;&nbsp;陆
            </Button> */}
            <WhiteSpace />
            <Button onClick={this.toRegister}>Register Now</Button>
            {/* <Button onClick={this.toRegister}>还没有账户</Button> */}
          </List>
        </WingBlank>
      </div>
    );
  }
}

export default connect((state) => ({ user: state.user }), { login })(Login);
