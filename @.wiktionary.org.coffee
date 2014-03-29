(url, title, document_) ->
  return null if not document_?.querySelector '#ca-nstab-main'
  return null if not url.match /^http(s)?\:\/\/(\w+)\.wiktionary\.org\/wiki\/.+/
  m = title.match /^(.+)\s+?(-|—)\s+?(.+)$/
  return null if not m?[1]
  return null if m[1].split(':').length > 1
  return {
    title: m[1]
    urls: [url]
  }
