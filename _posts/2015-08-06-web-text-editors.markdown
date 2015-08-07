---
layout: post
title:  "Rich Text Editing in the Browser"
date:   2015-08-06
subtitle: "Choosing the right one"
categories: web
---

If your application needs an text input that expands beyond a simple textfield or textarea you'll be facing a large set of embeddable rich text editors (or WYSIWYG editors) there are 2 general breeds out there:

The Midas editors
-----------------

Right if you're trying to use the Browser for text input you usually go for the standard WYSIWYG editors.
These editors are build on top of the [Midas Editor][midas-editor] that is part of the [HTML spec][w3-design-mode].

The Midas editor is an iframe that once it has its "contenteditable" (or "designmode") attribute set becomes editable. It exposes a set of functionality for you to keep track of the cursor, selection etc. Most of the editors are a layer that provide you with the standard editor sugar you're used to. The output is html. The challenge here is that you have limited control over the input and the output of that editor. These editors are famous for generating lots of amount of dead (mostly invisible) trash html tags that at some point result in display issues and although the skywriter editors are better at this they are not immune to the issue.

The good news is an plenty of refined and well supported such editors, popular choices are [TinyMCE][tiny-mce] and [CKEditor][ck-editor].

The Skywriter editors
---------------------

Since the best text editors in fact are code editors we looked at web IDEs such as [Cloud 9][c9, [Koding][koding] and the Google Drive text editor (which is not publicly released but after digging through the minified code it seems that it works in a similar fashion).

They use the [Ace Editor][ace-editor] (formerly Mozilla Skywriter), [Code Mirror][code-mirror] or something similar.

These editors take a different approach than the midas ones, they have a hidden textarea where your real cursor lives (the one you see is actually a html element) and separate view that displays the parsed textarea content whether it is markdown, html or simply text, giving you significantly more flexibility, since the editor has full control on what goes onto the view and somewhat greater control on what the user interaction with the editor is. There is a large array of plugins and extensions for these editors. A drawback is that they are bigger and heavier and often just an overkill.

The bottomline is that you need to assess what your project needs are and i hope this is useful for you to make a educated decision on what's the best approach for you.

[ck-editor]: http://ckeditor.com/ "CKEditor"
[tiny-mce]: http://www.tinymce.com/ "TinyMCE"
[w3-design-mode]: http://www.w3.org/TR/2008/WD-html5-20080610/editing.html "W3 html editing"
[midas-editor]: https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Midas "Midas Editor"
[ace-editor]: http://ace.c9.io/#nav=about "Ace Editor"
[code-mirror]: https://codemirror.net/ "Code Mirror"
[c9]: https://c9.io/ "Cloud 9 Web IDE"
[koding]: https://koding.com/ "Koding Web IDE"
