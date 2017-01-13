
var React = require('react')
var CM = require('code-mirror')
var PT = React.PropTypes
var api = require('./api')

function RandomName() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function _qiniuUpload(f, token, key, fn) {

  var xhr = new XMLHttpRequest();
  //创建表单
  xhr.open('POST', 'http://up.qiniu.com', true);
  var formData, startDate;
  formData = new FormData();
  if (key !== null && key !== undefined) formData.append('key', key);
  formData.append('token', token);
  formData.append('file', f);
  var taking;
	  
  xhr.onreadystatechange = function (response) {
    //上传成功则执行回调
    if (xhr.readyState == 4 && xhr.status == 200 && xhr.responseText) {
      var blkRet = JSON.parse(xhr.responseText);
      fn(blkRet);
    } else if (xhr.status != 200 && xhr.responseText) {
      if(xhr.status == 631){
        //editor.fire('error',{msg:'七牛空间不存在.'});
      }
      else{
        //editor.fire('error',{msg:'七牛设置错误.'});
      }
    }
  };
  startDate = new Date().getTime();
  //提交数据
  xhr.send(formData);
}

var CodeMirror = React.createClass({
  propTypes: {
    onScroll: PT.func
  },

  componentDidUpdate: function (prevProps) {
    if (prevProps.initialValue !== this.props.initialValue) {
      this.cm.setValue(this.props.initialValue)
    }
  },

  componentDidMount: function () {
    require('code-mirror/mode/markdown')
    this.cm = CM(this.getDOMNode(), {
      value: this.props.initialValue || '',
      theme: require('code-mirror/theme/default'),
      mode: 'markdown',
      lineWrapping: true,
    });
    this.cm.on('change', (cm) => {
      this.props.onChange(cm.getValue())
    })
    this.cm.on('scroll', (cm) => {
      var node = cm.getScrollerElement()
      var max = node.scrollHeight - node.getBoundingClientRect().height
      this.props.onScroll(node.scrollTop / max)
    })
    var box = this.getDOMNode().getBoundingClientRect()
    this.cm.setSize(box.width, box.height)

    window.addEventListener('resize', this._onResize)

    document.addEventListener('paste', this._onPaste)
  },

  _onResize: function () {
    var box = this.getDOMNode().getBoundingClientRect()
    this.cm.setSize(box.width, box.height)
  },

  componentWillUnmount: function () {
    document.removeEventListener('paste', this._onPaste)
    document.removeEventListener('resize', this._onResize)
  },

  _onPaste: function (event) {
    var items = (event.clipboardData || event.originalEvent.clipboardData).items;
    if (!items.length) return
    var blob;
    for (var i = items.length - 1; i >= 0; i--) {
      if (items[i].kind == 'file'){
        blob = items[i].getAsFile();
        break;
      }
    };
    if (!blob) return


    var cmEditor = this.cm;
    var imgName = RandomName();

    api.getToken(imgName).then((res) => {
      var bucketHost= res.bucketHost;
        _qiniuUpload(blob, res.token, imgName, function(res){
          var pasteImg = '![paste image](http://'+ bucketHost +'/' + res.key + ')';

          //images slim
          if(res.imageslime){
            var pasteImg = '![paste image](http://'+ bucketHost +'/' + res.key + '?imageslim)';
          }
          
          cmEditor.replaceSelection(pasteImg)
        })
      });
  
    // var reader = new FileReader();
    // reader.onload = (event) => {
    //   api.uploadImage(event.target.result).then((src) =>
    //     this.cm.replaceSelection('![pasted image1](' + src + ')')
    //   );
    // };
    // reader.readAsDataURL(blob);
  },

  render: function () {
    return <div/>
  }
})

module.exports = CodeMirror
