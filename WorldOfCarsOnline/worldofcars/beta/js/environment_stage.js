/* set environment specific variables here */
/* Variables for Site */

// base paths
var PATH				= {};
	PATH.cdn			= 'http://carsstage.dolimg.com/1.0';
	PATH.css			= PATH.cdn +'/css';
	PATH.flv			= PATH.cdn +'/flv';
	PATH.img			= PATH.cdn +'/images';
	PATH.js				= PATH.cdn +'/js';
	PATH.swf			= PATH.cdn +'/swf';
	PATH.xml			= PATH.cdn +'/xml';
	PATH.siteRoot		= '';

// game redirect URLs
var RDR					= {};
	RDR.blog			= 'http://stage.worldofcars.go.com/blog/';
	RDR.dNameSelect		= PATH.siteRoot +'/sponsorship/manage-account/';
	RDR.enterCodes		= PATH.siteRoot +'/';
	RDR.feedback		= PATH.siteRoot +'/help/contact-us/';
	RDR.help			= PATH.siteRoot +'/help/';
	RDR.home			= PATH.siteRoot +'/';
	RDR.parents			= PATH.siteRoot +'/parents/';
	RDR.signUpNow		= PATH.siteRoot +'/sponsorship/';
	RDR.sponsorship		= PATH.siteRoot +'/sponsorship/';
	RDR.openChat            = PATH.siteRoot +'/sponsorship/manage-account/';

/* Variables for MMO */
var mapAssetsBaseUrl = "http://carsstage.dolimg.com/assets/";
var minigameBaseUrl = "http://carsstage.dolimg.com/games/";
var physicsAssetsBaseUrl = "http://carsstage.dolimg.com/assets/track_physics";
var assetsBaseUrl = "http://carsstage.dolimg.com/assets/";
var assetServiceHost = "http://apps.stage.worldofcars.go.com/carsds/messagebroker/amf";
var carsServiceHost = "http://apps.stage.worldofcars.go.com/carsds/messagebroker/amf";
var isoMapServiceHost = "http://apps.stage.worldofcars.go.com/carsds";
var whoAmIGame = "http://apps.stage.worldofcars.go.com/carsds/api/WhoAmIRequest";
var errorReportUrl = "http://stage.worldofcars.go.com/help/contact-us/report-a-bug/";
var live = "true";
var cheats = "true";
var cast = "false";
var swfBaseUrl = "http://carsstage.dolimg.com/";

var isoAssetsRoot = "http://carsstage.dolimg.com";
var checkTestUser = "http://apps.stage.worldofcars.go.com/carsds/api/CheckTestUserRequest";
var DOBCookieTO = "30";
var redeemBetaKey = "http://apps.stage.worldofcars.go.com/carsds/api/RedeemCouponRequest";
var playPageURL = "http://stage.worldofcars.go.com/play.html"
var otpTokenURL = "http://apps.stage.worldofcars.go.com/carsds/api/GenerateTokenRequest";
var otpTokenPort = "2153";
var clientVersion = "0.0.1";
var otpLoginURL = "carsdev.online.disney.com";

//queue
var queueEntranceRequestUrl = "http://apps.stage.worldofcars.go.com/carsds/api/GameEntranceRequest";
var queueStatusRequestUrl = "http://apps.stage.worldofcars.go.com/carsds/api/QueueStatsRequest";

// help URL's
var help_app_url = "http://toolsdev-64.online.disney.com/eventum_cars_admin/post.php"
var help_html_environment = "stage.worldofcars.go.com/"

// gate URL's
//var gateCheck = "http://carsdev.online.disney.com/cgi-bin/ACD/ACD.js?uri=(http://127.0.0.1:8080/carsds/api/WhoAmIRequest)"
//var gateReturn = "http://carsdev.online.disney.com/friends/"

// reg
var api = "http://apps.stage.worldofcars.go.com/carsds/api/";
var login = "http://stage.worldofcars.go.com/apps/carsds/api/AccountLoginRequest";
var logout = "http://stage.worldofcars.go.com/apps/carsds/api/AccountLogoutRequest";
var autolog = "http://stage.worldofcars.go.com/appsdxd7080/dxd/flashAPI/login?loginType=swid$#$cacheBust=true"

var whoAmI = "http://stage.worldofcars.go.com/apps/carsds/api/WhoAmIRequest";
var regConfig = PATH.swf + "/reg/registration.xml";
var newsletterID = "Disney_Interest_NLO_120508,Disney_WorldofCars_NLO_102008,WDIG_Family_of_Business_NLO_100300";
var recoveryPasswordURL = "https://registerqa.go.com/global/cars/recoverPassword?appRedirect=http://beta.worldofcars.go.com";
var recoveryUsernameURL = "https://registerqa.go.com/global/cars/recoverMemberNames?appRedirect=http://beta.worldofcars.go.com";
var privacyPolicyURL = "http://disney.go.com/corporate/privacy/pp_wdig.html";
var termsOfUseURL = "http://disney.go.com/corporate/privacy/terms.html?ppLink=pp_wdig";
var DOBCookieTO = "30";

var loadingAnimationURL = assetsBaseUrl + "flash/gui/loader/car_f_gui_ldr_loader.swf";
var commerce = "http://apps.stage.worldofcars.go.com/reg7080/commerce/flashapi/";
var blogRSS = "http://stage.worldofcars.go.com/blog/blog/crewsnews/feed2/entries/rss";

var locale = "en_US";
var statesURL = "states.xml";
var whichModule = "";
var whichRequirements = "";

var contentSwfUrl = PATH.swf +"/reg/gui/car_f_gui_reg_registration.swf";
var loaderSwfUrl = assetsBaseUrl + "flash/gui/loader/car_f_gui_ldr_loader.swf";


// set global flash vars
var flashvars = {};
flashvars["locale"] = locale || "";
flashvars["regConfig"] = regConfig || "";
flashvars["whichModule"] = whichModule || "";
flashvars["whichRequirements"] = whichRequirements || "";
flashvars["assetsBaseUrl"] = assetsBaseUrl || "";
flashvars["assetServiceHost"] = assetServiceHost || "";
flashvars["carsServiceHost"] = carsServiceHost || "";			
flashvars["api"] = api || "";
flashvars["login"] = login || "";
flashvars["logout"] = logout || "";
flashvars["whoAmI"] = whoAmI || "";
flashvars["autolog"] = autolog || "";
flashvars["newsletterID"] = newsletterID || "";
flashvars["recoveryPasswordURL"] = recoveryPasswordURL || "";
flashvars["recoveryUsernameURL"] = recoveryUsernameURL || "";
flashvars["termsOfUseURL"] = termsOfUseURL || "";
flashvars["privacyPolicyURL"] = privacyPolicyURL || "";
flashvars["DOBCookieTO"] = DOBCookieTO || "";
flashvars["parentGuide"] = RDR.parents || "";
flashvars["statesURL"] = statesURL || "";
flashvars["loadingAnimationURL"] = loadingAnimationURL || "";
//flashvars["gateCheck"] = gateCheck;
//flashvars["gateReturn"] = gateReturn;
flashvars["contentSwfUrl"] = contentSwfUrl;
flashvars["loaderSwfUrl"] = loaderSwfUrl;

// set global flash params
var flashparams = {
	menu: "false",
	scale: "noScale",
	allowFullscreen: "true",
	allowScriptAccess: "always",
	wmode: "transparent"
};