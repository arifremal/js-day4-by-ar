const names = ['abul','babul','kabul','cabul','abul','kabul','arif','remal','babul']
function duplicate (names){
    const unic = [];
    for (i=0;i<names.length; i++ ){
        const name = names[i]
        console.log(name);
        if(unic.includes(name)=== false){
            unic.push(name);
        }
    }
    return unic
}
 const finall = duplicate(names);
 console.log(finall);