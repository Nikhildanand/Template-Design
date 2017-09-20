$(document).ready(function() {

	$('#sectionGridThree').children().mouseenter(function() {					//	Mouse on image in section 3
		$(this).find('img').css('opacity','1').css('cursor','pointer');
		$(this).find('div').hide();
	}).mouseleave(function() {
		$(this).find('img').css('opacity','0.8');
		$(this).find('div').show();
	});
	$('#submit').click(function(e){
		e.preventDefault();
		var name=$('#name').val();
		var email=$('#email').val();
		var subject=$('#subject').val();
		var message=$('#message').val();
		if(name!=''&&email!=''&&subject!=''&&message!=''){
			$('#submitName, #submitEmail, #submitSubject, #submitMessage').html('');
			$('#submitted').html('Your data has been submitted.').css('color','#76c38f');
		}
		else{
			if(name==''){
				$('#submitName').html('Please enter your name.');
			}
			else{
				$('#submitName').html('');
			}
			if(email==''){
				$('#submitEmail').html('Please enter your email ID.');
			}
			else{
				$('#submitEmail').html('');
			}
			if(subject==''){
				$('#submitSubject').html('Please enter subject of your email.');
			}
			else{
				$('#submitSubject').html('');
			}
			if(message==''){
				$('#submitMessage').html('Please enter your email content');
			}
			else{
				$('#submitMessage').html('');
			}
		}
	});
});