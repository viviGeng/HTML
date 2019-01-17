function Student(name,age){
    this.name=name;
    this.age=age;
}

Student.prototype.getAge = function(){
    return this.age
}
var student=new Student();
student.name="abc";
student.age=12;


student.__proto__.age = 123;
student.__proto__.getAge = function() {
    return this.name
}

var student2=new Student("a",11);
console.log("student",student,student2, student.__proto__, Student.prototype);
console.log("student2",student.getAge(),student2.getAge());

