```js
    <ContextMenu website="shortboard.com.au" username="roryfn" hashtag="bronz3beard" />
```

The custom context menu will override the standard right click menu, if you need access to the standard menu just hold down `shift` + `right click`.

If you need to provide your own links see the `customLinks` structure below. When providing `customLinks` you do not need to add the other props `website`, `hashtag`, `username`.

Default properties:
  `website: 'lmgtfy.com/',`  
  `hashtag: 'LMGTFY',`  
  `username: 'lmgtfy',`  
  `customLinks: PropTypes.arrayOf(PropTypes.shape(`  
    `{`  
      `id: 0,`  
      `title: '',`  
      `url: '',`  
      `class: '',`  
      `target: '_blank',`  
      `rel: 'noopener noreferrer',`  
    `}`  
  `))`  
  