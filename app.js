const { Console } = require('console')
const _=require('loadsh')

const items =[1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)