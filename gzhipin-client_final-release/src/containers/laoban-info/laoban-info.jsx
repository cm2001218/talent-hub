/*
老板信息完善的路由容器组件
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavBar, InputItem, Button } from "antd-mobile";
// import { NavBar, InputItem, TextareaItem, Button } from "antd-mobile";
import HeaderSelector from "../../components/header-selector/header-selector";

import { updateUser } from "../../redux/actions";

class LaobanInfo extends Component {
  state = {
    header: "",
    post: "",
    info: "",
    company: "",
    salary: "",
  };

  // 更新header状态
  setHeader = (header) => {
    this.setState({
      header,
    });
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  save = () => {
    this.props.updateUser(this.state);
  };

  render() {
    // 如果信息已经完善, 自动重定向到对应主界面
    const { header, type } = this.props.user;
    if (header) {
      // 说明信息已经完善
      const path = type === "dashen" ? "/dashen" : "/laoban";
      return <Redirect to={path} />;
    }

    return (
      <div>
        <NavBar>Please Complete Boss Info</NavBar>
        {/* <NavBar>老板信息完善</NavBar> */}
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem
          placeholder="Job Intention"
          onChange={(val) => {
            this.handleChange("post", val);
          }}></InputItem>
        {/* <InputItem placeholder='请输入招聘职位' onChange={val => {this.handleChange('post', val)}}>招聘职位:</InputItem> */}
        <InputItem
          placeholder="Company Name"
          onChange={(val) => {
            this.handleChange("company", val);
          }}></InputItem>
        {/* <InputItem
          style={{ border: "1px solid gray", borderRadius: "5px", height: "40px", paddingLeft: "5px" }}
          placeholder="Please enter Company Name"
          onChange={(val) => {
            this.handleChange("company", val);
          }}></InputItem> */}
        {/* <InputItem placeholder='请输入公司名称' onChange={val => {this.handleChange('company', val)}}>公司名称:</InputItem> */}
        <InputItem
          placeholder="Job Salary"
          onChange={(val) => {
            this.handleChange("salary", val);
          }}></InputItem>
        {/* <InputItem placeholder='请输入职位薪资' onChange={val => {this.handleChange('salary', val)}}>职位薪资:</InputItem> */}
        <InputItem
          placeholder="Job Requirement"
          rows={1}
          onChange={(val) => {
            this.handleChange("info", val);
          }}></InputItem>
        {/* <TextareaItem title="职位要求:"
                      placeholder='请输入个人介绍'
                      rows={3} onChange={val => {this.handleChange('info', val)}}/> */}
        <Button type="primary" style={{ marginTop: "5px" }} onClick={this.save}>
          Save
        </Button>
        {/* <Button type='primary' onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button> */}
      </div>
    );
  }
}

export default connect((state) => ({ user: state.user }), { updateUser })(LaobanInfo);
