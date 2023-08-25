$(window).load(function(){
			
			
			
			
					   
		 TimerInitialize();
						  
	
	window.h = $(window).innerHeight();
	window.width1 = $(window).width();
	window.w_Set = $(window).innerWidth();
	window.h_Set = $(window).innerHeight();




var orientationis  = screen.orientation.type ;
		
		
		if(orientationis=="portrait-primary"){
				$(".InputNdDone").css("margin-left","0%")
				
				$(".ques_width").css({"margin-left":"1%","width":"97%"})
			
			}
		



         // $(".footer").css({"display":"none","height":"0px"});
							
				window.headerHeight = $(".header").innerHeight();
				window.headerMarginTop = $(".header").css("margin-top")
				headerMarginTop = parseInt(headerMarginTop)
				window.footerHeight = $(".footer").innerHeight();
			//	alert(footerHeight)
				window.footerMarginTop = $(".footer").css("margin-top")
				
				footerMarginTop = parseInt(footerMarginTop)
					//alert(footerMarginTop)
				window.containerMarginTop = $(".container").css("margin-top")
				containerMarginTop = parseInt(containerMarginTop)
				window.containerfluidHeight = $(".container-fluid").innerHeight();
				window.containerHeight = containerfluidHeight-(footerHeight+headerMarginTop+containerMarginTop+footerMarginTop+2)
				
				//alert(containerHeight)
				window.quesPartHeight = $(".quesPart").innerHeight();
				window.SolutionPartHeight = containerHeight-(quesPartHeight+5)
				window.textfont = $(".quesvalues").css("font-size");
				$('input[type="text"]').css("font-size",textfont);
				
				
				
				window.containerfluidWidtht = $(".container-fluid").innerWidth();
				window.containerHeaderQuesWidtht = $(".containerHeaderQues").innerWidth();
				
				
				window.AreaLeft = Number(Number(containerfluidWidtht) - Number(containerHeaderQuesWidtht))/2  			
				
				
				$(".LeftSpace,.RightSpace").css({"width":AreaLeft+"px","height":containerfluidHeight+"px","background-size":"cover","-webkit-filter":"blur(2px)","-moz-filter":"blur(2px)","-ms-filter":"blur(2px)","-o-filter":"blur(2px)","filter":"blur(2px)"})
				
/*var img = document.createElement("img");
img.src = "image/background.png";
var src = document.getElementById("BgImage");
src.appendChild(img);*/



	
	
	
				
				/*<!--$(".ForBlurEffect").css({"background-size":"cover","-webkit-filter":"blur(5px)","-moz-filter":"blur(5px)","-ms-filter":"blur(5px)","-o-filter":"blur(5px)","filter":"blur(5px)"});-->*/
				

setTimeout(function(){
					$(".Handcursor").hide();
					},1400);		

	
	//alert(whatGrade)
	
	if(whatGrade == 1){
	
	
  	//$('.container-fluid').prepend('<img class="background" src="https://www.educosoft.com/sharedSite/HTML5Common/BGImages/EngBG1.png" />')
	
	
	  	$('.container-fluid').css('background-image','url("https://www.educosoft.com/sharedSite/HTML5Common/BGImages/EngBG1.png")')

	}else if(whatGrade == 2){
	
	
  	$('.container-fluid').css('background-image','url("https://www.educosoft.com/sharedSite/HTML5Common/BGImages/EngBG2.png")')
	
	}else if(whatGrade == 3){
	
	
  	$('.container-fluid').css('background-image','url("https://www.educosoft.com/sharedSite/HTML5Common/BGImages/EngBG3.png")')
	
	}else if(whatGrade == 4){
	
	
  	$('.container-fluid').css('background-image','url("https://www.educosoft.com/sharedSite/HTML5Common/BGImages/EngBG4.png")')
	
	}else if(whatGrade == 5){
	
	
  	$('.container-fluid').css('background-image','url("https://www.educosoft.com/sharedSite/HTML5Common/BGImages/EngBG5.png")')
	
	}


	
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.checkMobile = isMobileDevice();		
				



 		
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/							
				$(".print,.autorun").css("width",footerHeight+"px");
				$(".print,.autorun").css("height",footerHeight+"px");
				window.textFontSize = $(".container-fluid").css("font-size");
				$(".input").css("font-size",textFontSize);
				
				window.textupdated = parseInt(textFontSize)*.85;
				
				$(".done,.newSet,.solution,.clear").css("font-size",textupdated-1+"px")
 				$(".button,.keypadNote").css("font-size",textupdated-3+"px");
				

			$(".input").keydown(function(e){if( e.which==13){window.promptDisplay = $(".prompt,.prompt_New").css("display")
		 
		if(promptDisplay != "none"||promptDisplay != "block")
		{
			
			$(".prompt,.prompt_New").delay(2500).hide(0);	
		}}});

$(".done").click(function(){
 
		window.promptDisplay = $(".prompt,.prompt_New").css("display")
		 
		if(promptDisplay != "none"||promptDisplay != "block")
		{
			
			$(".prompt,.prompt_New").delay(2500).hide(0);	
		}

	});

 
 
  if(checkMobile){
 	 
			 $(".ForPortMode").show().css({"display":"inline-block"});
			 $(".containerRight").hide();
			 $(".containerLeft").css({"width":"100%"});
			 $(".input").css("border","1px solid black");
			 $('input[type="text"], textarea').each(function(){
 			 $(this).attr('readonly','readonly');}); 
			
			}else{
				
			$(".Desktop").show();
 			$(".containerLeft").css({"width":"100%"});
			
			}
 
  
 
 PromptWidth = $(".prompt").width();
 solutionBoxWidth = $(".SolutionPart").width();
 marginLeft = (solutionBoxWidth-PromptWidth)/2;
 $(".prompt").css("margin-left",marginLeft+"px");
 
 
 PromptHeight = $(".prompt").height();
 solutionBoxHeight = $(".SolutionPart").height();
 marginTop = (solutionBoxHeight-PromptHeight)/4;
 $(".prompt").css("margin-top",marginTop+"px");

 $(".newSet").val("New Version")
 $(".header").css("visibility","hidden");
 //$(".footer h5").html("Copyright @ 2019, Educo International, Inc.");
 
 	window.CommonAreaQuesNdKeypad = $(".CommonAreaQuesNdKeypad").innerHeight();
	//alert(containerfluidHeight-(CommonAreaQuesNdKeypad+footerHeight))
//	$(".SolutionPart").css("height",containerHeight-(CommonAreaQuesNdKeypad+footerHeight)+"px");
	
	//alert(containerfluidHeight+" ==containerfluidHeight||footerHeight== "+footerHeight);

          var new_containerfluidHeight = Number(containerfluidHeight)-Number(containerHeight)


 $(".containerLeft").css("height",containerHeight+(new_containerfluidHeight)+"px")
 
//	$(".SolutionPart").css("height",containerfluidHeight-(CommonAreaQuesNdKeypad+footerHeight)+"px");
 
 $(".solution").click(function(){
							$(".SolutionPart").css("display","block")		
									
									})

 
 $(".SolutionPartContent").css("display","inline-block")

					var ht = $(".containerLeft").innerHeight();
					var ht1 = $(".CommonAreaQuesNdKeypad").innerHeight();
						//var ht1 = $(".SolutionPart").height();
					
					var ht2 = $(".SolutionPartContent").innerHeight();
					var ht3   = $(".instruction").innerHeight();
					
					
					//alert(ht1+" "+ht2)
					var Spartheight = (Number(ht2)+20)
					
					$(".SolutionPart").css("height",Spartheight)
					
									
 
 
                 var marginForHeader = Number(ht)-(Number(ht1)+ Number(Spartheight)+Number(ht3)+20)
 
                     marginForHeader = marginForHeader/2;
 	if(marginForHeader>0){			 
 			$(".instruction").css("margin-top",marginForHeader+"px")
		}else{
			$(".instruction").css("margin-top",1+"px")
			
			var hs = Number(ht1)+Number(ht3)+Spartheight+10;
			var ht = Number(ht)
			
			if(hs>ht){
			var cal = 	hs - ht;
				
			Spartheight = Spartheight-cal;	
				
			$(".SolutionPart").css("height",Spartheight)	
				
				}
		}
 
$(".SolutionPartContent,.SolutionPart").hide()
 
 
 
 
/*					var ht = $(".containerLeft").height();
					var ht1 = $(".CommonAreaQuesNdKeypad").height();
						//var ht1 = $(".SolutionPart").height();
					
					var ht2 = $(".SolutionPartContent").height();
					var ht3   = $(".instruction").height();
					
					var Spartheight = (Number(ht2)+10)
					
					$(".SolutionPart").css("height",Spartheight)
					
									
 
 
                 var marginForHeader = Number(ht)-(Number(ht1)+ Number(Spartheight)+Number(ht3)+10)
 
                     marginForHeader = marginForHeader/2;
 	$(".instruction").css("margin-top",marginForHeader+"px")
 
$(".SolutionPartContent,.SolutionPart").hide()

*/ 
 

 
 
						   });

