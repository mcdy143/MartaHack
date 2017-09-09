var ref = firebase.database().ref();

// document.addEventListener("click", someListener );
//
// function someListener(event){
//     var element = event.target;
//     console.log(target)
//     if(element.id == 'input_14'){
//         console.log("hi");
//     }
// }
//

var stops = []
var i = 0;
$(".form-dropdown").ready(function() {
  document.getElementById("input_14")
    .addEventListener('change', function() {
      ref.child('12').once("value")
        .then(function(snapshot) {
          var dropdownList = document.getElementsByName('q17_whichStop')[1]
          var hiddenList = document.getElementById("input_17")
          // console.log(document.getElementById("input_17"))

          hiddenList.value = 0
          // hiddenList.innerHTML = ""
          // var html = '<select name="q17_whichStop" data-component="dropdown" required id="input_17" clas="form-dropdown validate[required]">'
          snapshot.forEach(function(child) {
            // console.log(dropdownList)
            if (dropdownList.childNodes[i] != undefined) {
              // console.log(dropdownList.childNodes[i])
              dropdownList.childNodes[i].innerHTML = child.key.toString()
              if (i == 1) {
                dropdownList.childNodes[i].innerHTML = "10TH ST@SPRING ST"
              }
            } else {
              // console.log(dropdownList)
              var listNode = document.createElement("LI");                 // Create a <li> node
              listNode.setAttribute("class", "jfDropdown-optionListItem")
              listNode.setAttribute("data-value", child.key.toString())
              dropdownList.appendChild(listNode)

              // html += "<option value=1> " + child.key.toString() + "</option>"

              dropdownList.childNodes[i].innerHTML = child.key.toString()

            }
            i++;
          })
          // html += "</select>"
          // hiddenList.innerHTML = html
        })
          var hiddenList = document.getElementById("input_17")
          // var dropdownList = document.getElementsByName('q17_whichStop')[1]
          // console.log(stops)
          // for dropdownList.childNodes
          //   // console.log(stops.childNodes)
          // stops.childNodes.forEach(function(element, i) {
          //   console.log(element)
          //   element.innerHTML =  "Ha"
          //   element.value =  "Ha"
          //
          // })
        })

        var select = document.getElementsByName("q16_headingTowards")[1]

        select.childNodes[1].innerHTML = "Route 12 - Cumberland Mall"
        select.childNodes[2].innerHTML = "Route 12 - Midtown Station"
  });
