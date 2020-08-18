import React from 'react';
// import {renderRoutes} from 'react-router-config'; 当前路由下没有子路由了，无需再使用 renderRoutes

const GrandChild = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Grand Child</h3>
      {/* 拿到父路由组件传入的自定义属性 */}
      <div>{props.someProp}</div>
    </div>
  );
};

export default GrandChild;