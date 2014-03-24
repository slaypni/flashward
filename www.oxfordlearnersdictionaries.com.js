(function(url, title, document_) {
  var m;
  if (document_ == null) {
    document_ = void 0;
  }
  if (!url.match(/^http(s)?\:\/\/www\.oxfordlearnersdictionaries\.com\/(us\/)?definition\/(\S+?)\/.+/)) {
    return null;
  }
  m = title.match(/^(.+) - Definition and pronunciation \| Oxford .+ Dictionary at OxfordLearnersDictionaries\.com$/);
  if (!(m != null ? m[1] : void 0)) {
    return null;
  }
  return {
    title: m[1],
    urls: [url]
  };
});
