// Compiled by ClojureScript 1.10.439 {}
goog.provide('flex_webapp.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.loader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"I'm in the core aka home module!");
flex_webapp.core.error_handler = (function flex_webapp$core$error_handler(p__35738){
var map__35739 = p__35738;
var map__35739__$1 = (((((!((map__35739 == null))))?(((((map__35739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35739):map__35739);
var status = cljs.core.get.call(null,map__35739__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__35739__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
flex_webapp.core.set_message = (function flex_webapp$core$set_message(response){
console.log([">>> Set msg :::  #####  >>>>> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));

var div_message = goog.dom.getElement("display-message");
var msg = new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(response);
div_message.innerHTML = msg;

return goog.style.showElement(div_message,true);
});
flex_webapp.core.send_data = (function flex_webapp$core$send_data(){
var str1 = goog.dom.getElement("json-field").value;
var str2 = goog.dom.getElement("upload-id").value;
return ajax.core.POST.call(null,"/api/v1/check",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"str1","str1",972567240),str1,new cljs.core.Keyword(null,"str2","str2",-73529614),str2], null),new cljs.core.Keyword(null,"handler","handler",-195596612),flex_webapp.core.set_message,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),flex_webapp.core.error_handler], null));
});
goog.events.listen(goog.dom.getElement("button-chk"),goog.events.EventType.CLICK,flex_webapp.core.send_data);

//# sourceMappingURL=core.js.map?rel=1541542784445
