studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];
  factory.addStudent = function() {
    factory.students.push({"name": factory.studentName, "signed_in": false});
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student);
    factory.students.splice(index, 1);
  };

  factory.signedInStudent = function(student) {
    // student = factory.students.find(student);
    student.signed_in = true;
  };
  return factory;
});
