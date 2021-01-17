/*
注册的路由组件
 */

import React, { Component } from "react";
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button } from "antd-mobile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { register } from "../../redux/actions";
import Logo from "../../components/logo/logo";

const ListItem = List.Item;

class Register extends Component {
  state = {
    username: "", // 用户名
    password: "", // 密码
    password2: "", // 确认密码
    type: "laoban", // 用户类型名称   dashen/laoban
  };

  // 点击注册调用
  register = () => {
    //console.log(this.state)
    this.props.register(this.state);
  };

  // 处理输入数据的改变: 更新对应的状态
  handleChange = (name, val) => {
    // 更新状态
    this.setState({
      [name]: val, // 属性名不是name, 而是name变量的值
    });
  };

  toLogin = () => {
    this.props.history.replace("/login");
  };

  render() {
    const { type } = this.state;
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
            {/*  {msg ? <div className='error-msg'>{msg}</div> : null} */}
            <WhiteSpace />
            <InputItem
              style={{ border: "1px solid gray", borderRadius: "5px", height: "40px", paddingLeft: "5px" }}
              placeholder="Username"
              // placeholder="请输入用户名"
              onChange={(val) => {
                this.handleChange("username", val);
              }}>
              {/* username */}
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
              {/* password */}
              {/* 密&nbsp;&nbsp;&nbsp;码: */}
            </InputItem>
            <WhiteSpace />
            <InputItem
              style={{ border: "1px solid gray", borderRadius: "5px", height: "40px", paddingLeft: "5px" }}
              placeholder="Confirm Password"
              // placeholder="请输入确认密码"
              type="password"
              onChange={(val) => {
                this.handleChange("password2", val);
              }}>
              {/* confirm password */}
              {/* 确认密码: */}
            </InputItem>
            <WhiteSpace />
            <ListItem>
              <span>User Type</span>
              {/* <span>用户类型:</span> */}
              &nbsp;&nbsp;&nbsp;
              <Radio checked={type === "dashen"} onChange={() => this.handleChange("type", "dashen")}>
                Developer
                {/* 大神 */}
              </Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type === "laoban"} onClick={() => this.handleChange("type", "laoban")}>
                Boss
                {/* 老板 */}
              </Radio>
            </ListItem>
            <WhiteSpace />
            <Button type="primary" style={{ fontWeight: "bold", fontSize: "24px" }} onClick={this.register}>
              Register
              {/* 注&nbsp;&nbsp;&nbsp;册 */}
            </Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>Log in</Button>
            {/* <Button onClick={this.toLogin}>已有账户</Button> */}
          </List>
        </WingBlank>
      </div>
    );
  }
}

export default connect((state) => ({ user: state.user }), { register })(Register);
