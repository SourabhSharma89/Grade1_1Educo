$(document).ready(function(){
						   
				window.h = $(window).innerHeight();
				window.width1 = $(window).width();
				window.w_Set = $(window).innerWidth();
				window.h_Set = $(window).innerHeight();
				window.ClickToAnsDiv = 0;
				window.ForSolutionShow = 0;
				window.calc_btnHeight = $(".KeyPadKeyDevice").innerHeight();
				window.calc_btnHeight12 = $(".keypadKeys").innerHeight();
				window.content_height = .81*h;
				window.header_height = .07*h;
				window.footer_height = .1*h;
				window.headerHeight = $(".header").innerHeight();
				window.footerHeight = $(".footer").innerHeight();
				window.containerfluidHeight = $(".container-fluid").innerHeight();
			 
				$(".print,.autorun").css("width",footerHeight-6+"px");
				$(".print,.autorun").css("height",footerHeight-6+"px");
				window.textFontSize = $(".question").css("font-size");
				$(".input").css("font-size",textFontSize);
				window.Printvariable = 0;
		 
 				
				$(".keypadKeys").css("pointer-events","auto");	
				
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/							
							
$(".done1,.SpaceBarButton").css({"-webkit-border-radius": "5px","-moz-border-radius": "5px","border-radius": "5px","-webkit-transform": "rotateX(20deg)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image":" -webkit-gradient(linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)", "filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')", /* IE6 & IE7 */
    "-ms-filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')"});				
							
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/	




window.ForDoneCheck = 0
						   $(".input").css("font-weight","Bold");
						   $(".bt_dup").prop('disabled', true);
						   $('.radio').attr('checked', false)
						   $(".input1").focus(); 
						  //alert("ko")
//////////////////////////////////////////////////////////////////////////////////////////////////
						  
						  $(".yes_op,.no_op,.input,.input_tree,.done,.check,.bt,.clear,.delete,.back,.soln,.new_set,.radio").prop('disabled', false);
						  $(".input,.input_tree").val('');
						  $('.drp_dwn').val("0min");
						  $(".input1").focus();
						  $('.checkbox1,.checkbox2,.checkbox3,.checkbox4').removeAttr('checked');
						  $(".t1").css("width", 75 +"%");
						  
 


/////////////////////////////////////////////////////////////////////////////
						  

						   
//////////////////////////////////////////////////////////////////////	   
$(".name,.date").val("");
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
   $(".solution").click(function(){
								
								$(".solutionContainer").hide();
								$(".solutionContainer").fadeIn();
								
								});
  
window.ContRightHeight = $(".container_right").height();
window.ContRightWidth = $(".container_right").width();
window.ContLeftHeight = $(".container_left").height();
window.ContLeftwidth = $(".container_left").width();
$(".whtlyrSolution").css({"height":ContRightHeight+"px","width":ContRightWidth+"%"});
$(".ClickToAnsDiv,.AreaForKeypadAndInputInDevice").hide();

  if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
	 
 							$(".ClickToAnsDiv").show();
  							$(".section4,.inputAndDoneSpace,.RootInfo,.RootInfoA").hide();
							$(".new_h").css("width","100%");
							
		if (window.innerHeight > window.innerWidth){
			
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
						 
					if(isTablet){ 
						$(".warning").hide();
						$(".container-fluid").show();
					}
						
 }
if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
	 $('input[type="text"], textarea').each(function(){
 	 $(this).attr('readonly','readonly');
	 
}); 
	 
 }

 PromptWidth = $(".TosetRemark").width();
 solutionBoxWidth = $(".container").width();
 marginLeft = (solutionBoxWidth-PromptWidth)/2;

 
 PromptHeight = $(".TosetRemark").height();
 solutionBoxHeight = $(".container").height();
 marginTop = (solutionBoxHeight-PromptHeight)/2;
 
 //alert(solutionBoxHeight+" ==solutionBoxHeight||PromptHeight== "+PromptHeight)
 $(".blankMessage,.prompt_done,.no_ans1,.image11,.TimeEndPrompt").css("margin-left",marginLeft*.85+"px");
 $(".blankMessage,.prompt_done,.no_ans1,.image11,.TimeEndPrompt").css("margin-top",marginTop*1.1+"px");
 $(".TosetCross").css("margin-top",marginTop*.06+"px");
 $(".TimeEndPrompt").css("margin-left",marginLeft*.5+"px");
 $(".prompt_done1,.prompt_done").css("margin-left",marginLeft*1+"px");
 $(".image11").css("margin-left",marginLeft*1.05+"px");
 $(".image11").css("margin-top",marginTop*1.8+"px");
 $(".TimeEndPrompt,.prompt_done1,.prompt_done").css("margin-top",marginTop*1.5+"px");
 
 
$(".solution").click(function(){
   ClickToAnsDiv = 0;
   ForSolutionShow = 1;		

$(".RootInfo,.RootInfoA").hide();
	
$(".AreaForKeypadAndInputInDevice").hide();
$(".ClickToAnsDiv").css({"color":"#000"});
});

   

$(".input").keydown(function(e){if( e.which==13){window.promptDisplay = $(".prompt,.prompt_New").css("display")
		 
		if(promptDisplay != "none"||promptDisplay != "block")
		{
			$(".prompt,.prompt_New").delay(2500).hide(0);	
		}}});


	
						   
window.tep=0;
window.timer_over=0;
window.prompt_=[];
window.xx=0;
window.correct=0;
window.score=0;
window.zk=-1
window.kl=-1
window.active_btn=[0,0,0,0,0];
window.akh=1

////////////////////////////////////////////////////////////////////	

$(document).on('keydown', ':tabbable', function (e) {
	 input_val_retrieve()
	 if (e.which == 13  || e.keyCode == 13){   
		for(i=1;i<11;i++){
			i=akh
			if($(".input"+i).val()==""){
				$(".input"+i).focus();
			}
			akh++;
			return false;
		}
	}   
	
});		
	
$(".go").click(function(){
								   
			 nextQuesGeneration();
			
});	
						   
$(".no1").click(function(){
						 $(".yes_op,.no_op,.input,.input_small,.bt,.tab,.delete,.clear,.back,.check,.soln,.done,.new_set, .radio").prop('disabled', false); 
						xx=0;
						timer_over=0;
						$(".prompt_done1").hide();
						/////////////////////////////
						$(".bt,.delete,.clear,.back,.check,.done,.soln,.new_set").css({"cursor":"pointer"}); 
						functionForModes();////Calling function for modes///////
						/////////////////////////////
						 /////////////////
						 ModesEnable();
						 /////////////////
						  $(".calc_btn,.back,.delete,.clear,.tab").css({"cursor":"pointer"}).prop('disabled', false);  
						  $(".time_s1").html("Initial time limit:")
						  $(".text_ts").html("Total time spent:")
});
$(".no").click(function(){
						$(".yes_op,.no_op,.input,.input_tree,.bt,.tab,.delete,.clear,.back,.check,.done,.new_set,.radio").prop('disabled', false); 
						 $(".bt,.delete,.clear,.back,.check,.done,.soln,.new_set").css({"cursor":"pointer"}); 
						 $(".calc_btn,.back,.delete,.clear,.tab").css({"cursor":"pointer"}).prop('disabled', false); 
						/////////////////////////////
							functionForModes();////Calling function for modes///////
						/////////////////////////////
						 /////////////////

						 ModesEnable();
						 /////////////////
						 $(".prompt_done").hide();
						if(xx==1){
						 timer.reset(current_time);
						 timer.start()
						}
						timer.reset(current_time);
						timer.start();

	$('input[type="radio"]').css("pointer-events","auto");
	$('.lable1,.lable2,.lable').css("pointer-events","auto");
	$('.lable1,.lable2,.lable').prop('disabled',false);						
						
});

$(".drp_dwn").click(function(){
							 
					 $(".prompt,.startPrompt").fadeIn();
					//////////////////////////
					 $(".Instruction,.howToDoItInstruction").hide();
					 $(".EJOTY").hide();
					 $(".cross_prompt_").click();
					 $(".whtlyrSolution,.solution").hide();
					 ///////////////////////////
					ScreenDisable();
		 
							   });


$(".yes,.yes1").click(function(){
						 $(".new_set,.soln").prop('disabled', false); 
						 $(".prompt_done,.prompt_done1").hide();
						 $(".start1").css("cursor","pointer").prop("disabled",false);
						 $(".drp_dwn,.drp_dwn1").attr("disabled",false);
						 $(".soln").css("opacity","1").attr("disabled",false);
						 $(".input").css({"cursor":"default"}).prop('disabled', true);
						  $(".bt,.delete,.clear,.back,.check,.done,.soln,.new_set").css({"cursor":"pointer"}); 
						  $(".BackToMainMenu").prop('disabled', false).css({"cursor":"pointer"});
						  
						  /////////////////
						  functionForModesAfterDone();
						  ModesEnable();
						 /////////////////
						  $(".keypadKeys").css("pointer-events","none");
						 $(".TosetRemark").css({"top":containerfluidHeight*.15+"px","left":33+"%"});
			 
						
});
$(".yes").click(function(){
						
						$(".soln").show();
						$(".soln").css("opacity","1").attr("disabled",false);
});



$(".new_set,.dup1_new,.start").click(function(){
												  
 
				$(".calc_btn,.back,.delete,.clear,.tab").css({"cursor":"pointer"}).prop('disabled', false);  
				$(".done").css({"cursor":"pointer"});
				answers_val();
				$(".time_s1").html("Time Limit:&nbsp;");
				$(".text_ts").html("Time Spent:");
				score=0;
				correct=0;
				xx = 0;
				timer_over = 0;
				zk++;
			    nextQuesGeneration(zk);
				
				//timer.reset(0)
			    timer.start()
			    $('.yes_op,.no_op').attr('checked', false)
			    $(".tick,.wrong,.NAIP,.score,.whtlyrSolution,.solution").hide();
			    $(".input").val('');
				$(".yes_op,.no_op,.input,.input_tree,.bt,.tab,.delete,.clear,.back,.check,.done,.new_set,.radio").prop('disabled', false);
				$(".na,.wrong,.tick,.NAIP").hide();
				$(".keypadKeys").css("pointer-events","auto");	
				
$('input[type="radio"]').prop("checked",false)
$('input[type="radio"]').css("pointer-events","auto")
$('.lable,.lable1,.lable2').css("pointer-events","auto")
$('.lable,.lable1,.lable2').prop('disabled',false);
	 			
				
				
});

document.onkeypress = function(e) { 
		   
		if(e.which == 80){$(".Instruction").hide();
			 $(".input").prop('disabled', false);
				 window.print();}
  
};
		
	$(document).on('keydown', function(e) {
    if(e.ctrlKey && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
			e.cancelBubble = true;
			e.preventDefault();
			e.stopImmediatePropagation();
			$(".print").click();
		
    }  
});	
	
	
StartClicked = false;
PracticeClicked = false;
FeedbackClicked = false;
TestClicked = false;													
											
////////////////////////////////////////////////
$(".Practice").click(function(){

					StartClicked = false;
					PracticeClicked = true;
					FeedbackClicked = false;
					TestClicked = false;
					
					$(".Practice").addClass("Practice-clicked");
					$(".Feedback").removeClass("Feedback-clicked");
					$(".Test").removeClass("Test-clicked");
					$(".prompt,.startPrompt").fadeIn();
					//////////////////////////
					 $(".Instruction,.howToDoItInstruction").hide();
					 $(".EJOTY").hide();
					 $(".cross_prompt_").click();
					 ///////////////////////////
					ScreenDisable();
});
///////////////////////////////////////////////						   
$(".Feedback").click(function(){

					StartClicked = false;
					PracticeClicked = false;
					FeedbackClicked = true;
					TestClicked = false;
					
					$(".Feedback").addClass("Feedback-clicked");
					$(".Practice").removeClass("Practice-clicked");
					$(".Test").removeClass("Test-clicked");
					$(".prompt,.startPrompt").fadeIn();
					//////////////////////////
					 $(".Instruction,.howToDoItInstruction").hide();
					 $(".EJOTY").hide();
					 $(".cross_prompt_").click();
					 ///////////////////////////
					ScreenDisable();
});
///////////////////////////////////////////////						   
$(".Test").click(function(){

					StartClicked = false;
					PracticeClicked = false;
					FeedbackClicked = false;
					TestClicked = true;
				
					$(".Test").addClass("Test-clicked");
					$(".Practice").removeClass("Practice-clicked");
					$(".Feedback").removeClass("Feedback-clicked");	
					$(".prompt,.startPrompt").fadeIn();
			//////////////////////////
					$(".EJOTY").hide();
					$(".cross_prompt_").click();
		 ///////////////////////////
					ScreenDisable();
});
	

////////////////////////////Modes Condition///////////////////////////////////////

functionForModes = function(){
 
				if(PracticeClicked) {
					$(".Practice").addClass("Practice-clicked");
					$(".soln").css("opacity","1").attr("disabled",false).css({"cursor":"pointer"});
					$(".check").css("opacity","1").attr("disabled",false).css({"cursor":"pointer"});
					FeedbackClicked = false;
					TestClicked = false;
				 }
				 
				 if(FeedbackClicked) {
					$(".Practice").removeClass("Practice-clicked");
					$(".soln").css("opacity","0").attr("disabled",true).css({"cursor":"default"});
					$(".check").css("opacity","1").attr("disabled",false).css({"cursor":"pointer"});
					PracticeClicked = false;
					TestClicked = false;
				 }
				 
				 if(TestClicked) {
					$(".Practice").removeClass("Practice-clicked");
					$(".check,.soln").css("opacity","0").attr("disabled",true).css({"cursor":"default"});
					PracticeClicked = false;
					FeedbackClicked = false;
				 }
 
				///////////////////////////////////////////////////////////////////////////////////////
				
					$('input[name="selector1"],input[name="selector2"]').prop('disabled',false);
					$(".hndCursor").css({"cursor":"pointer"});
					
 				}
				
////////////////////////////Modes Condition After Done///////////////////////////////////////

functionForModesAfterDone = function(){
 
	//if(StartClicked){
				if(PracticeClicked) {
					$(".Practice").addClass("Practice-clicked");
					$(".check").css("opacity","1").attr("disabled",true).css({"cursor":"default"});
					FeedbackClicked = false;
					TestClicked = false;
				 }
				 
				 if(FeedbackClicked) {
					$(".Practice").removeClass("Practice-clicked");
					$(".check").css("opacity","1").attr("disabled",true).css({"cursor":"default"});
					PracticeClicked = false;
					TestClicked = false;
				 }
				 
				 if(TestClicked) {
					$(".Practice").removeClass("Practice-clicked");
					$(".check").css("opacity","0").attr("disabled",true).css({"cursor":"default"});
					PracticeClicked = false;
					FeedbackClicked = false;
				 }
					 $(".soln,.BackToMainMenu").css("opacity","1").attr("disabled",false).css({"cursor":"pointer"});
					 $(".done").css({"cursor":"default"});
					 $(".whiteLayer").show();
 				///////////////////////////////////////////////////////////////////////////////////////
				
				$('input[name="selector1"],input[name="selector2"]').prop('disabled',true);
				$(".hndCursor").css({"cursor":"default"});
	
}
///////////////////////////////////// Modes Condition/////////////////ScreenDisable/////////////////////////////////////////////////////////////////

ModesDisable = function(){
	$(".Practice,.Feedback,.Test,.start1,.calc_btn").attr("disabled",true).css({"cursor":"default"});
	$(".drp_dwn").attr("disabled",true);
	$('input[name="selector1"],input[name="selector2"]').prop('disabled',true);
	$(".hndCursor").css({"cursor":"default"});
	$(".soln,.BackToMainMenu").css("opacity","1").attr("disabled",false).css({"cursor":"pointer"});
}
//////////////////////////////////////////////////////////Modes Condition////////////////////////////////////////////////////////////////////////
ModesEnable = function(){
	$(".Practice,.Feedback,.Test,.start1,.calc_btn").attr("disabled",false).css({"cursor":"pointer"});
	$(".drp_dwn").attr("disabled",false);
	$(".soln,.BackToMainMenu").css("opacity","1").attr("disabled",false).css({"cursor":"pointer"});
}	

///////////////////////////////////////////////////////////////////////////////////////////////////	
 
window.CheckBoxForm4 = 1;

///////////////////////////////////////////////////////////////////////////////////////////////////	
 
			 

	
$(".start").click(function(){
	
	 
	if(PracticeClicked == false && FeedbackClicked == false && TestClicked == false ){
				 
					 $(".SelectQues").css({"visibility":"visible"});
					 
					 
					 }else{
  	
				$(".Main_Page,.Main_WhiteLayer").hide();	
				$(".container,.header,.footer").css({"background-size":"cover","-webkit-filter":"blur(0px)","-moz-filter":"blur(0px)","-ms-filter":"blur(0px)","-o-filter":"blur(0px)","filter":"blur(0px)"});					   
				StartClicked = true;
				$(".input").css("color","black");
				$(".whiteLayer").hide();
				$('.radio').attr('disabled', false)
				$('.yes_op,.no_op').attr('checked', false)
				$(".calc_btn,.bt,.tab,.delete,.clear,.back,.check,.done,.new_set,.yes_op,.no_op,.soln").attr("disabled",false).css({"cursor":"pointer"});
				$(".soln").css("opacity","1").attr("disabled",false);
				$(".hndCursor").css({"cursor":"pointer"});
				$(".Practice").addClass("Practice-clicked");
				functionForModes();////Calling function for modes///////
				$(".container_left,.container_right").css({"visibility":"visible"});
				$(".Form4").show();				 
			/////////////////////////////////////////////
				score=0;
				correct=0;
				timer.reset(0)
				timer.start()
				
				$('.yes_op,.no_op').attr('checked', false)
				$(".tick,.wrong,.score,.solution,.na,.NAIP").hide();
				$(".input").val('');
				drp_val=$(".drp_dwn option:selected").text();
				if(drp_val!="No limit"){
					$(".time_s_value").html(drp_val)
					$(".time_s").show().css("display", "inline-block");
				}else{
					$(".time_s_value").html(drp_val)
					$(".time_s").hide();
				}	
				$(".timer1,.text_ts").show().css("display", "inline-block");
				if(drp_val=="30 sec"){
					x=30;
					xx=1;
				}else if(drp_val=="1 min"){
					x=60;
					xx=1;
				}else if(drp_val=="2 min"){
					x=120;
					xx=1;
				}else if(drp_val=="3 min"){
					x=180;
					xx=1;
				}else if(drp_val=="4 min"){
					x=240;
					xx=1;
				}else if(drp_val=="5 min"){
					x=300;
					xx=1;
				}else if(drp_val=="No limit"){
					x=1000000000000;
					xx=0;
				} 
					 }
					 
					 
					 
					 if(Printvariable == 1){
						 $(".print").hide();
						 $(".printwithAnswer,.printwithOutAnswer").show();
					 }else{
						 $(".print").show();
						 $(".printwithAnswer,.printwithOutAnswer").hide();	 
							 }
					 
					 
					 
 $(".input1").focus();					 
 });//start	
 
 
$(".new_set").click(function(){
 
				$(".TosetRemark").hide();
				if(drp_val=="No limit"){
					$('.drp_dwn').val("0min");
				}else if(drp_val == "30 sec"){
					$('.drp_dwn').val("30sec");
				}else if(drp_val=="1 min"){
					$('.drp_dwn').val("1min");
				}else if(drp_val=="2 min"){
					$('.drp_dwn').val("2min");
				}else if(drp_val=="3 min"){
					$('.drp_dwn').val("3min");
				}else if(drp_val=="4 min"){
					$('.drp_dwn').val("4min");
				}else if(drp_val=="5 min"){
					$('.drp_dwn').val("5min");
				} 
				/////////////////////////////
				$(".whiteLayer").hide();
				functionForModes();////Calling function for modes///////
				/////////////////////////////
				$(".container_left,.container_right").css({"visibility":"visible"});
})
											
/////////////////////////////////////											
$(".print").click(function(){window.print();});		
$(".check,.custom_sheet,.custom_sheet,.new_set,.done").click(function(){$(".whtlyrSolution,.solution").hide();});	
/////////////////////////////////////////////////////////////////////////////////////////
$(".solution").attr('unselectable','on').css({'user-select':'none','MozUserSelect':'none'}).on('selectstart', false).on('mousedown', false);																	
///////////////////////////////////////////////////////////////////////////////////////// 	
 $(".cross_prompt_").click(function(){								//12th
					$(".remark_pic1,.remark_pic2,.remark_pic3,.remark_pic4,.remark_pic5,.remark_pic6").hide();						  
					$(".new_set").prop('disabled', false); 
					ModesEnable();
									
});	
$(".soln_cross").click(function(){$(".whtlyrSolution,.solution").hide();});
$(".cross_popup").click(function(){
								 timer.stop();
								 $('.radio').attr('disabled', false)
								 $('.yes_op,.no_op').attr('checked', false)
								 $(".pop_up,.uncheck_img").hide();
								 $(".input,.input_tree,.bt,.delete,.clear,.back,.check,.soln,.done,.new_set").prop('disabled', false);
								
});
$(".ForTimeReset").click(function(){
 	$('.drp_dwn').val("0min");
	$(".time_s").hide();
	$(".start").click();
});	
window.ToggglePrintOption=1;
$(".BackToMainMenu").click(function(){
	
StartClicked = false;
PracticeClicked = false;
FeedbackClicked = false;
TestClicked = false;	
  
		ToggglePrintOption=1;
		$(".Main_Page,.Main_WhiteLayer").show();
		$(".SelectQues").css({"visibility":"hidden"});
		$(".yes_op,.no_op,.input,.input_tree,.done,.check,.bt,.clear,.delete,.back,.soln,.new_set,.radio,.calc_btn,.ThreeCommonBtns").prop('disabled', true);
 		$(".input,.input_tree").val('');
		$(".timer1,.text_ts,.time_s,.prompt_done").hide();
		$('.drp_dwn').val("0min");
		Printvariable = 0 
		xx = 0;
		drp_val=$(".drp_dwn option:selected").text();
		timer.stop();
		timer.reset(0);
		timer.start();
		$(".CheckBoxPrint").prop("checked", false)
 		$(".Practice").removeClass("Practice-clicked");
		$(".Feedback").removeClass("Feedback-clicked");
		$(".Test").removeClass("Test-clicked");
		$(".CheckBoxPrint,.Practice,.Feedback,.Test").prop('disabled', false).css("cursor","pointer");
		$(".solution").hide();
 		
 
});		

////////////////////////////////////////For Dragable/////////////////////////////////////////////////////////////////////////// 



$(".CheckBoxPrint").click(function(){ 
ToggglePrintOption++
 
	if(ToggglePrintOption%2==0){
	Printvariable = 1;
	TestClicked = true;
	$(".TosetRemark").hide();
	}else{
		Printvariable = 0;
	TestClicked = false;
	 
	}

});


	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
 					
				$(".draggable").draggable({
										 
						revert: false,
						helper: 'clone',
						start: function(event, ui) {
							
							$(this).fadeTo('fast', 0.5);
						},
						stop: function(event, ui) {
							$(this).fadeTo(0, 1);
						}
    			});

     $(".droppable").droppable({
        drop: function(event, ui) {
			
 			var className = $(this).attr('class');
			
			
			temp_str = String(className).split(" ")
			if(temp_str[0]=="input1")
			{
			var oldval = $(".input1").val();
			}
			if(temp_str[0]=="input2")
			{
			var oldval = $(".input2").val();
			}
			if(temp_str[0]=="input3")
			{
			var oldval = $(".input3").val();
			}
			if(temp_str[0]=="input4")
			{
			var oldval = $(".input4").val();
			}
			if(temp_str[0]=="input5")
			{
			var oldval = $(".input5").val();
			}
			if(temp_str[0]=="input6")
			{
			var oldval = $(".input6").val();
			}
			if(temp_str[0]=="input7")
			{
			var oldval = $(".input7").val();
			}
			if(temp_str[0]=="input8")
			{
			var oldval = $(".input8").val();
			}
			if(temp_str[0]=="input9")
			{
			var oldval = $(".input9").val();
			}
			if(temp_str[0]=="input10")
			{
			var oldval = $(".input10").val();
			}
				if(temp_str[0]=="input11")
			{
			var oldval = $(".input11").val();
			}
			if(temp_str[0]=="input12")
			{
			var oldval = $(".input12").val();
			}
			if(temp_str[0]=="input13")
			{
			var oldval = $(".input13").val();
			}
			if(temp_str[0]=="input14")
			{
			var oldval = $(".input14").val();
			}
			if(temp_str[0]=="input15")
			{
			var oldval = $(".input15").val();
			}
			if(temp_str[0]=="input16")
			{
			var oldval = $(".input16").val();
			}
			if(temp_str[0]=="input17")
			{
			var oldval = $(".input17").val();
			}
			if(temp_str[0]=="input18")
			{
			var oldval = $(".input18").val();
			}
			if(temp_str[0]=="input19")
			{
			var oldval = $(".input19").val();
			}
			if(temp_str[0]=="input20")
			{
			var oldval = $(".input20").val();
			}
			if(temp_str[0]=="input21")
			{
			var oldval = $(".input21").val();
			}
			if(temp_str[0]=="input22")
			{
			var oldval = $(".input22").val();
			}
			if(temp_str[0]=="input23")
			{
			var oldval = $(".input23").val();
			}
			if(temp_str[0]=="input24")
			{
			var oldval = $(".input24").val();
			}
			if(temp_str[0]=="input25")
			{
			var oldval = $(".input25").val();
			}
			if(temp_str[0]=="input26")
			{
			var oldval = $(".input26").val();
			}
			if(temp_str[0]=="input27")
			{
			var oldval = $(".input27").val();
			}
			if(temp_str[0]=="input28")
			{
			var oldval = $(".input28").val();
			}
			if(temp_str[0]=="input29")
			{
			var oldval = $(".input29").val();
			}
			if(temp_str[0]=="input30")
			{
			var oldval = $(".input30").val();
			}
			if(temp_str[0]=="input31")
			{
			var oldval = $(".input31").val();
			}
			if(temp_str[0]=="input32")
			{
			var oldval = $(".input32").val();
			}
			if(temp_str[0]=="input33")
			{
			var oldval = $(".input33").val();
			}
			if(temp_str[0]=="input34")
			{
			var oldval = $(".input34").val();
			}
			if(temp_str[0]=="input35")
			{
			var oldval = $(".input35").val();
			}
			if(temp_str[0]=="input36")
			{
			var oldval = $(".input36").val();
			}
			if(temp_str[0]=="input37")
			{
			var oldval = $(".input37").val();
			}
			if(temp_str[0]=="input38")
			{
			var oldval = $(".input38").val();
			}
			if(temp_str[0]=="input39")
			{
			var oldval = $(".input39").val();
			}
			if(temp_str[0]=="input40")
			{
			var oldval = $(".input40").val();
			}
			if(temp_str[0]=="input41")
			{
			var oldval = $(".input41").val();
			}
			if(temp_str[0]=="input42")
			{
			var oldval = $(".input42").val();
			}
			if(temp_str[0]=="input43")
			{
			var oldval = $(".input43").val();
			}
			if(temp_str[0]=="input44")
			{
			var oldval = $(".input44").val();
			}
			if(temp_str[0]=="input45")
			{
			var oldval = $(".input45").val();
			}
			
			
	
			var val = $("."+temp_str[0]).val();
			
			var disabledvar = $("."+temp_str[0]).prop("disabled");
			
			if(disabledvar==false)
			{
            this.value = $(ui.draggable).text();
			}
			else
			{
				 this.value = val
			}
			
			if(this.value == "×"){
				
				this.value = " × ";
				
				}
			var newval = oldval+""+this.value
			
			$("."+temp_str[0]).val(newval);
			
			if(temp_str[0] == "input1"){
				
				$(".input1").focus();
				
			}
			
			if(temp_str[0] == "input2"){

				
				$(".input2").focus();
				
			}
			
			if(temp_str[0] == "input3"){
				
				$(".input3").focus();
				
			}
			if(temp_str[0] == "input4"){
				
				$(".input4").focus();
				
			}
			if(temp_str[0] == "input5"){
				
				$(".input5").focus();
				
			}
			if(temp_str[0] == "input6"){
				
				$(".input6").focus();
				
			}
			if(temp_str[0] == "input7"){
				
				$(".input7").focus();
				
			}
			if(temp_str[0] == "input8"){
				
				$(".input8").focus();
				
			}
			if(temp_str[0] == "input9"){
				
				$(".input9").focus();
				
			}
			if(temp_str[0] == "input10"){
				
				$(".input10").focus();
				
			}
 			
			
			if(temp_str[0] == "input11"){
				
				$(".input11").focus();
				
			}
			if(temp_str[0] == "input12"){
				
				$(".input12").focus();
				
			}
			if(temp_str[0] == "input13"){
				
				$(".input13").focus();
				
			}
			if(temp_str[0] == "input14"){
				
				$(".input14").focus();
				
			}
			if(temp_str[0] == "input15"){
				
				$(".input15").focus();
				
			}
			
			if(temp_str[0] == "input16"){
				
				$(".input16").focus();
				
			}
			if(temp_str[0] == "input17"){
				
				$(".input17").focus();
				
			}
			if(temp_str[0] == "input18"){
				
				$(".input18").focus();
				
			}
 			if(temp_str[0] == "input19"){
				
				$(".input19").focus();
				
			}
			if(temp_str[0] == "input20"){
				
				$(".input20").focus();
				
			}
			if(temp_str[0] == "input21"){
				
				$(".input21").focus();
				
			}
			if(temp_str[0] == "input22"){
				
				$(".input22").focus();
				
			}
			if(temp_str[0] == "input23"){
				
				$(".input23").focus();
				
			}
			if(temp_str[0] == "input24"){
				
				$(".input24").focus();
				
			}
			if(temp_str[0] == "input25"){
				
				$(".input25").focus();
				
			}
			if(temp_str[0] == "input26"){
				
				$(".input26").focus();
				
			}
			if(temp_str[0] == "input27"){
				
				$(".input27").focus();
				
			}
			if(temp_str[0] == "input28"){
				
				$(".input28").focus();
				
			}
			if(temp_str[0] == "input29"){
				
				$(".input29").focus();
				
			}
			if(temp_str[0] == "input30"){
				
				$(".input30").focus();
				
			}
			if(temp_str[0] == "input31"){
				
				$(".input31").focus();
				
			}
			if(temp_str[0] == "input32"){
				
				$(".input32").focus();
				
			}
			if(temp_str[0] == "input33"){
				
				$(".input33").focus();
				
			}
			if(temp_str[0] == "input34"){
				
				$(".input34").focus();
				
			}
			if(temp_str[0] == "input35"){
				
				$(".input35").focus();
				
			}
			if(temp_str[0] == "input36"){
				
				$(".input36").focus();
				
			}
			if(temp_str[0] == "input37"){
				
				$(".input37").focus();
				
			}
			if(temp_str[0] == "input38"){
				
				$(".input38").focus();
				
			}
			if(temp_str[0] == "input39"){
				
				$(".input39").focus();
				
			}
			if(temp_str[0] == "input40"){
				
				$(".input40").focus();
				
			}
			if(temp_str[0] == "input41"){
				
				$(".input41").focus();
				
			}
			if(temp_str[0] == "input42"){
				
				$(".input42").focus();
				
			}
			if(temp_str[0] == "input43"){
				
				$(".input43").focus();
				
			}
			if(temp_str[0] == "input44"){
				
				$(".input44").focus();
				
			}
			if(temp_str[0] == "input45"){
				
				$(".input45").focus();
				
			}
			
			
        }
    });
			 
////////////////////////////////////////For Dragable/////////////////////////////////////////////////////////////////////////// 
						$(".ZtableDivMain").draggable({"containment":'.container-fluid'});
						$(".ZtableDivMain").on('mouseenter mouseup' , function(){
							$(".ZtableDivMain").css("cursor","grab");
						});
						$(".ZtableDivMain").mouseleave(function(){
							$(".ZtableDivMain").css("cursor","default");
						});
						$(".ZtableDivMain").mousedown(function(){
							$(".ZtableDivMain").css("cursor","grabbing");
						});				


$(".wrong,.tick").css({"font-family": "Segoe UI Symbol"});
 	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	 
	
	var MainScreenHei = screen.height;
	var Main_pageHei = $(".Main_Page").height();
	var Main_pageMarginTop = Number(MainScreenHei)-Number(Main_pageHei);
 	
	if((screen.width == 1280) && (screen.height >= 1000)){
		$(".Main_Page").css({"margin-top":Main_pageMarginTop/4+"px"});
		}else if((screen.width == 1280) && (screen.height == 768)){$(".Main_Page").css({"margin-top":3+"%"});
		}else if((screen.width == 1280)){$(".Main_Page").css({"margin-top":Main_pageMarginTop/7+"px"});}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	 			
			headerHeight = $(".header").innerHeight();
			calculatorHeight = $(".calculator").innerHeight();
 			calculatormrgnTop = headerHeight-calculatorHeight;
 			$(".calculator").css("margin-top",calculatormrgnTop+1+"px")
			$(".container,.whtlyrSolution").css("height",containerfluidHeight-(headerHeight+footerHeight+7)+"px");
			window.ContHeight = $(".container").innerHeight();
			$(".solution").css({"top":"0","height":ContHeight-10+"px"});
			

}); 
