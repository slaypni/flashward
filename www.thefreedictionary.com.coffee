(url, title, document_) ->
  return null if not document_?.querySelector('#MainTxt')
  return null if not url.match /^http(s)?\:\/\/www\.thefreedictionary\.com\/.+/
  m = title.match /^(.+) - definition of (.+) by the Free Online Dictionary, Thesaurus and Encyclopedia\.$/
  return if not m?[1] then null else {
    title: m[1]
    urls: [url]
  }
