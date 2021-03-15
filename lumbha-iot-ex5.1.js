$('#toggle').click(function(e){
                    
        pubmsg = { "req" : "toggle" };
                    
        pubnub.publish(
                    
                { 
                        channel : 'gpio-raspberry-control' ,
                        message :  pubmsg
                            
                }
                        
        );
                
});
