function makePerson(params) {

    let {first} = params;

    function getName() {
        return first;
    }

    function setName(newName) {
        first = newName;
    }

    return Object.freeze({
        first,
        getName,
        setName
    }); 
  
}



const steve = makePerson({first: 'steve'});
console.log(steve.getName());
steve.setName("Bill");
console.log(steve.getName());