let marks = [9,1,41,4,859,6894,510]
// for(let i = 0 ; i < marks.length ;i++){
//     console.log("i, marks[i]",i,marks[i]);
// }

// let reactJSStudent = [];
// let newStudent = {
//     name : "Nguyen van a",
//     mark : 0
// }
// reactJSStudent.push(newStudent);
// console.log(reactJSStudent);


// function hello(){
//     console.log(111111);
// }

// function say(func){
//     func();

// }
// say(hello);

let reactJSStudent = [{
    name : "Minh",
    mark : 8
},
{
    name : "Nguyen Linh",
    mark : 10
},
{
    name : "Tuan Hai",
    mark : 9
},
{
    name : "Minh Ngoc",
    mark : 7
},
{
    name : "Ngo Van",
    mark : 7
},
{
    name : "Van TR",
    mark : 7
},]
let student10Marks = reactJSStudent.filter((student)=>{
    return student.name.includes("Nguyen")
})
console.log("student10Marks:  ",student10Marks );