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
flex_webapp.core.export_json = (function flex_webapp$core$export_json(){
var json = goog.dom.getElement("json-field").value;
var id = goog.dom.getElement("upload-id").value;
var csrf_field = goog.dom.getElement("__anti-forgery-token").value;
return ajax.core.POST.call(null,"/admin/uploads/export",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),json,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrf_field], null),new cljs.core.Keyword(null,"handler","handler",-195596612),flex_webapp.core.set_message,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),flex_webapp.core.error_handler], null));
});

//# sourceMappingURL=core.js.map?rel=1541536516060
