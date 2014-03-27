(function(url, title, document_) {
  var m;
  if (!url.match(/^http(s)?\:\/\/www\.ldoceonline\.com\/dictionary\/.+/)) {
    return null;
  }
  m = title.match(/^(.+) - Definition from Longman English Dictionary Online$/);
  if (!(m != null ? m[1] : void 0)) {
    return null;
  } else {
    return {
      title: m[1],
      urls: [url]
    };
  }
});
