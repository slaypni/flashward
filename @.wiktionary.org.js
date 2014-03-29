(function(url, title, document_) {
  var m;
  if (!(document_ != null ? document_.querySelector('#ca-nstab-main') : void 0)) {
    return null;
  }
  if (!url.match(/^http(s)?\:\/\/(\w+)\.wiktionary\.org\/wiki\/.+/)) {
    return null;
  }
  m = title.match(/^(.+)\s+?(-|—)\s+?(.+)$/);
  if (!(m != null ? m[1] : void 0)) {
    return null;
  }
  if (m[1].split(':').length > 1) {
    return null;
  }
  return {
    title: m[1],
    urls: [url]
  };
});
