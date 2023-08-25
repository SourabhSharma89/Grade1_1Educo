$(window).load(function(){
						
$(".newSet").val("Try Again");					   
$(".background").hide();	

		if (typeof parent.GetQuestionIndex === "function") {    //Check parent function exists or not
        var rowSep = String.fromCharCode(eval('198'));
        var colSep = String.fromCharCode(eval('197'));
        var arrStatus, arrQuesVal;
        var CurrQuesIndex = 0;

        var CurrQuesIndexValue = parent.GetQuestionIndex(); //Get the current question index from parent page

        if (CurrQuesIndexValue != "") { //Check the paren page retuns value exists or not
            arrStatus = CurrQuesIndexValue.split(rowSep);
            CurrQuesIndex = arrStatus[0]; //Split the retuns value for get status or return value (0 or actualindex or -1)
            /****************************************************************
            [0]             : returns when quesion loding first time.
            [Actual Index]  : returns actual index, when questin already opend and index is stored in parent page.
            [-1]            : return when question is answerd, 
            *****************************************************************/

            if (CurrQuesIndex == -1) {
                arrQuesVal = arrStatus[1].split(colSep);    //return user answer when status=-1

                var feed = arrQuesVal[0];
                var ans = arrQuesVal[1];

                setstuValues(ans, feed);
            }
            else {
                setQuesIndex(CurrQuesIndex);                   //Set index verstion for current question

                if (CurrQuesIndex <= 0) {
                    if (typeof parent.SetQuestionIndex === "function") {    //Check parent function exists or not
                        parent.SetQuestionIndex(loadingValues());       //Senf current loaded question index to parent page
                    }
                }
            }
        }
    }
					window.containerfluidHeight = $(".container-fluid").innerHeight();
	   			 	window.CommonAreaQuesNdKeypad = $(".CommonAreaQuesNdKeypad").innerHeight();
					$(".SolutionPart").css("height",containerfluidHeight -(CommonAreaQuesNdKeypad+footerHeight+6)+"px");
					$(".containerLeft").css("height",containerfluidHeight - (footerHeight)+"px");
					
					//$(".background").hide();	
/*					$(".remark").css({"display":"inline-block"});
					$(".RootInfo").css("width","25%");
*/					
				

				
					$(".remark").css({"display":"inline-block"});
					$(".RootInfo").css("width","25%");
					
}); //////end of Main/////////


