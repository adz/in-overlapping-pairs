export default function inOverlappingPairs (list) {
  if (list.length <= 2) return [list]
  const tail = list.slice(1)
  return tail.map((item, index) => [list[index], item])
}
