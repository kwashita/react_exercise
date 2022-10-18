import React from "react";
import { connect } from "react-redux";

function AppRedux(props) {
  return (
    <>
      <div>AppRedux</div>
      <span>{props.num}</span>
      <button onClick={() => props.addNum()}> add Num in Redux</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNum() {
      const action = { type: "addNum", value: 2 };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppRedux);
