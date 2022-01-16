 webiopi().ready(function() {
        		webiopi().setFunction(17,"out");
        		webiopi().setFunction(18,"out");
        		webiopi().setFunction(22,"out");
        		webiopi().setFunction(23,"out");
    
        		
        		var content, button;
        		content = $("#content");
        		
        		button = webiopi().createGPIOButton(17,"Relay 1");
        		content.append(button);
        		
        		button = webiopi().createGPIOButton(18,"Relay 2");
        		content.append(button);
        		
        		button = webiopi().createGPIOButton(22,"Relay 3");
        		content.append(button);
        		
        		button = webiopi().createGPIOButton(23,"Relay 4");
        		content.append(button);
        		
        	
        		
        });