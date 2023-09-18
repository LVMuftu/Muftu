const del = require('../lvmefes').del;
const expath = "../../../";
const args = process.argv.slice(2);
console.log(args)

args.forEach(tag=>{
    console.log(require("path").join(__dirname+expath+tag));
    del(expath+tag,true)
})
