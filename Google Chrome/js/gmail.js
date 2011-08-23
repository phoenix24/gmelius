//Gmail Ad Remover by Florian Bersier
(function() { 
chrome.extension.sendRequest({reqtype: 'o'}, function(response) {

//GAD settings
var settings = '<li class="gbmtc"><div class="gbmt gbmh"></div></li><li class="gbkc gbmtc" id="gad-donate"><a target="_blank" class="gbmt" href="https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=d1Ffe9ed33X11fWD7OAf50YB4mIAaJXGUVfzv59bSQHbpxWjMU7Fnqaj3gS&dispatch=5885d80a13c0db1f8e263663d3faee8d1e83f46a36995b3856cef1e18897ad75"><span>Donate &rsaquo;</span></a></li>'+'<li class="gbkc gbmtc" id="gad-faq"><a target="_blank" class="gbmt" href="http://florianbersier.com/gmailadremover/"><span>FAQ + Updates &rsaquo;</span></a></li>';
$('#gb #gbg .gbtc .gbt #gbd5 .gbmc .gbmcc').append(settings);

var css;
//ADS
if (response.o.ads) {
css = "div.dW{padding:5px 4px 5px 4px !important}.vD{background-color:rgb(195,217,255) !important}.A1,.AY{padding-left:7px !important}.Cr{padding-top:5px !important}col.xX{width:68px !important}td.xY{padding-top:4px !important;padding-bottom:4px !important}.ar{margin-top:-1px !important;height:14px !important}.au{padding:0 0 1px 0 !important}.ar,.xS,.xT{overflow:visible !important}[class=\"nJ A2\"]{margin:5px 5px !important;padding:4px 0 4px 28px !important}div.yj{padding-right:8px !important;padding-top:8px !important}.nK{margin-bottom:4px !important}[class=\"nH q0CeU z\"] div.no >[class=\"nH nn\"]{margin-bottom:-4px !important}.ha{margin:12px 5px 10px 10px !important}.hX{margin-top:-1px !important}div.nH.pY,.mq,.mn,.z0DeRc,.iY .Bu:first-child+.Bu,.pY,.nH .u5{display:none !important}.iY{width:100% !important;overflow:hidden !important;}table.iY{display:block}div.HprMsc .gz{margin-left:15px !important}div.HprMsc .mD span{text-decoration:none !important}div.HprMsc .mD img{vertical-align:middle !important;padding-top:3px !important}.mC{background-color:transparent !important}div.ip{margin-top:10px !important}.iq{padding-right:10px !important}.ir{width:100% !important}.Bf .h7 .mD{width:auto !important;height:1.8em !important;line-height:1.9em !important;padding:0 8px !important;border:1px solid #BBB !important;border-left-color:#FFF !important;color:#000 !important}.Bf .h7 .mD span{text-decoration:none !important}.Bf .h7 .gz{margin:5px 0 3px 5px !important}img.GB{border:1px solid black !important;-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.5) !important;-moz-box-shadow:0 2px 4px rgba(0,0,0,0.5) !important;margin-left:12px !important;}.ha{height:35px !important;margin-top:5px !important;}.qp a{text-decoration:none !important;}.qp u,.qp ins {text-decoration:none !important;}.Bu:last-child .pp{margin-left:0px !important}.Bu:last-child .T0{border:0px !important}table.cf tr.yO:hover,table.tlc tr.rr:hover,table.cf tr.zE:hover{background-color:rgb(255,235,134);}table.cf tr.zE:hover,table.tlc tr.ur:hover{background-color:rgb(195,217,255) !important;}";
}

//Chat
if (response.o.chat) {
css += "div[class=\"nH pp T0\"]:nth-child(4) { border:0 !important; }";
css += "div.nH.s { display: none !important }";
css += ".T0, .TZ {border:0 !important; border-top:none}";
css +=".pS.s{display: none !important }";
}

//Footer	
if (response.o.footer) {css += ".nH.l2.ov {visibility:hidden !important;display:none !important}";}

//Enlarge
if (response.o.enlarge) {css += ".Bu:last-child{width:0px !important;margin:0 !important;padding:0 !important;display:none !important;visibility:hidden !important;}";}

//Consider including
if (response.o.consider) {css += ".G32Vlf{display:none !important}";}

//Row Color Picker		
if (response.o.row) {
css += "table.cf tr.yO:hover,table.tlc tr.rr:hover,table.cf tr.zE:hover,table.cf tr.zE:hover,table.tlc tr.ur:hover{background-color:"+response.o.color+" !important}";
}

//Row Default Settings
if (response.o.norow) {
css +="table.cf tr.yO:hover,table.tlc tr.rr:hover,table.cf tr.zE:hover{background-color:inherit !important;}";
css +="table.cf tr.zE:hover,table.tlc tr.ur:hover{background-color:inherit !important;}";	
}

//Search
if (response.o.header){
$('.no:first').hide();
var htmlh = '<li class="gbt"><a class="gbgt spA"><span class="gbtb2"></span>'+'<span class="gbts spSearch" style="margin:0 7px"><span style="font-weight:bold">Search</span> <span class="gbma"></span></span></a></li>';
$('#gb #gbg .gbtc').prepend(htmlh);
$('.spA').hover(function(e){$(this).addClass('gbzt-hvr');},function(){$(this).removeClass('gbzt-hvr');});
$('.spSearch').mousedown(function(){$(this).css('-webkit-user-select', 'none');});
$('.gbtc').delegate('.spSearch', 'click', function(){$('.no:first').show('fast',function(){
$('input:first').val("Search to hide it");
$('input:first').css("opacity","0.6");
});
$('input:first').focus(function() {
$('input:first').val("");$('input:first').css("opacity","1");
});
$('.J-Zh-I-Js-Zq:first').click(function(){$('.no:first').fadeOut(1000,function(){});});
});

}

//Contacts & Tasks		
if (response.o.contact) {
css += "div[class=\"qk\"] > span[class='p9 ou'] {display:none}";
css += "div[class='CX pp'] {display:none}";
css += "div[class='T4 pp'] {visibility:hidden; font-size:1px!important; margin:0 !important; padding:0 !important}";
}

if (response.o.contact) {
css+=".spContact, .spTask{padding: 0px 6px;}";if($(".cM").size()>0){var label="Mail"}else{var label="Contacts"}var html='<li class="gbt"><a class="gbgt spA"><span class="gbtb2"></span>'+'<span class="gbts spContact"><span>'+label+"</span></span></a></li>"+'<li class="gbt"><a class="gbgt spA"><span class="gbtb2"></span>'+'<span class="gbts spTask"><span>Tasks</span></span></a></li>';$("#gb #gbg .gbtc").prepend(html);$(".spA").hover(function(a){$(this).addClass("gbzt-hvr")},function(){$(this).removeClass("gbzt-hvr")});$(".spContact").click(function(){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);if($(".cM").length){$(".spContact").text("Contacts");if($(".is").length){$(".is")[0].dispatchEvent(a)}else{window.location="https://mail.google.com/mail/u/0/?shva=1#inbox"}}else{$(".spContact").text("Mail");var b=$("div.CX.pp div.z9.ou")[0];var c=$("div.qk span.p9.ou#\\:rd")[0];var d=$("div.qk span#\\:rf")[0];if(b){b.dispatchEvent(a)}else if(c){c.dispatchEvent(a)}else if(d){d.dispatchEvent(a)}}});$(".spContact, .spTask").mousedown(function(){$(this).css("-webkit-user-select","none")});
}
	
// Apply CSS
if(typeof GM_addStyle!="undefined"){GM_addStyle(css)}else if(typeof PRO_addStyle!="undefined"){PRO_addStyle(css)}else if(typeof addStyle!="undefined"){addStyle(css)}else{var heads=document.getElementsByTagName("head");if(heads.length>0){var node=document.createElement("style");node.type="text/css";node.appendChild(document.createTextNode(css));heads[0].appendChild(node)}}$(".spTask").click(function(){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);var b=$("div.T4.pp div.T3")[0];var c=$("div.qk span#\\:re")[0];if(b){b.dispatchEvent(a)}else if(c){c.dispatchEvent(a)}})

});//end chrome extension request
})();
