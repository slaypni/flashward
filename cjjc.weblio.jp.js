(function(url, title, document_) {
  var m;
  if (!(document_ != null ? document_.querySelector('#topicWrp') : void 0)) {
    return null;
  }
  if (!url.match(/^http(s)?\:\/\/cjjc\.weblio\.jp\/content\/.+/)) {
    return null;
  }
  m = title.match(/^(.+)((の中国語訳 - 中国語辞書 - Weblio日中中日辞典)|(の意味 - 中国語辞書 - Weblio日中中日辞典))$/);
  if (!(m != null ? m[1] : void 0)) {
    return null;
  } else {
    return {
      title: m[1],
      urls: [url]
    };
  }
});
