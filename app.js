// !    Arrays and Loop



// ? Question # 1

// var list = [
//     ["games"],
//     ["colors"],
//     ['fruits']
// ];

// alert(list);

// ? Question # 2

// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for (var i=0; i<3; i++){
//     document.write(matrix[i] + "<br>");
// };


// ? Question # 3

// for (var i=1; i<=10; i++){
//     document.write(i + "<br>");
// };


// ? Question # 4

// var table = +prompt("Enter a number to shows its multiplication table ");
// var length = +prompt("Enter length multiplication table ") 
// for (var i = 1; i<=length; i++){
//     document.write(table," ","x"," ",i," ","="," ",i*table,"<br>" );
// };


// ? Question # 5

// var fruits = [
//     ["apple"],
//     ["banana"],
//     ["mango"],
//     ["orange"],
//     ["srawberry"]
// ];
// for (var i=0; i<=4; i++){
//     document.write(fruits[i] + "<br>");
// };

// var fruits = [
//     ['Element at index 0 is apple'],
//     ['Element at index 1 is banana'],
//     ['Element at index 2 is mango'],
//     ['Element at index 3 is orange'],
//     ['Element at index 4 is strawberry']
// ];
// document.write("<br>")
// for (var i=0; i<=4; i++){
//     document.write(fruits[i] + "<br>");
// };

// ? Question # 8

// var array = [24, 53,78 ,91 ,12];
// var largest = 0;

// for (var i=0; i < array.length; i++) {
//     if (array[i] > largest) {
//         largest = array[i];
        
//     }
// }
// document.write("Array items"," ",array);
// document.write("<br>");
// document.write("The largest value "," ",largest);



// ? Question # 9

// var arr = [24, 53,78 ,91 ,12];
// var smallest = arr[0];

// for(var i=1; i<arr.length; i++){
//     if(arr[i] < smallest){
//         smallest = arr[i];   
//     }
// }
// document.write("Array items"," ",arr);
// document.write("<br>");
// document.write("The smallest value "," ",smallest);

// ? Question # 10

// for (i=1; i <= 100; i++){
//     if( i % 5 == 0  ){
//         document.write(i,",")
//     };
// };

// ? Question # 6
// ? Question # 7



// !  string methods

// ? Question # 1

// var a = prompt("Enter your your first name");
// var b = prompt("Enter your your last name");
// if (a!=null,b!=null){
//     document.write("Hello" + " ", a," ",b);
// };


// ? Question # 2

// var a = prompt("Enter your favourite mobile phone model ");
// var b = a.length;
// if (a!=null){
//     document.write("my favourite phone model is : "," ",a +
//      "<br>","length of string : "," ",b);
// };

// ? Question # 3

// var a = "Pakistani";
// var b = a.indexOf("n");
// document.write("string : "," ",a + "<br>", 
//      "index of 'n' : "," ",b);


// ? Question # 4

// var a = "hello world";
// var b = a.lastIndexOf("l");
// document.write("string : "," ",a + "<br>", 
//      "last index of 'l' : "," ",b);


// ? Question # 5

// var a = "pakistani";
// var b = a.charAt(3);
// document.write("string : "," ",a, "<br>",
//     "character at third index : "," ",b);

// ? Question # 6


// var a = prompt("Enter your your first name");
// var b = prompt("Enter your your last name");
// var res = a.concat(b);
// document.write("hello"," ",res);


// ? Question # 7


// var a = "hyderabad";
// var b = a.replace("hyder","islam");
// document.write("string : "," ",a, "<br>",
//     "after replacement : "," ",b);



// ? Question # 8

// var a = "ali and sami are best friends.they play cricket and football together"
// var b = a.replace("and","&");
// document.write("string : "," ",a,"<br>",
//      "after replacement : "," ",b);

// ? Question # 9

// var a = "100";
// document.write("value : "," ",a)
// document.write("<br>");
// document.write("type : "," ",typeof(a));
// document.write("<br>")
// var b = parseInt(a);
// document.write("value : "," ",b);
// document.write("<br>");
// document.write("type : "," ",typeof(b));

// ? Question # 10

// var a = prompt("Enter any word ");
// var b = a.toUpperCase();
// document.write("user input : "," ",a);
// document.write("<br>");
// document.write("upper case : "," ",b);


// ? Question # 11

// var a = prompt("Enter any word ");
// var b = a.totitlecase();
// document.write("user input : "," ",a);
// document.write("<br>");
// document.write("upper case : "," ",b);


// ? Question # 12

// var a = 3325;
// document.write("value : "," ",a);
// document.write("<br>");
// document.write("type : "," ",typeof(a));
// document.write("<br>");

// var b = a.toString();
// document.write("value : "," ",b);
// document.write("<br>");
// document.write("type : "," ",typeof(b));


// ? Question # 16

// var a = "university of karachi";
// var b = a.length
// for(var i=0;i<=b;i++){
//     document.write(a.split(),"<br>")
// };


// ? Question # 17

// var a = prompt("Enter a word");
// var b = a.length;
// document.write("user input : "," ",a);
// document.write("<br>");
// document.write("last character of user input : "," ",a.charAt(a.length -1));

// ? Question # 18

// var a = "the quick brown fox jumps over the lazy dogs";
// var b =  (a.match(/the/g) || []).length;
// document.write("text : "," ",a);
// document.write("<br>");
// document.write("there are"," ",b," ","occurrences of word 'the'")

// ? Question # 13
// ? Question # 14
// ? Question # 15
