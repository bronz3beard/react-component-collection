```js
<VideoPlayer
  url="https://vimeo.com/169599296"
  imageUrl=""
  videoTitle="This is a title"
  videoDescription="This is a video description"
  withModal
/>
```

HLS info might help performance? - `https://www.dacast.com/blog/hls-streaming-protocol/`

Required prop:

- `url` = string

Optional props:

- `imageUrl` = string
- `listType` = string
- `withModal` = bool
- `videoTitle` = string
- `playListID` = string
- `modalWithImage` = bool
- `videoDescription` = string

To play video with modal add this prop => `withModal`  
To include an image in the modal add this prop `modalWithImage`, the default modal is black, including the prop `modalWithImage` will add the same image to the modal background as the image that is added to the `imageUrl` prop.  
To change the placeholder image update this prop => `imageUrl` or for a more simple player remove custom placeholder image by removing `imageUrl` prop.

VIMEO:  
Depending on video owners settings on vimeo, controls can be hidden.  
Owner settings can be updated in vimeo webApp and controls can be hidden with paid versions of vimeo.  
controls for `vimeo.com/169599296` are hidden, change to this video `vimeo.com/22439234` the controls can't be hidden.

YOUTUBE:  
If you want other videos to play after the "inital video" (intial video = video in url prop)  
then add this prop => `listType="playlist"` with the playlist ID you want to play through, e.g. `playListID="PLmC3xsmfCtui7DFB7LiHf0d-zrtMdUpX8"`.

Test URL's:  
youTube url: `https://www.youtube.com/watch?v=ChOhcHD8fBA`  
vimeo url: `https://vimeo.com/169599296` | | `https://vimeo.com/22439234`
