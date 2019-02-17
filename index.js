// index.js
const handle = map=>({
    get: (target, name)=>{
        if(!target[name] && map[name])
            target[name] = map[name]()
        return target[name]
    }
})

const shortcut = map=>new Proxy({}, handle(map))

module.exports = shortcut


if(module.parent) return

// sample
const foo = {
    bar: {
        f: v=>`this is a ${v}`
       ,hoge: {
            g: v=>`we are ${v}`
        }
    }
}
const $ = require('./index.js')({
    f: ()=>foo.bar.f
   ,g: ()=>foo.bar.hoge.g
})

console.log(`** ${$.f('pen')}.`)
console.log(`** ${$.g('Reds')}!`)
