function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }
  

function promisify(f){
    return function(...args){
        return new Promise((resolve,reject) => {
            function callback(err,result){
                if(err){
                    reject(err);
                }
                else{
                    resolve(result);
                }
            }
            args.push(callback);
            f.call(this, ...args);
        });     
    };
}

let loadScriptPromise = promisify(loadScript);
loadScriptPromise('callback.js').then(
    result => {console.log("Script loaded successfully",result)}
).catch(
    error => {
        console.log(`Error found: ${error.name,error.message}`);
    }
)