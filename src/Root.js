import React from 'react';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './router/index'; // 导入路由配置文件

const Root = (props) => {
  return (
    <Router>
      <div>
        <h1>Root</h1>
        {/* child routes won't render without this */}
        {/* 渲染匹配路径的路由组件 */}
        {renderRoutes(routes)}
      </div>
    </Router>
  );
};

export default Root;