const defol = require("../lvmefes").defol;
const expath = "../../";
const args = process.argv.slice(2);
const del =  () => {
    for(const i in args){
         defol(require("path").join(__dirname+expath+args[i]))
         console.log(require("path").join(__dirname+expath+args[i]));
    }
}
del();
