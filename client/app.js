
var Link = require('react-router').Link
var React = require('react')

var App = React.createClass({
  render: function () {
    return <div className="app">
      <div className="app_header">
        <img src="logo.png" className="app_logo"/>
        <span className="app_title">Hexo Admin</span>
        <ul className="app_nav">
          <li><Link to="posts">文章</Link></li>
          <li><Link to="pages">页面</Link></li>          
          <li><Link to="deploy">发布</Link></li>
          <li><Link to="settings">设置</Link></li>
          <li><Link to="about">关于</Link></li>
        </ul>
      </div>
      <div className="app_main">
        <this.props.activeRouteHandler/>
      </div>
    </div>;
  }
})

module.exports = App
