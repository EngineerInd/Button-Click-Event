glow = False


#PubNub Channel Subscribe Callback
def gpioCallback(msg,channel):

	global glow

	respstring = ''
	command = msg

	print "Command is : " + str(command)

	if('req' in command):
		if(command['req'] == 'toggle'):

			if(glow):
				glow = False;
				respstring = 'off'
			else:
				glow = True
				respstring = 'on'

			GPIO.output(16, glow)

			respmsg = {"resp" : respstring }
			pubnub.publish(pubnubChannelName, respmsg)
