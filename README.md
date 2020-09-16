# `<dash-video>`

A custom element (web component) for playing DASH (Dynamic Adaptive Streaming over HTTP) videos.

The element API matches the HTML5 `<video>` tag, so it can be easily swapped with other media, and be compatible with other UI components that work with the video tag.

Built with [dash.js](https://github.com/Dash-Industry-Forum/dash.js).

Originally developed by [Mux](https://mux.com). Thanks to Steve Heffernan for the original work and contribution. 

## Example

```html
<html>
<head>
  <script type="module" src="https://unpkg.com/dash-video-element"></script>
</head>
<body>

  <dash-video controls src="https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"></dash-video>

</body>
</html>
```

## Installing

`<dash-video>` is packaged as a javascript module (es6) only, which is supported by all evergreen browsers and Node v12+.

### Loading into your HTML using `<script>`

Note the `type="module"`, that's important.

> Modules are always loaded asynchronously by the browser, so it's ok to load them in the head :thumbsup:, and best for registering web components quickly.

```html
<head>
  <script type="module" src="https://unpkg.com/dash-video-element"></script>
</head>
```

### Adding to your app via `npm`

```bash
npm install dash-video-element --save
```
Or yarn
```bash
yarn add dash-video-element
```

Include in your app javascript (e.g. src/App.js)
```js
import 'dash-video-element';
```
This will register the custom elements with the browser so they can be used as HTML.
