function showStudentInfo(){

    // let name = document.form.name.value;
    // $(".showStudentInfo li:first-child").textContent = "Name:" + name ;

    // get the value from user's input and put into the li children 
    let name = document.form.name.value;
    document.querySelector(".showStudentInfo li:first-child").textContent = "Name: " + name ;

    let age = document.form.age.value;
    document.querySelector(".showStudentInfo li:nth-child(2)").textContent = "Age: " + age ;

    let date = document.form.deliveryDate.value;
    document.querySelector(".showStudentInfo li:nth-child(3)").textContent = "You prefer to send items on : " + date ;

    let grade = document.form.grade.value;
    document.querySelector(".showStudentInfo li:nth-child(4)").textContent = "Grade: " + grade ;

    let district = document.form.district.value;
    document.querySelector(".showStudentInfo li:nth-child(5)").textContent = "Your school district is in : " + district ;

    let priceTotal = document.form.total.value;
    document.querySelector(".showStudentInfo li:nth-child(6)").textContent = "Your total in CAD is : " + priceTotal + " dollars";



};


// show the user's picked items:
function showOrder(){
    for(let num = 0; num < $(".Datarow ul").length; num++) {
// refer to displayJSON.js , the class was created in Datarow, match with index , num increament
        let itemName = $(".itemName").eq(num).text();

        let pickedAmount = $(".amount").eq(num).text();
        
        // when there's any picked amount
        if (pickedAmount != 0) {
          let li = document.createElement("li");
          li.textContent = "Your order is "+ itemName + " x " + pickedAmount;
          $(".showOrder").append(li);
        };
    };
};