/**
 * @author fabianmoronzirfas
 */
app.scriptPreferences.version = 6 ;


function makeCharStyles(myDocument,myFont1,myFont2,MyColor1) {
		var myName;
		
		
		try{
	    	myCharacterStyle01 = myDocument.characterStyles.item("text");
	    	//If the style does not exist, trying to get its name will generate an error.
	    	myName = myCharacterStyle01.name;
	    }
	    catch (myError){
	    	//The style did not exist, so create it.
	    	myCharacterStyle01 = myDocument.characterStyles.add({name:"text"});
	    }
	//At this point, the variable myCharacterStyle01 contains a reference to a character 
	//style object, which you can now use to specify formatting.
	//Now make the text look good.
	myCharacterStyle01.fillColor =  myColor1;
	myCharacterStyle01.appliedFont = myFont2;
	myCharacterStyle01.pointSize = 14;
	

//create another characterstyle
	try{
	    	myCharacterStyle02 = myDocument.characterStyles.item("ital");
	    	myName = myCharacterStyle02.name;
	    }
	    catch (myError){
	    	myCharacterStyle02 = myDocument.characterStyles.add({name:"ital"});
	    }
	myCharacterStyle02.fillColor =  myColor1;
	myCharacterStyle02.appliedFont = myFont2;
	myCharacterStyle02.pointSize = 14;


}