$(document).ready(function(){
						   
		window.h = $(window).innerHeight();
		window.width1 = $(window).width();
		window.w_Set = $(window).innerWidth();
		window.h_Set = $(window).innerHeight();
		window.ClickToAnsDiv = 0;
		window.ForSolutionShow = 0;
		window.calc_btnHeight = $(".KeyPadKeyDevice").innerHeight();
		$(".keypadKeys").css("padding-bottom",calc_btnHeight/2+"px")
		window.howTo_button = 0;
		$(".howTo_div").show();	
		window.content_height = .81*h;
		window.header_height = .07*h;
		window.footer_height = .1*h;
		
			///////////////new code////////////////
			 $(".Copyright").html("Copyright © 2005 – 2021 Educo Int. Inc.")
			///////////////new code////////////////
		
				
					/*	var spaceBarShowIs = typeof spaceBarShow;
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
		$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");
		$(".print,.autorun").css("width",footerHeight+"px");
		$(".print,.autorun").css("height",footerHeight+"px");
		window.textFontSize = $(".question").css("font-size");
		$(".input").css("font-size",textFontSize);
	
	
	function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.checkMobile=isMobileDevice();				
				
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/							
							
$(".done1,.SpaceBarButton").css({"-webkit-border-radius": "5px","-moz-border-radius": "5px","border-radius": "5px","-webkit-transform": "rotateX(20deg)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image":" -webkit-gradient(linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)", "filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')", /* IE6 & IE7 */
    "-ms-filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')"});				
							
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/		
   
 $(".ClickToAnsDiv,.AreaForKeypadAndInputInDevice").hide();
window.OrientationPort	= window.orientation;


  if(checkMobile){
	 
$(".AreaForKeypadAndInputInDevice").show();
	 ClickToAnsDiv = 1; 
	 	$(".ClickToAnsDiv").css({"color":"#c00"});
 							$(".ClickToAnsDiv").show();
  							$(".section4,.RootInfo").hide();//inputAndDoneSpace removed
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
 if(checkMobile){
	  	$(".howTo_div").hide();	
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
			$(".solution").click(function(){                                                                                                                                                               
			ClickToAnsDiv = 0;
			ForSolutionShow = 1;		
			howTo_button = 0;

$(".RootInfo").hide();
		$(".solutionContainer").hide();
	    $(".solutionContainer").fadeIn();
$(".AreaForKeypadAndInputInDevice").hide();
$(".ClickToAnsDiv").css({"color":"#000"});
});
 
$(".newSet").click(function(){
						$(".AreaForKeypadAndInputInDevice").hide();
						 ClickToAnsDiv = 0; 
						if((String(navigator.userAgent).indexOf("Mobile") != -1 )){
 						$(".RootInfo").hide();
						$(".AreaForKeypadAndInputInDevice").show();
						 ClickToAnsDiv = 1; 
						 $(".ClickToAnsDiv").css({"color":"#c00"});
						}else{
							$(".RootInfo").show();
							}
						
	howTo_button = 0;					
 						
						});
$(".squareRoot").click(function(){$(".RootInfo").show();});
$(".ClickToAnsDiv").click(function(){
							 
						    window.deleteHeight = $(".KeyPadKeyDevice").css("height");
							window.deletefont = $(".KeyPadKeyDevice").css("font-size");
							
							deleteHeight = parseInt(deleteHeight);
								   
								  	$(".howTo_div").hide();	
										howTo_button = 0;
										
							    if(ClickToAnsDiv==1 && ForSolutionShow == 1){
									  ClickToAnsDiv = 0;
								   	$(".AreaForKeypadAndInputInDevice").hide();
									$(".solutionContainer").show();
									$(".ClickToAnsDiv").css({"color":"black"});
									$(".input1").focus();	
								  }else  if(ClickToAnsDiv==0){
									  ClickToAnsDiv = 1;
								   	$(".AreaForKeypadAndInputInDevice").show();
									$(".solutionContainer").hide();//howTo added
									$(".ClickToAnsDiv").css({"color":"#c00"});
									$(".input1").focus()	
								  }else{
									  ClickToAnsDiv = 0;
									   	$(".AreaForKeypadAndInputInDevice").hide();
										$(".ClickToAnsDiv").css({"color":"black"});
									  
								  }
								  
								window.deletewidth= $(".keypadKeysDevice .ThreeCommonBtns").width();
								DeviceCont = $(".container").height();
								DeviceKeypadArea = $(".AreaForKeypadAndInputInDevice").height();
								DeviceKeypadHeight = $(".KeyPadKeyBoundaryDevice").height();

						 
							
							
							if(DeviceCont<DeviceKeypadArea){
 								DeviceKeypadArea = DeviceKeypadArea-DeviceKeypadHeight;
								$(".AreaForKeypadAndInputInDevice").css({"height":DeviceKeypadArea+"px"});
 								$(".inputAndDoneSpaceFordevice").css({"height":DeviceKeypadArea +"px"});
								
								}else{
									 
									 if (window.innerHeight > window.innerWidth) {
									 
									$(".inputAndDoneSpaceFordevice").css({"height":DeviceKeypadArea-150+"px"});
									
									 }else{
										$(".inputAndDoneSpaceFordevice").css({"height":"auto"});
										
									 }
									 
									 
								}

								});


                    
			  
				       $(".howTo_button").click(function(){
								
									howTo_button++;		
												 
						  ClickToAnsDiv = 0;
							$(".ClickToAnsDiv").css({"color":"black"});
							$(".AreaForKeypadAndInputInDevice").hide();
							$(".howTo_div").toggle();						   
							$(".solutionContainer").toggle()						   
									
							if(ForSolutionShow==1 && howTo_button==1){
								$(".solutionContainer").hide();
								}if(ForSolutionShow==1 && howTo_button==2){
									
									$(".solutionContainer").show();
									
									howTo_button = 0;
									}		
												   }); 
				
				 $(".step_cross_img").click(function(){
						  ClickToAnsDiv = 0;	
								$(".ClickToAnsDiv").css({"color":"black"});
								$(".howTo_div").hide();	
								$(".solutionContainer").show()
							if(ForSolutionShow==1){
								$(".solutionContainer").show();
								howTo_button=0;
								}					   
												   
												   }) 





KeypadBoundaryWidth = $(".KeypadBoundary").width();
KeypadBoundaryWidthDevice = $(".AreaForKeypadAndInputInDevice").width();
 
$(".RootInfo").css({"width":KeypadBoundaryWidth+8+"px"});
$(".RootInfoDevice").css({"width":KeypadBoundaryWidthDevice-17+"px"});


 
if(checkMobile){if (window.innerHeight < window.innerWidth || OrientationPort === 90 || OrientationPort === -90) {$(".RootInfoDevice").css({"width":KeypadBoundaryWidthDevice-25+"px"});}}
   
					
$(".print").click(function(){

			 window.print();

							});


$(".done1,.doneDiv").click(function(){

		window.promptDisplay = $(".prompt,.prompt_New").css("display")
		 
		if(promptDisplay != "none"||promptDisplay != "block")
		{
			
			$(".prompt,.prompt_New").delay(2500).hide(0);	
		}

	});


                 headerHeight = $(".header").innerHeight();
				$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");



}); 

