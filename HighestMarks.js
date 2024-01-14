const marks =[67,78,98,85,92];

(((marks[0])>(marks[1]))&&((marks[0])>(marks[2]))&&((marks[0])>(marks[3]))&&((marks[0])>(marks[4])))
? console.log(marks[0]):
(((marks[1])>(marks[0]))&&((marks[1])>(marks[2]))&&((marks[1])>(marks[3]))&&((marks[1])>(marks[4])))
? console.log(marks[1])
:(((marks[2])>(marks[0]))&&((marks[2])>(marks[1]))&&((marks[2])>(marks[3]))&&((marks[2])>(marks[4])))
? console.log(marks[2])
:(((marks[3])>(marks[0]))&&((marks[3])>(marks[1]))&&((marks[3])>(marks[2]))&&((marks[3])>(marks[4])))
? console.log(marks[3])
:(((marks[4])>(marks[0]))&&((marks[4])>(marks[1]))&&((marks[4])>(marks[2]))&&((marks[4])>(marks[3])))
? console.log(marks[4]):
console.log("All students get equal Marks");