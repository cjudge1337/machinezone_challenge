

document.addEventListener("DOMContentLoaded", function() {
  // let myData = JSON.parse(data);
  // console.log(data);
});


function load() {
	var mydata = JSON.parse(data);
	console.log(mydata);
}
// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }
