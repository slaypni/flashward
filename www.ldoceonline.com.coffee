(url, title, document_) ->
  return null if not url.match /^http(s)?\:\/\/www\.ldoceonline\.com\/dictionary\/.+/
  m = title.match /^(.+) - Definition from Longman English Dictionary Online$/
  return if not m?[1] then null else {
    title: m[1]
    urls: [url]
  }
