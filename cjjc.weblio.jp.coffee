(url, title, document_) ->
  return null if not document_?.querySelector '#topicWrp'
  return null if not url.match /^http(s)?\:\/\/cjjc\.weblio\.jp\/content\/.+/
  m = title.match /^(.+)((の中国語訳 - 中国語辞書 - Weblio日中中日辞典)|(の意味 - 中国語辞書 - Weblio日中中日辞典))$/
  return if not m?[1] then null else {
    title: m[1]
    urls: [url]
  }
