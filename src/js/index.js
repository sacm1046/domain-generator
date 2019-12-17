/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var options = [];
window.onload = function() {
  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; z < noun.length; z++) {
        options.push(" www." + pronoun[x] + adj[y] + noun[z] + ".com");
        //console.log(options);
        document.getElementById("myClass").innerHTML = options;
      }
    }
  }
};
