pubnub.subscribe({
        channel: 'gpio-raspberry-control',
        message: function(m){
                
	        console.log(m)
	                  
	        if('resp' in m) {
	                     
	                if('on' ==  m['resp']){
	                            
	                        $('#led').removeClass('dim');
	                        $('#led').addClass('glow');
	                            
	                } else {
	                            
	                        $('#led').removeClass('glow');
	                        $('#led').addClass('dim');
	                            
	                }
	                        
	        }
	                
        }
                
});
