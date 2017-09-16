$(document).ready(function() {
	$('.workDiv').mousemove(function() {
		$(this).find('.workOne').hide();
		$(this).css('opacity','1');
	}).mouseout(function(){
		$(this).find('.workOne').show();
		$(this).css('opacity','0.8');
	});
	$('#submit').click(function(e){
		e.preventDefault();
		var name=$('#name').val();
		var email=$('#email').val();
		var subject=$('#subject').val();
		var message=$('#message').val();
		if(name!=''&&email!=''&&subject!=''&&message!=''){
			$('#submitOne, #submitTwo, #submitThree, #submitFour').html('');
			$('#submitFive').html('Your data has been submitted.');
		}
		else{
			if(name==''){
				$('#submitOne').html('Please enter your name.');
			}
			else{
				$('#submitOne').html('');
			}
			if(email==''){
				$('#submitTwo').html('Please enter your email ID.');
			}
			else{
				$('#submitTwo').html('');
			}
			if(subject==''){
				$('#submitThree').html('Please enter subject of your email.');
			}
			else{
				$('#submitThree').html('');
			}
			if(message==''){
				$('#submitFour').html('Please enter your email content');
			}
			else{
				$('#submitFour').html('');
			}
		}
	});
});