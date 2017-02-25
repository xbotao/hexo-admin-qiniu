var React = require('react')

var About = React.createClass({
  render: function () {
    return <div className="about">
      <h1>This is the Hexo Admin Plugin</h1>
      <p><strong>Goal: Provide an awesome admin experience for managing your blog.</strong></p>
      <p>
        Useful links:
        <ul>
          <li><a href="http://hexo.io">Hexo site</a></li>
          <li><a href="https://github.com/jaredly/hexo-admin-plugin">Github page for Hexo-admin</a></li>
          <li><a href="https://github.com/xbotao/hexo-admin-qiniu">add 'qiniu' to Hexo-admin</a></li>
        </ul>
      </p>
      <p>
        Helper:
        <ul>
          <li><a href="https://xbotao.github.io/hexo-admin-qiniu/">Hexo-admin-qiniu</a></li>
        </ul>
      </p>
    </div>
  }
})

module.exports = About

