// index.js
const h = map=>({
    get: (target, name)=>{
        if(!target[name] && map[name])
            target[name] = map[name]()
        return target[naem]
    }
})
const f = map=>new Proxy({}, h(map))
module.exports = f
