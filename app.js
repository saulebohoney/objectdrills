//creating an object
function createMyObject() {
	let createMyObject = {
		foo: "bar",
		answerToUniverse: 43,
		"olly olly": "oxen free",
		
		sayHello: function(){
			return ('hello');
		}
	};

	return createMyObject;	
}

createMyObject();

//____________________________________

//Object Updater

function updateObject(obj) {
	obj.foo = "foo";
	obj.bar = "bar";
	obj.bizz = "bizz";
	obj.bang = "bang";
  return obj;
} 

//Self reference with THIS

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return (this.firstName + ' ' + this.lastName);
    }
  }
  return person;
}

//KeyDeleter

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

