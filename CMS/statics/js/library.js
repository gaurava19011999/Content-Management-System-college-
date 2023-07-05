$ = function(id) {
  return document.getElementById(id);
}


var show = function(id) {
  if(id == 'main'){
      $('addBook').style.display = 'none';
      $('returnBook').style.display = 'none';
      $('issueBook').style.display = 'none';
    }
    else if(id == 'addBook'){
      $('main').style.display = 'none';
      $('returnBook').style.display = 'none';
      $('issueBook').style.display = 'none';
    }
    else if(id == 'returnBook'){
      $('main').style.display = 'none';
      $('addBook').style.display = 'none';
      $('issueBook').style.display = 'none';
    }
    else if(id == 'issueBook'){
      $('main').style.display = 'none';
      $('addBook').style.display = 'none';
      $('returnBook').style.display = 'none';
    }
    $(id).style.display ='block';
}
var hide = function(id) {
    $(id).style.display ='none';
}


// $(window).on("load resize ", function() {
// var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
// $('.tbl-header').css({'padding-right':scrollWidth});
// }).resize();

// $(document).on('submit', '#postform', function(e){
//     e.preventDefault();
//     console.log("hello")
//     var book_name = $('#book-name').val()
//     var publisher = $('#publisher').val()
//     var author = $('#author').val()
//     var writer = $('#writer').val()
//     var department = $('#department').val()
//     var quantity = $('#quantity').val()
//     $.ajax({
//         type: 'POST',
//         url: '/account/addbook/',
//         data: {
//             book_name : book_name,
//             publisher : publisher,
//             author: author,
//             writer: writer,
//             department: department,
//             quantity: quantity,
//             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
//         },
//         success: function(response) {
//             console.log(response)
//             //alert(data)
//         }
//     });
//     // document.getElementById('book-name').value = ''
//     // document.getElementById('publisher').value = ''
//     // document.getElementById('author').value = ''
//     // document.getElementById('writer').value = ''
//     // document.getElementById('quantity').value = ''

// });


// $(document).ready(function() {

//     setInterval(function() {
//         $.ajax({
//             type: 'GET',
//             url: "{% url 'admin_login' %}",
//             success: function(response) {
//                 console.log(response);
//                 $("#display").empty();
//                 for (var key in response.data) {
//                     var temp = "<div class='table-div'><div><h1>" + response.data[key].book_name + "</div></h1><div><h1>" + response.data[key].author + "</div></h1><div><h1>"+ response.data[key].quantity+"</div></h1></div>";
//                     $("#display").append(temp);
//                 }
//             },
//             error: function(response) {
//                 alert('An error occured')
//             }
//         }); 
//     }, 1000);
// })
