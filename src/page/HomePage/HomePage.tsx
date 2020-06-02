import React, { Component } from 'react';
import { connect } from "react-redux";
import "./HomePage.scss"
import { getValidateCode } from "../../api/login"
const stateToProps = (state) => {
  return {
    count: state.count,

  };
};
const dispatchToProps = (dispatch) => {
  return {
    add() {
      let action = {
        type: "add"
      }
      dispatch(action)
    },
    reduce() {
      let action = {
        type: "reduce"
      }
      dispatch(action)
    }
  };
};

//定义state内变量类型
interface typeState {
  imgSrc: string
}

class HomePage extends Component<any, typeState> {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ""
    }
  }
  componentDidMount() {
    this.getValidateCode()
  }
  getValidateCode = () => {
    getValidateCode()
      .then((res: any) => {
        this.setState({
          imgSrc: res.data.imgsrc
        })
      }).catch((e) => {

      })
  }
  render() {
    return (
      <div id="homePage">

        <h1 style={{ marginRight: '30px' }}>这里是homePage页面</h1>
        <button className="addBtnForH" onClick={this.props.add}>加</button>
        <div style={{ margin: '0 20px', fontSize: '20px' }}>{this.props.count}</div>
        <button onClick={this.props.reduce}>减</button>

        <div style={{ marginLeft: '30px' }} onClick={() => this.getValidateCode()}>
          <div style={{ marginBottom: '30px' }} >点击验证码切换图片</div>
          <img src={'data:image/jpeg;base64,' + this.state.imgSrc} alt="" />
        </div>
      </div>
    );
  }
}

export default connect(stateToProps, dispatchToProps)(HomePage);