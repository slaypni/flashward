Formula - Flashward
===================

Formula is a piece of JavaScript file which has a function in it.
They are used by Flashward for extracting information from websites.
Each formula on this branch is used automatically by Flashward's Chrome extension.

Function
--------

An example of a formula is:
```
(function(url, title, document_){

  // obtain a word in the online dictionary page
  // word = ...

  if (isInvalidPage)
    return null;
  return {
    title: word,
    urls: [url]
  };
});
```

Each function is passed two or three arguments:

| Param     | Details                                                  |
| --------- |:-------------------------------------------------------- |
| url       | URL of the web page.                                     |                 
| title     | Title of the web page.                                   |
| document_ | document object of the web page. It might not be passed. |

The return value of the function will be used for create an item.
It must return null or an object that has:

| Param | Details                       |
| ----- |:----------------------------- |
| title | The name of the item.         |
| urls  | An array of URLs of the item. |

File name rule
--------------

The file name of each formula is the hostname of the website where the formula is applied suffixed with ".js".
It also support special patterns:

| Pattern | Example                                              |
| ------- |:-----------------------------------------------------
| @       | *@www.abc.com* matches *www.abc.com* and *abc.com*   |
| @.      | *@.abc.com* matches *en.abc.com*, *ja.abc.com*, etc. |
