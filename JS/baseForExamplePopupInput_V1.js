$(document).ready(function(){
		
		window.checkSpace=false;	
		window.h = $(window).innerHeight();
		window.width1 = $(window).width();
		window.w_Set = $(window).innerWidth();
		window.h_Set = $(window).innerHeight();
		window.ClickToAnsDiv = 1;
		window.ForSolutionShow = 0;
		window.imgTabDeviceHeight = $(".imgTabDevice").innerHeight(); 
		window.calc_btnHeight = $(".calc_btn").innerHeight(); 
		window.keypadKeysPb = $(".keypadKeys").css("padding-bottom"); 
		window.newpaddingBottom = parseInt(keypadKeysPb)+(parseInt(imgTabDeviceHeight)-parseInt(calc_btnHeight))/2;
		$(".keypadKeys").css("padding-bottom",newpaddingBottom+"px");
		$(".OuterDivForInputAndRadio,.OuterDivForInputAndRadioForDevice").hide();
 		window.content_height = .81*h;
		window.header_height = .07*h;
		window.footer_height = .1*h;
		
				///////////////new code////////////////
			 $(".Copyright").html("Copyright © 2005 – 2021 Educo Int. Inc.")
			///////////////new code////////////////
	
		
				/*
						var spaceBarShowIs = typeof spaceBarShow;
						var SpaceBarDiv = $(".footer").height()
						SpaceBarDiv = parseInt(SpaceBarDiv);
						if(spaceBarShowIs=="undefined"){
						$(".footer").attr("id","footerID")
						$(".footer").css("height",0+"px");
						}else{
						$(".footer").css("height",SpaceBarDiv+"px");		
							}

		*/
		
		
		window.headerHeight = $(".header").innerHeight();
		window.footerHeight = $(".footer").innerHeight();
		window.containerfluidHeight = $(".container-fluid").innerHeight();
 		$(".print,.autorun").css("width",footerHeight+"px");
		$(".print,.autorun").css("height",footerHeight+"px");
		window.textFontSize = $(".question").css("font-size");
		$(".input").css("font-size",textFontSize);
		$(".ClickToAnsDiv").css("cursor","pointer");
				
				
			function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.checkMobile=isMobileDevice();		
				
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/							
							
							
$(".done1,.SpaceBarButton").css({"-webkit-border-radius": "5px","-moz-border-radius": "5px","border-radius": "5px","-webkit-transform": "rotateX(20deg)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image":" -webkit-gradient(linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)", "filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')", /* IE6 & IE7 */
    "-ms-filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')"});				
							
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/		
						   

  
$(".AreaForKeypadAndInputInDevice,.KeyPadKeyBoundaryDevice,.inputAndDoneSpace,.ClickToAnsDivForDeviceOnPopupInputs").hide();


window.OrientationPort	= window.orientation;
  
 if(checkMobile){
						  //alert("in mobile")
							$(".ClickToAnsDiv,.KeyPadKeyBoundaryDevice,.ClickToAnsDiv").show();
  							$(".section4,.inputAndDoneSpace").hide();
							$(".new_h").css("width","100%");
							
							
	if (window.innerHeight > window.innerWidth || OrientationPort === 0 || OrientationPort === 180) {
			
			$(".warning").hide();
			$(".container-fluid").show();
			
			
			
			
		}else{
			
			$(".warning").show();
			$(".container-fluid").hide();
			$(".orient").css({"width":100+"%","height":97+"%"});
			$(".OrientImage").css({"width":w_Set*.6+"px","margin-left":20+"%","height":h+"px"});
		}						
							
							
  						var userAgent = navigator.userAgent.toLowerCase();
						const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
						
						if(isTablet)
						{
							 
							
							$(".warning").hide();
							$(".container-fluid").show();
						}
						
 }
 if(checkMobile ){
	 
	 $('input[type="text"], textarea').each(function(){
     $(this).attr('readonly','readonly');
}); 
	 
 }

 PromptWidth = $(".blankMessage").width();
 solutionBoxWidth = $(".container").width();
 marginLeft = (solutionBoxWidth-PromptWidth)/2;
 $(".blankMessage").css("margin-left",marginLeft+"px");
 
 
 PromptHeight = $(".blankMessage").height();
 solutionBoxHeight = $(".container").height();
 marginTop = (solutionBoxHeight-PromptHeight)/2;
 $(".blankMessage").css("margin-top",marginTop+"px");
 
 
$(".solution").click(function(){ checkSpace=false;  ClickToAnsDiv = 0;                                                                 
  			ForSolutionShow = 1;	
   
  	
$(".solutionContainer").hide();
$(".solutionContainer").fadeIn(); 
$(".AreaForKeypadAndInputInDevice").hide();
$(".ClickToAnsDiv").css({"color":"#000"});

});


$(".newSet").click(function(){
				checkSpace=false;				 
					$(".prompt_New").hide();
						
						if(checkMobile){
					 
						$(".RootInfo").hide();
						
						}else{
							$(".RootInfo").show();
							}
						ClickToAnsDiv = 1;
						$(".AreaForKeypadAndInputInDevice,.OuterDivForInputAndRadio").show();
  						});

 

 if(checkMobile ){
	 

$(".AreaForKeypadAndInputInDevice,.OuterDivForInputAndRadio").show();
window.deleteHeight = $(".KeyPadKeyDevice").css("height");
window.deletefont = $(".KeyPadKeyDevice").css("font-size");
deleteHeight = parseInt(deleteHeight);
$(".done1,.input").css("height",deleteHeight+"px");
$(".done1").css("font-size",deletefont*.8);
window.deletewidth= $(".keypadKeysDevice .ThreeCommonBtns").width();
$(".done1").css({"width":deletewidth+"px","height":deleteHeight*1.25+"px"});
$(".ClickToAnsDiv").css({"color":"#c00"});
  
}else{
	
$(".AreaForKeypadAndInputInDevice,.OuterDivForInputAndRadio").show();
window.deleteHeight = $(".KeyPadKeyDevice").css("height");
window.deletefont = $(".KeyPadKeyDevice").css("font-size");
deleteHeight = parseInt(deleteHeight);
$(".done1,.input").css("height",deleteHeight+"px");
$(".done1").css("font-size",deletefont);
window.deletewidth= $(".keypadKeysDevice .ThreeCommonBtns").width();
$(".done1").css({"width":deletewidth*3+"px","height":deleteHeight*1.5+"px"});
$(".ClickToAnsDiv").css({"color":"#c00"});
	
}




$(".ClickToAnsDiv").click(function(){
							 
						    
								   $(".SpaceBarDiv").hide();
								   
							    if(ClickToAnsDiv==1 && ForSolutionShow == 1){
									  ClickToAnsDiv = 0;
								   	$(".AreaForKeypadAndInputInDevice").hide();
									$(".solutionContainer,.SpaceBarDiv").show();
									$(".ClickToAnsDiv").css({"color":"black"});
									$(".input1").focus();	
								  }else  if(ClickToAnsDiv==0){
									  ClickToAnsDiv = 1;
								   	$(".AreaForKeypadAndInputInDevice").show();
									$(".solutionContainer,.SpaceBarDiv").hide();
									$(".ClickToAnsDiv").css({"color":"#c00"});
									$(".input1").focus()	
								  }else{
									  ClickToAnsDiv = 0;
									   	$(".AreaForKeypadAndInputInDevice").hide();
										$(".ClickToAnsDiv").css({"color":"black"});
									  
								  }
								
								
							if(checkMobile){
 								 
								$(".OuterDivForInputAndRadioForDevice").show();
								$(".OuterDivForInputAndRadio").hide();
							}else{$(".OuterDivForInputAndRadio").show();$(".OuterDivForInputAndRadioForDevice").hide();}
							
							
								DeviceCont = $(".container").height();
								DeviceKeypadArea = $(".AreaForKeypadAndInputInDevice").height();
								DeviceKeypadHeight = $(".KeyPadKeyBoundaryDevice").height();

                 if(checkSpace){
							$(".SpaceBarDiv").hide();
							
							}



								});
			  
	
$(".input").keydown(function(e){if( e.which==13){window.promptDisplay = $(".prompt,.prompt_New").css("display")
		 
		if(promptDisplay != "none"||promptDisplay != "block")
		{
			$(".prompt,.prompt_New").delay(2500).hide(0);	
		}}});

$(".done1,.doneDiv").click(function(){
 
		window.promptDisplay = $(".prompt,.prompt_New").css("display")
		 
		if(promptDisplay != "none"||promptDisplay != "block")
		{
			
			$(".prompt,.prompt_New").delay(2500).hide(0);	
		}

	});					
	
$(".print").click(function(){window.print();});

  headerHeight = $(".header").innerHeight();
				 $(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");

}); 

