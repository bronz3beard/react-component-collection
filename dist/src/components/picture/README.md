```js 
<Picture image="https://www.w3schools.com/w3css/img_lights.jpg" imageAlt="Northern Lights" />

<Picture image={images} />
```

This is an img element that can be passed an images array or just be used with a single image src. 
The Images array can have a maximum of `two items` in the array, the `key` can be called anything you like (key is not restricted to `imageUrl` and `imageAlt` as shown in prop types).

The `key` that holds the image url value must be secure and contain `https://` this is what the variable is testing for to know which `key value pair` has the `image url` and which has the `alternative text`.

If you need to add more items to your array, you will need to add more tests for `values`

`NOTE: the array concept is still a WIP.`
