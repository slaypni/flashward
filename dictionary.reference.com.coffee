(url, title, document_) ->
  return null if not document_?.querySelector('#results')
  return null if not url.match /^http(s)?\:\/\/dictionary\.reference\.com\/browse\/.+/
  m = title.match /^(.+) \| Define (.+) at Dictionary\.com$/
  return if not m?[1] then null else {
    title: m[1]
    urls: [url]
  }
