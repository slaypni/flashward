(function(url, title, document_) {
  var m;
  if (!(document_ != null ? document_.querySelector('#topicWrp') : void 0)) {
    return null;
  }
  if (!url.match(/^http(s)?\:\/\/ejje\.weblio\.jp\/content\/.+/)) {
    return null;
  }
  m = title.match(/^(\S+)((の英語・英訳 - 英和辞典・和英辞典 Weblio辞書)|(の意味 - 英和辞典 Weblio辞書))$/);
  if (!(m != null ? m[1] : void 0)) {
    return null;
  } else {
    return {
      title: m[1],
      urls: [url]
    };
  }
});
