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
