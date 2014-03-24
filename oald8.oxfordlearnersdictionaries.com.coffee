(url, title, document_ = undefined) ->
  return null if not url.match /^http(s)?\:\/\/oald8\.oxfordlearnersdictionaries\.com\/dictionary\/.+/
  m = title.match /^(.+) - Definition and pronunciation \| Oxford Advanced Learners Dictionary at OxfordLearnersDictionaries\.com$/
  return null if not m?[1]
  return {
    title: m[1]
    urls: [url]
  }
