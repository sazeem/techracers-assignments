var unflatObject=  {"flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] };
//output =  {"flatJSON": false, "i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree", "dates.0.day": 1, "dates.1.day": 8947 }


function flatten(unflatObject) {
            
    var output={};
           
    for (let key in unflatObject) {
           
        
        if(typeof(unflatObject[key]) != 'object'){
            output[key]=unflatObject[key];            
        }

        else {
            
            for(let key2 in unflatObject[key]){
                unflatObject[key+"."+key2]=unflatObject[key][key2];
                delete unflatObject[key][key2];
                
            }
            Object.assign(output,flatten(unflatObject[key]));
            
           
        }

    }
    
    return output;
        
}
console.log(flatten(unflatObject));
