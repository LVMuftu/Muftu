const del = require('../lvmefes').defile;
const expath = "../../../";
const args = process.argv.slice(2);
args.forEach(tag=>{
    del(require("path").join(__dirname+expath+tag));
});
