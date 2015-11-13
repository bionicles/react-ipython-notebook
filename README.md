# react-ipython-notebook

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


## Notes

Incomplete and not fully functional. At the moment it just creates some basic cell markup and renders the markdown content. To see a simple example:

```javascript
npm install
npm run build
node dist/bin/nbconvert.js test/fixtures/notebook1.ipynb.json 
```

The output (beautified and with react tags removed) is:

```html
<div class="ipynb">
  <div class="ipynbCell--text">
    <h1>test</h1>
    <p>$$y = x$$</p>
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--code">
  </div>
  <div class="ipynbCell--raw">
  </div>
  <div class="ipynbCell--code">
  </div>
</div>
```

## Todo

- Add mathjax support and proper escaping of equations (escape with backtics and remove before insertion and mathjax rendering? Is there a better pattern for this?)
- Render code cells
- Figure out how images are bundled
- Figure out what raw nbconvert cells do
- Separate nbconvert into separate repo (i.e. avoid unnecessary dependencies in this repo)
- And more

