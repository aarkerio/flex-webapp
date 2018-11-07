// Compiled by ClojureScript 1.10.439 {:cache-key "CE10C757662DA3258EDD0B354C1C725AC1C2A4E5"}
goog.provide('cljs.loader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');
cljs.loader.module_infos = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-base","cljs-base",-1271626984),cljs.core.PersistentVector.EMPTY], null);
cljs.loader.module_uris = (((typeof COMPILED_MODULE_URIS !== 'undefined'))?COMPILED_MODULE_URIS:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-base","cljs-base",-1271626984),cljs.core.PersistentVector.fromArray(["/goog/base.js","/goog/debug/error.js","/goog/dom/nodetype.js","/goog/string/string.js","/goog/asserts/asserts.js","/goog/array/array.js","/goog/labs/useragent/util.js","/goog/object/object.js","/goog/labs/useragent/browser.js","/goog/labs/useragent/engine.js","/goog/labs/useragent/platform.js","/goog/reflect/reflect.js","/goog/useragent/useragent.js","/goog/dom/browserfeature.js","/goog/dom/htmlelement.js","/goog/dom/tagname.js","/goog/dom/asserts.js","/goog/dom/tags.js","/goog/string/typedstring.js","/goog/string/const.js","/goog/html/safescript.js","/goog/fs/url.js","/goog/i18n/bidi.js","/goog/html/trustedresourceurl.js","/goog/html/safeurl.js","/goog/html/safestyle.js","/goog/html/safestylesheet.js","/goog/html/safehtml.js","/goog/dom/safe.js","/goog/html/uncheckedconversions.js","/goog/math/math.js","/goog/math/coordinate.js","/goog/math/size.js","/goog/dom/dom.js","/goog/structs/structs.js","/goog/functions/functions.js","/goog/iter/iter.js","/goog/structs/map.js","/goog/uri/utils.js","/goog/uri/uri.js","/goog/math/integer.js","/goog/string/stringbuffer.js","/goog/math/long.js","/cljs/core.js","/goog/useragent/product.js","/cljs/core/async/impl/protocols.js","/cljs/core/async/impl/buffers.js","/goog/debug/entrypointregistry.js","/goog/async/nexttick.js","/cljs/core/async/impl/dispatch.js","/cljs/core/async/impl/channels.js","/cljs/core/async/impl/ioc_helpers.js","/cljs/core/async/impl/timers.js","/cljs/core/async.js","/goog/promise/thenable.js","/goog/async/freelist.js","/goog/async/workqueue.js","/goog/async/run.js","/goog/promise/resolver.js","/goog/promise/promise.js","/goog/mochikit/async/deferred.js","/goog/net/jsloader.js","/clojure/set.js","/goog/html/legacyconversions.js","/clojure/string.js","/cljs/pprint.js","/cljs/tools/reader/impl/utils.js","/cljs/tools/reader/reader_types.js","/cljs/tools/reader/impl/inspect.js","/cljs/tools/reader/impl/errors.js","/cljs/tools/reader/impl/commons.js","/cljs/tools/reader.js","/cljs/tools/reader/edn.js","/cljs/reader.js","/figwheel/client/utils.js","/figwheel/client/file_reloading.js","/clojure/walk.js","/cljs/spec/gen/alpha.js","/cljs/spec/alpha.js","/cljs/repl.js","/goog/dom/dataset.js","/figwheel/client/socket.js","/figwheel/client/heads_up.js","/figwheel/client.js","/figwheel/connect.js","/figwheel/preload.js","/process/env.js","/ajax/protocols.js","/ajax/util.js","/ajax/url.js","/ajax/interceptors.js","/ajax/formats.js","/ajax/xml_http_request.js","/com/cognitect/transit/util.js","/com/cognitect/transit/eq.js","/com/cognitect/transit/types.js","/com/cognitect/transit/delimiters.js","/com/cognitect/transit/caching.js","/com/cognitect/transit/impl/decoder.js","/com/cognitect/transit/impl/reader.js","/com/cognitect/transit/handlers.js","/com/cognitect/transit/impl/writer.js","/com/cognitect/transit.js","/cognitect/transit.js","/ajax/transit.js","/ajax/json.js","/ajax/ring.js","/goog/disposable/idisposable.js","/goog/disposable/disposable.js","/goog/events/browserfeature.js","/goog/events/eventid.js","/goog/events/event.js","/goog/events/eventtype.js","/goog/events/browserevent.js","/goog/events/listenable.js","/goog/events/listener.js","/goog/events/listenermap.js","/goog/events/events.js","/goog/events/eventtarget.js","/goog/timer/timer.js","/goog/json/json.js","/goog/json/hybrid.js","/goog/debug/errorcontext.js","/goog/debug/debug.js","/goog/debug/logrecord.js","/goog/debug/logbuffer.js","/goog/debug/logger.js","/goog/log/log.js","/goog/net/errorcode.js","/goog/net/eventtype.js","/goog/net/httpstatus.js","/goog/net/xhrlike.js","/goog/net/xmlhttpfactory.js","/goog/net/wrapperxmlhttpfactory.js","/goog/net/xmlhttp.js","/goog/net/xhrio.js","/ajax/simple.js","/ajax/easy.js","/goog/events/eventhandler.js","/goog/structs/queue.js","/goog/structs/collection.js","/goog/structs/set.js","/goog/structs/pool.js","/goog/structs/node.js","/goog/structs/heap.js","/goog/structs/priorityqueue.js","/goog/structs/prioritypool.js","/goog/net/xhriopool.js","/goog/net/xhrmanager.js","/ajax/xhrio.js","/ajax/core.js","/goog/structs/simplepool.js","/goog/debug/tracer.js","/goog/module/module.js","/goog/module/basemodule.js","/goog/module/moduleloadcallback.js","/goog/module/moduleinfo.js","/goog/module/abstractmoduleloader.js","/goog/module/modulemanager.js","/goog/net/bulkloaderhelper.js","/goog/net/bulkloader.js","/goog/module/moduleloader.js","/cljs/loader.js","/goog/dom/vendor.js","/goog/math/box.js","/goog/math/irect.js","/goog/math/rect.js","/goog/style/style.js","/flex_webapp/core.js"], true)], null));
cljs.loader.deps_for = (function cljs$loader$deps_for(x,graph){
var depends_on = cljs.core.get.call(null,graph,x);
return cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (depends_on){
return (function (p1__35719_SHARP_){
return cljs.loader.deps_for.call(null,p1__35719_SHARP_,graph);
});})(depends_on))
,depends_on),depends_on)));
});
cljs.loader.munge_kw = (function cljs$loader$munge_kw(x){
var G__35720 = x;
if((x instanceof cljs.core.Keyword)){
return cljs.core.munge.call(null,cljs.core.name.call(null,G__35720));
} else {
return G__35720;
}
});
cljs.loader.to_js = (function cljs$loader$to_js(m){
return cljs.core.reduce_kv.call(null,(function (ret,k,xs){
var arr = cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.loader.munge_kw,xs));
var G__35721 = ret;
goog.object.set(G__35721,cljs.core.munge.call(null,cljs.core.name.call(null,k)),arr);

return G__35721;
}),({}),m);
});
cljs.loader.create_module_manager = (function cljs$loader$create_module_manager(){
var mm = (new goog.module.ModuleManager());
var ml = (new goog.module.ModuleLoader());
mm.setLoader(ml);

return mm;
});
if((typeof cljs !== 'undefined') && (typeof cljs.loader !== 'undefined') && (typeof cljs.loader._STAR_module_manager_STAR_ !== 'undefined')){
} else {
cljs.loader._STAR_module_manager_STAR_ = cljs.loader.create_module_manager.call(null);
}
cljs.loader._STAR_module_manager_STAR_.setAllModuleInfo(cljs.loader.to_js.call(null,cljs.loader.module_infos));
cljs.loader._STAR_module_manager_STAR_.setModuleUris((function (){var G__35722 = cljs.loader.module_uris;
if(cljs.core.map_QMARK_.call(null,cljs.loader.module_uris)){
return cljs.loader.to_js.call(null,G__35722);
} else {
return G__35722;
}
})());
/**
 * Return true if modules is loaded. module-name should be a keyword matching
 * a :modules module definition.
 */
