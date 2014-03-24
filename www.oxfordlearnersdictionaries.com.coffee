(url, title, document_ = undefined) ->
  return null if not url.match /^http(s)?\:\/\/www\.oxfordlearnersdictionaries\.com\/(us\/)?definition\/(\S+?)\/.+/
  m = title.match /^(.+) - Definition and pronunciation \| Oxford .+ Dictionary at OxfordLearnersDictionaries\.com$/
  return null if not m?[1]
  return {
    title: m[1]
    urls: [url]
  }
