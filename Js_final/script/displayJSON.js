httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function (){
  // server response take place, same as XMLHttpRequest.DONE
  if(httpRequest.readyState == 4 && httpRequest.status == 200){

    //  convert JSON data to JS object 
     const data = JSON.parse(httpRequest.responseText);

     showAllData(data);
  }
  else{
    console.log("There was a problem with the request.");
  }
};

// URL is my json file file path
httpRequest.open("GET", 'data.json', true);
// send request
httpRequest.send();

// 1. put the Json oject into the div, and make the image clickable. 
// 2. pass data to the formula for the subtotal 
function showAllData(data){
  let total = 0;
  for (let i = 0; i < data.length; i++) {
      let Datarow = `<ul>
                      <li class="img">
                        <button type=button class="ClickableImg">
                          <img src=${data[i].image} class="itemPic">
                        </button>
                      </li>

                      <li class="itemName">${data[i].itemName}
                      </li>
                      <li class="value">${data[i].value}
                      </li>
                      <li class="amount">${data[i].amount}
                      </li>

                      <li class="subtotal">${data[i].value * data[i].amount}</li>
                    </ul>`;

// append the above to class in html class tag: Datarow:
      $(".Datarow").append(Datarow);

// increament for each one click on the image
      $(".ClickableImg").eq(i).on("click", function() {
        // add the amount per click, show in the class amount above
            data[i].amount += 1;
            $(".amount").eq(i).text(data[i].amount);
            // use the new amount for subtotal, show in the subtotal amount above
            $(".subtotal").eq(i).text(data[i].value * data[i].amount);

//  update the value to the html class tag: total
            total += data[i].value;
            $("#total").val(total);
      })
  }
}
