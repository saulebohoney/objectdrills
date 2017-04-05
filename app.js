//creating an object
function createMyObject() {
	let myObject = {
		foo: "bar",
		answerToUniverse: 43,
		"olly olly": "oxen free",
		
		sayHello: function(){
			return ('hello');
		}
	};

	return myObject;	
}

let newObj = createMyObject();
console.dir(newObj);

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
//makeStudentReport
function makeStudentsReport(data) {
  var test = [];
  
  data.forEach(function(dataElement){    
    test.push(dataElement.name + ': ' + dataElement.grade);
   })

  return test;
}
//EnrollInSummerSchool
function enrollInSummerSchool(students) {
  return students.map(function(student){
    return {name: student.name, status: "In Summer school", course: student.course};
  });
}
//FindbyID
var scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];

function findById(items, idNum) {
   return items.find(function(equals) {
     return equals.id === idNum;
   });
}

