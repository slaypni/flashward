(function(url, title, document_) {
  var m;
  if (!(document_ != null ? document_.querySelector('#MainTxt') : void 0)) {
    return null;
  }
  if (!url.match(/^http(s)?\:\/\/www\.thefreedictionary\.com\/.+/)) {
    return null;
  }
  m = title.match(/^(.+) - definition of (.+) by the Free Online Dictionary, Thesaurus and Encyclopedia\.$/);
  if (!(m != null ? m[1] : void 0)) {
    return null;
  } else {
    return {
      title: m[1],
      urls: [url]
    };
  }
});
