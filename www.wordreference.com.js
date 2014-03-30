(function(url, title, document_) {
  var _ref, _ref1;
  title = document_ != null ? (_ref = document_.querySelector('#articleHead')) != null ? (_ref1 = _ref.querySelector('h3')) != null ? _ref1.innerText : void 0 : void 0 : void 0;
  if (!title) {
    return null;
  }
  if (!url.match(/^http(s)?\:\/\/www\.wordreference\.com\/\w+\/.+/)) {
    return null;
  }
  return {
    title: title,
    urls: [url]
  };
});
