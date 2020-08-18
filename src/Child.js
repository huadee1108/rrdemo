import React from 'react';
import routes from './router/index'; // 只做 matchRoutes API 演示使用
import {renderRoutes, matchRoutes} from 'react-router-config';

const Child = (props) => {
  console.log(props)
  /* 
    props: {
      history: ...,
      location: ...,
      match: ...,
      route: ...,
      staticContext: ...,
      其他自定义传入的属性: ...
    }
  */
  /* 
    matchRoutes 查找匹配的路由，返回一个匹配的数组
    [
      {
        match: ...,
        route: ...
      },
      ...
    ]
  */
  console.log('matchRoutes', matchRoutes(routes, "/child/45"));
  return (
    <div>
      <h2>Child</h2>
      {/* child routes won't render without this */}
      {/* 渲染当前路由下的子路由所对应的组件，第二个参数是给子路由传入的额外自定义的参数 */}
      {renderRoutes(props.route.routes, { someProp: "these extra props are optional" })}
    </div>
  );
};

export default Child;