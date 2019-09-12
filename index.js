//first name
var firstName = '';
var lastName ='';
var mailformat ='';
var dateofbirth ='';
var Telephone ='';
var password ='';
var selected ='';
var Country1 ='';

 function validateFname() {
  firstName = document.getElementById('fname').value;

   if (firstName == "" || firstName == null || firstName == undefined) {
     document.getElementById('firstspan').innerHTML = "First Name is required";
     document.getElementById('firstspan').style.display = 'block';
     document.getElementById('firstspan').style.color = 'red';
   } else {
     document.getElementById('firstspan').innerHTML = "";
     document.getElementById('firstspan').style.display = 'none';
   }
 }

//last name
 function validateLname() {
    lastName = document.getElementById('lname').value;
   if (lastName == "" || lastName == null || lastName == undefined) {
     document.getElementById('lastspan').innerHTML = "Last Name is required";
     document.getElementById('lastspan').style.display = 'block';
     document.getElementById('lastspan').style.color = 'red';
   } else {

     document.getElementById('lastspan').innerHTML = "";
     document.getElementById('lastspan').style.display = 'none';
   }
}
//Email
function validateEmail() {
   mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!document.getElementById('email').value.match(mailformat))
   {

     document.getElementById('mail').innerHTML="Mail is invalid"
    document.getElementById('mail').style.display = 'block';
    document.getElementById('mail').style.color = 'red';

    }
    else
     {
       document.getElementById('mail').innerHTML=""
       document.getElementById('mail').style.display = '';
       document.getElementById('mail').style.color = '';

    }
}
//DOB
function validateDob()
{
   dateofbirth = document.getElementById('date').value;
  if(dateofbirth == ""){
   document.getElementById('dob').innerHTML="Birthdate is missing"
   document.getElementById('dob').style.display = 'block';
   document.getElementById('dob').style.color = 'red';
 }else{
   document.getElementById('dob').innerHTML=" "
   document.getElementById('dob').style.display = '';
   document.getElementById('dob').style.color = '';
 }
}


//mobile
function validateMobile() {
   Telephone = document.getElementById('tel').value;
  if (Telephone == "" || Telephone == null ||  Telephone.length!= 10  || Telephone == undefined || isNaN(Telephone) ) {
    document.getElementById('telspan').innerHTML = "Number must be 10 digits"
    document.getElementById('telspan').style.display = 'block';
    document.getElementById('telspan').style.color = 'red';
  } else {
    document.getElementById('telspan').innerHTML = "";
    document.getElementById('telspan').style.display = 'none';
  }
}

//password
function validatePass() {
   password = document.getElementById('pass').value;

  if (password == "" || password == undefined || password.length <=6) {
    document.getElementById('passpan').innerHTML = "password must be large"
    document.getElementById('passpan').style.display = 'block';
    document.getElementById('passpan').style.color = 'red';
  }
  else{
    document.getElementById('passpan').innerHTML = " "
    document.getElementById('passpan').style.display = '';
    document.getElementById('passpan').style.color = '';
  }
}

//confrim cpassword
function validateCpass(){
  var cpassword = document.getElementById('cpass').value;
  if (cpassword != password) {
    document.getElementById('cpasspan').innerHTML = "Confirm the same password"
    document.getElementById('cpasspan').style.display = 'block';
    document.getElementById('cpasspan').style.color = 'red';
  }
  else{
    document.getElementById('cpasspan').innerHTML = ""
    document.getElementById('cpasspan').style.display = '';
    document.getElementById('cpasspan').style.color = '';
  }
}

function validateGender() {

      var gen = document.getElementsByName('gender')
      for (i = 0; i < gen.length; i++) {
        if (gen[i].checked)
          document.getElementById("Gender").innerHTML = gen[i].value;
      }

}
//Vehcile check list
function validateCheck() {
   selected = new Array();

  var checklists = document.getElementById("checktd");

  var chks = checklists.getElementsByTagName("input");
  for (var i = 0; i < chks.length; i++) {
          if (chks[i].checked) {
              selected.push(chks[i].value);

          }
      }
      if(selected.length > 0)
          document.getElementById('Vehicle').innerHTML = selected
      else
        alert("please select atleast one vehicle type")
    }


//Country
 function validateCountry() {
    Country1 = document.getElementById('country')

 }
//text description
 function validateDesc() {
   var text = document.getElementById('text').value
   if(text.length<1)  {
     alert ("add some description");
   }
   else {
     document.getElementById('description').innerHTML = text

   }
 }


// File validation
// function validateFile() {
//   var file = document.getElementById('File').value
//     const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
//
//     if (acceptedImageTypes.includes(file['type'])) {
//       document.getElementById('filespan').innerHTML = ""
//       document.getElementById('filespan').style.display = '';
//       document.getElementById('filespan').style.color = '';
//     }
//     else{
//       document.getElementById('filespan').innerHTML = "upload a valid file"
//       document.getElementById('filespan').style.display = 'block';
//       document.getElementById('filespan').style.color = 'red';
//     }
// }

// file validation
var fileInput = '';
var filePath = '';
function fileValidation(){
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        //alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
       document.getElementById('imagePreview').innerHTML = "upload a valid file"
       document.getElementById('imagePreview').style.display = 'block';
       document.getElementById('imagePreview').style.color = 'red';
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        document.getElementById('imagePreview').innerHTML = ""
             document.getElementById('imagePreview').style.display = '';
              document.getElementById('imagePreview').style.color = '';
            }
              if (fileInput.files && fileInput.files[0]) {

      var reader = new FileReader();
      reader.onload = function(e) {

         document.getElementById('Imagefile').innerHTML = '<img class="img" src="'+e.target.result+'"/>';

      };
     reader.readAsDataURL(fileInput.files[0]);
  }

    }





  function validateForm() {

    confirm("Do You want to Submit");
    
    document.getElementById('Fname').innerHTML = firstName;
    document.getElementById('Lname').innerHTML = lastName;
document.getElementById('Mail').innerHTML=document.getElementById('email').value;
document.getElementById('DOB').innerHTML=document.getElementById('date').value;
document.getElementById('Tel').innerHTML = Telephone;
document.getElementById('Country').innerHTML = Country1.options[Country1.selectedIndex].value;


  }
