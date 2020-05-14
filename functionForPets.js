var pets = ['cat','dog','lion'];
function processPets(pets){
    for(let i=0; i<pets.length; i++){
        pets[i]=pets[i] +'s';
    }
    console.log(pets);
}
processPets(pets);