cljs.loader.loaded_QMARK_ = (function cljs$loader$loaded_QMARK_(module_name){
if(cljs.core.contains_QMARK_.call(null,cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

var mname = cljs.core.munge.call(null,cljs.core.name.call(null,module_name));
var module = cljs.loader._STAR_module_manager_STAR_.getModuleInfo(mname);
if((!((module == null)))){
return module.isLoaded();
} else {
return null;
}
});
/**
 * Load a module. module-name should be a keyword matching a :modules module
 * definition.
 */
cljs.loader.load = (function cljs$loader$load(var_args){
var G__35724 = arguments.length;
switch (G__35724) {
case 1:
return cljs.loader.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.loader.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.loader.load.cljs$core$IFn$_invoke$arity$1 = (function (module_name){
return cljs.loader.load.call(null,module_name,null);
});

cljs.loader.load.cljs$core$IFn$_invoke$arity$2 = (function (module_name,cb){
if(cljs.core.contains_QMARK_.call(null,cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

var mname = cljs.core.munge.call(null,cljs.core.name.call(null,module_name));
if((!((cb == null)))){
return cljs.loader._STAR_module_manager_STAR_.execOnLoad(mname,cb);
} else {
return cljs.loader._STAR_module_manager_STAR_.load(mname);
}
});

cljs.loader.load.cljs$lang$maxFixedArity = 2;

/**
 * Set a module as being loaded. module-name should be a keyword matching a
 *   :modules module definition. Will mark all parent modules as also being
 *   loaded.
 */
cljs.loader.set_loaded_BANG_ = (function cljs$loader$set_loaded_BANG_(module_name){
if(cljs.core.contains_QMARK_.call(null,cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

var xs = cljs.loader.deps_for.call(null,module_name,cljs.loader.module_infos);
var seq__35726_35730 = cljs.core.seq.call(null,xs);
var chunk__35727_35731 = null;
var count__35728_35732 = (0);
var i__35729_35733 = (0);
while(true){
if((i__35729_35733 < count__35728_35732)){
var x_35734 = cljs.core._nth.call(null,chunk__35727_35731,i__35729_35733);
cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw.call(null,x_35734));


var G__35735 = seq__35726_35730;
var G__35736 = chunk__35727_35731;
var G__35737 = count__35728_35732;
var G__35738 = (i__35729_35733 + (1));
seq__35726_35730 = G__35735;
chunk__35727_35731 = G__35736;
count__35728_35732 = G__35737;
i__35729_35733 = G__35738;
continue;
} else {
var temp__5457__auto___35739 = cljs.core.seq.call(null,seq__35726_35730);
if(temp__5457__auto___35739){
var seq__35726_35740__$1 = temp__5457__auto___35739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35726_35740__$1)){
var c__4461__auto___35741 = cljs.core.chunk_first.call(null,seq__35726_35740__$1);
var G__35742 = cljs.core.chunk_rest.call(null,seq__35726_35740__$1);
var G__35743 = c__4461__auto___35741;
var G__35744 = cljs.core.count.call(null,c__4461__auto___35741);
var G__35745 = (0);
seq__35726_35730 = G__35742;
chunk__35727_35731 = G__35743;
count__35728_35732 = G__35744;
i__35729_35733 = G__35745;
continue;
} else {
var x_35746 = cljs.core.first.call(null,seq__35726_35740__$1);
cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw.call(null,x_35746));


var G__35747 = cljs.core.next.call(null,seq__35726_35740__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35726_35730 = G__35747;
chunk__35727_35731 = G__35748;
count__35728_35732 = G__35749;
i__35729_35733 = G__35750;
continue;
}
} else {
}
}
break;
}

return cljs.loader._STAR_module_manager_STAR_.setLoaded(cljs.loader.munge_kw.call(null,module_name));
});
/**
 * Prefetch a module. module-name should be a keyword matching a :modules
 *   module definition. Will download the module but not evaluate it. To
 *   complete module load, one must also call cljs.loader/load after prefetching
 *   the module. Does nothing if the module is loading or has been loaded.
 */
cljs.loader.prefetch = (function cljs$loader$prefetch(module_name){
if(cljs.core.contains_QMARK_.call(null,cljs.loader.module_infos,module_name)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Module ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_name)," does not exist"].join('')),"\n","(contains? module-infos module-name)"].join('')));
}

if(cljs.core.truth_(cljs.loader.loaded_QMARK_.call(null,module_name))){
return null;
} else {
var mname = cljs.core.munge.call(null,cljs.core.name.call(null,module_name));
if(cljs.core.truth_(cljs.loader._STAR_module_manager_STAR_.isModuleLoading(mname))){
return null;
} else {
return cljs.loader._STAR_module_manager_STAR_.prefetchModule(mname);
}
}
});

//# sourceMappingURL=loader.js.map?rel=1541536517427
