# in-overlapping-pairs

[![Build
Status](https://travis-ci.org/adz/in-overlapping-pairs.svg?branch=master)](https://travis-ci.org/adz/in-overlapping-pairs)

> Maps the given array into pairs of overlapping elements in subarrays


## Install

```
npm install in-overlapping-pairs
```


## Usage

```js
import inOverlappingPairs from 'inOverlappingPairs'

inOverlappingPairs([1,2,3,4,5,6])
// > [[1,2], [2,3], [3,4], [4,5], [5,6]]
```

An empty array maps to an empty subarray:

```js
inOverlappingPairs([])
// > [[]]
```
## License

[MIT](http://opensource.org/licenses/MIT) 
