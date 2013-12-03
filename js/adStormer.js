$('input').click(function() {
	$(this).css('border', 'none');
});
$('input[id=headline]').click(function() {
	$(this).attr('value', '');
	$(this).keyup(function() {
		var headline_value = $(this).val();
		console.log(headline_value);
		var headline_char_amt = headline_value.length;

		//console.log(headline_char_amt);
		var headline_chars_left = (25 - headline_char_amt);
		console.log(headline_chars_left);
		if(headline_chars_left>0){
			$('#headline_error').html(headline_chars_left + " characters left, choose wisely");
			$('#headline_error').css('color','black');
		}else if(headline_chars_left==0){
			$('#headline_error').html("You have reached the limit");
			$('#headline_error').css('color','red');
		}else{
			$('#headline_error').css('color', 'black');
		};
	});
});
$('input[class=non_headline]').click(function() {
	$(this).attr('value', '');
	$(this).keyup(function() {
		var headline_value = $(this).val();
		console.log(headline_value);
		var headline_char_amt = headline_value.length;

		//console.log(headline_char_amt);
		var headline_chars_left = (35 - headline_char_amt);
		console.log(headline_chars_left);
		if(headline_chars_left>0){
			$('#headline_error').html(headline_chars_left + " characters left, choose wisely");
			$('#headline_error').css('color','black');
		}else if(headline_chars_left==0){
			$('#headline_error').html("You have reached the limit");
			$('#headline_error').css('color','red');
		}else{
			$('#headline_error').css('color', 'black');
		};
	});
});