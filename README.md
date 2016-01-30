# srt (SubRip subtitle format) loader for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

Relies on:
- [subtitles-parser](https://github.com/bazh/subtitles-parser)
- [raw-loader](https://github.com/webpack/raw-loader)

### Simple API

``` javascript
require("raw!srt!./file.srt");
```

## Recommended configuration

The recommended configuration for webpack is:

``` javascript
{
  module: {
    loaders: [
      { test: /\.srt$/, loader: 'raw-loader!srt-loader' },
    ]
  }
}
```

## Install

`npm install srt-loader`

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
