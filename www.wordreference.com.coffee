(url, title, document_) ->
  title = document_?.querySelector('#articleHead')?.querySelector('h3')?.innerText
  return null if not title
  return null if not url.match /^http(s)?\:\/\/www\.wordreference\.com\/\w+\/.+/
  return {
    title: title
    urls: [url]
  }
