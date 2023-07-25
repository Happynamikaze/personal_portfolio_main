// function sendEmail() {

//     let name = $("#name").val();
//     let subject = $("#subject").val();
//     let email = $("#email").val();
//     let message = $("#message").val();

//     let mainBody = "Name: " + name + "<br>Subject: " + subject + "<br>Email: " + email + "<br>Message: " + message;
// }
// Email.send({
//     Host : "#",
//     Username : "#",
//     Password : "#",
//     To : '#',
//     From : '#',
//     Subject : document.querySelector('#subject').value,
//     Body : mainBody
// }).then(
//   message => {
//       if(message == 'OK') {
//           $('.mailSent').addClass('show');
//           $('.mailSent').removeClass('d-none');
//       } else {
//         $('.mailErr').addClass('show');
//         $('.mailErr').removeClass('d-none');
//       }
//   }
// );