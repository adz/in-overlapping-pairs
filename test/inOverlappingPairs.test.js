import test from 'tape'

import inOverlappingPairs from '../src'

test('inOverlappingPairs with 2 or less elements', function (assert) {
  assert.deepEqual(inOverlappingPairs([]), [ [] ],
              'An empty array produces a single empty subarray')

  assert.deepEqual(inOverlappingPairs([1]), [ [1] ])
  assert.deepEqual(inOverlappingPairs([1, 2]), [ [1, 2] ])

  assert.end()
})

test('inOverlappingPairs wtih more than 2 elements', function (assert) {
  assert.deepEqual(inOverlappingPairs([1, 2, 3]), [ [1, 2], [2, 3] ])
  assert.end()
})


