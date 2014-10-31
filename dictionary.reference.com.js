(function(url, title, document_) {
  var m;
  if (!(document_ != null ? document_.querySelector('#source-luna') : void 0)) {
    return null;
  }
  if (!url.match(/^http(s)?\:\/\/dictionary\.reference\.com\/browse\/.+/)) {
    return null;
  }
  m = title.match(/^(.+) \| Define (.+) at Dictionary\.com$/);
  if (!(m != null ? m[1] : void 0)) {
    return null;
  } else {
    return {
      title: m[1],
      urls: [url]
    };
  }
});
