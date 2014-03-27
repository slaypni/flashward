(url, title, document_) ->
  return null if not document_?.querySelector '#topicWrp'
  return null if not url.match /^http(s)?\:\/\/ejje\.weblio\.jp\/content\/.+/
  m = title.match /^(.+)((の英語・英訳 - 英和辞典・和英辞典 Weblio辞書)|(の意味 - 英和辞典 Weblio辞書))$/
  return if not m?[1] then null else {
    title: m[1]
    urls: [url]
  }
