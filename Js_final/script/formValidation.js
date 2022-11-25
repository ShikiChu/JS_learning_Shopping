function validateForm(event){
    event.preventDefault();
    var vaild = true;

    // display for error messages:
    if (form.name.value.length < 2){
        document.querySelector('#nameError').textContent="*Your input is too short*";
        valid = false;
    };

    if (form.name.value.length > 25){
        document.querySelector('#nameError').textContent="*Your input is too long*";
        valid = false;
    };

    // age from 16 to 18
    if (form.age.value < 16 || form.age.value > 18){
        document.querySelector('#ageError').textContent="*You must be a student age between 16 to 18*";
        valid = false;
    };
// get the date value to milliseconds based on input and make comparison 
    let dateInput = Date.parse(form.deliveryDate.value)
    if (dateInput <= Date.now()){
        document.querySelector('#dateError').textContent="*Date should not be earlier than today*";
        valid = false;
    };
    

    // at least one grade to be chosen
    if (document.querySelector('#grade_10').checked == false &&
        document.querySelector('#grade_11').checked == false &&
        document.querySelector('#grade_12').checked == false){
        document.querySelector('#gradeError').textContent="*Required! You must choose which grade you are*";
        valid = false;
    };

// dropdown list 
    if(form.district.value===""){
        document.querySelector('#districtError').textContent= "*Select your district*";
        valid = false;
    };
// checkbox
    if(form.confirmStudent.checked==false){
        document.querySelector('#confirmStudentError').textContent= "*Your must be a high school student in Ottawa*";
        valid = false;
    };

    // run these two funtion to show info & order if vaild
    if (vaild){
        showStudentInfo()
        showOrder()
    }

    return true;

};

// Events , empty the error messages:
// when the button is clicked, the function will execute
document.form.addEventListener("submit", validateForm);

// empty the error messages when there's change input
document.querySelector('#name').addEventListener("blur", function(){
    if(this.value !== ""){
        nameError.textContent = "";
    }
});
// empty error if the age is within the range
document.querySelector('#age').addEventListener("blur", function(){
    if(this.value >=16 && this.value <= 18){
        ageError.textContent = "";
    }
});

// empty error if the date is after today
document.querySelector('#deliveryDate').addEventListener("blur", function(){
    let dateInput = Date.parse(form.deliveryDate.value)
    if(dateInput > Date.now()){
        dateError.textContent = "";
    }
});


// if one of the radio is chosen, empty error
document.querySelector('#grade_10').addEventListener("blur", function(){
    if(this.checked == true){
        gradeError.textContent = "";
    }
});
document.querySelector('#grade_11').addEventListener("blur", function(){
    if(this.checked == true){
        gradeError.textContent = "";
    }
});
document.querySelector('#grade_12').addEventListener("blur", function(){
    if(this.checked == true){
        gradeError.textContent = "";
    }
});
// empty error if checkbox is checked
document.querySelector('#confirmStudent').addEventListener("blur", function(){
    if(this.checked == true){
        confirmStudentError.textContent = "";
    }
});
// empty error if one option is chosen
document.querySelector('#district').addEventListener("blur", function(){
    if(form.district.value !== ""){
        districtError.textContent = "";
    }
});


// empty the error messages when reset button is clicked

document.form.addEventListener("reset", reset);

function reset(){
    document.querySelector('#nameError').textContent='';
    document.querySelector('#ageError').textContent='';
    document.querySelector('#gradeError').textContent='';
    document.querySelector('#districtError').textContent='';
    document.querySelector('#confirmStudentError').textContent='';
};
