//$('.GET_BUY').hide();
setTimeout(
    function(){
        $('.GET_BUY').hide();
    }
);
function sendMessage(){
    var name, email, message;

    name = $('#name_client').val();
    email = $('#email_client').val();
    contact = $('#contact_client').val();
    message = $('#message_client').val();

    if (name == '') {
        $('.er_name').text('Enter your full name...');
    }
    if (email == '') {
        $('.er_email').text('Enter your email...');
    }
    if (name != '' && email != '') {
        $('.send_btn').hide();
        setTimeout(
           //send to firebase
           //show success message 
           function(){
            console.log('Send message');
            $('.GET_BUY').hide();
            $('.fg1').hide();
            $('.success_done').show();
            location.reload();
           }
        ,4000);
    }
}

function openGETBUY(){
    $('.GET_BUY').show();
    $('.GET_BUY input').val('');
}
function closeGETBUY(){
    $('.GET_BUY').hide();
    $('.GET_BUY input').val('');
}