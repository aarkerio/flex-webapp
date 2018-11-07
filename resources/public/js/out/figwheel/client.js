// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29649){if((e29649 instanceof Error)){
var e = e29649;
return "Error: Unable to stringify";
} else {
throw e29649;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29652 = arguments.length;
switch (G__29652) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29650_SHARP_){
if(typeof p1__29650_SHARP_ === 'string'){
return p1__29650_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29650_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29655 = arguments.length;
var i__4642__auto___29656 = (0);
while(true){
if((i__4642__auto___29656 < len__4641__auto___29655)){
args__4647__auto__.push((arguments[i__4642__auto___29656]));

var G__29657 = (i__4642__auto___29656 + (1));
i__4642__auto___29656 = G__29657;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29654){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29654));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29659 = arguments.length;
var i__4642__auto___29660 = (0);
while(true){
if((i__4642__auto___29660 < len__4641__auto___29659)){
args__4647__auto__.push((arguments[i__4642__auto___29660]));

var G__29661 = (i__4642__auto___29660 + (1));
i__4642__auto___29660 = G__29661;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29658){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29658));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29662){
var map__29663 = p__29662;
var map__29663__$1 = (((((!((map__29663 == null))))?(((((map__29663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29663):map__29663);
var message = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24480__auto___29742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___29742,ch){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___29742,ch){
return (function (state_29714){
var state_val_29715 = (state_29714[(1)]);
if((state_val_29715 === (7))){
var inst_29710 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
var statearr_29716_29743 = state_29714__$1;
(statearr_29716_29743[(2)] = inst_29710);

(statearr_29716_29743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (1))){
var state_29714__$1 = state_29714;
var statearr_29717_29744 = state_29714__$1;
(statearr_29717_29744[(2)] = null);

(statearr_29717_29744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (4))){
var inst_29667 = (state_29714[(7)]);
var inst_29667__$1 = (state_29714[(2)]);
var state_29714__$1 = (function (){var statearr_29718 = state_29714;
(statearr_29718[(7)] = inst_29667__$1);

return statearr_29718;
})();
if(cljs.core.truth_(inst_29667__$1)){
var statearr_29719_29745 = state_29714__$1;
(statearr_29719_29745[(1)] = (5));

} else {
var statearr_29720_29746 = state_29714__$1;
(statearr_29720_29746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (15))){
var inst_29674 = (state_29714[(8)]);
var inst_29689 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29674);
var inst_29690 = cljs.core.first.call(null,inst_29689);
var inst_29691 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29690);
var inst_29692 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29691)].join('');
var inst_29693 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29692);
var state_29714__$1 = state_29714;
var statearr_29721_29747 = state_29714__$1;
(statearr_29721_29747[(2)] = inst_29693);

(statearr_29721_29747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (13))){
var inst_29698 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
var statearr_29722_29748 = state_29714__$1;
(statearr_29722_29748[(2)] = inst_29698);

(statearr_29722_29748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (6))){
var state_29714__$1 = state_29714;
var statearr_29723_29749 = state_29714__$1;
(statearr_29723_29749[(2)] = null);

(statearr_29723_29749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (17))){
var inst_29696 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
var statearr_29724_29750 = state_29714__$1;
(statearr_29724_29750[(2)] = inst_29696);

(statearr_29724_29750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (3))){
var inst_29712 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29714__$1,inst_29712);
} else {
if((state_val_29715 === (12))){
var inst_29673 = (state_29714[(9)]);
var inst_29687 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29673,opts);
var state_29714__$1 = state_29714;
if(inst_29687){
var statearr_29725_29751 = state_29714__$1;
(statearr_29725_29751[(1)] = (15));

} else {
var statearr_29726_29752 = state_29714__$1;
(statearr_29726_29752[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (2))){
var state_29714__$1 = state_29714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29714__$1,(4),ch);
} else {
if((state_val_29715 === (11))){
var inst_29674 = (state_29714[(8)]);
var inst_29679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29680 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29674);
var inst_29681 = cljs.core.async.timeout.call(null,(1000));
var inst_29682 = [inst_29680,inst_29681];
var inst_29683 = (new cljs.core.PersistentVector(null,2,(5),inst_29679,inst_29682,null));
var state_29714__$1 = state_29714;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29714__$1,(14),inst_29683);
} else {
if((state_val_29715 === (9))){
var inst_29674 = (state_29714[(8)]);
var inst_29700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29701 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29674);
var inst_29702 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29701);
var inst_29703 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29702)].join('');
var inst_29704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29703);
var state_29714__$1 = (function (){var statearr_29727 = state_29714;
(statearr_29727[(10)] = inst_29700);

return statearr_29727;
})();
var statearr_29728_29753 = state_29714__$1;
(statearr_29728_29753[(2)] = inst_29704);

(statearr_29728_29753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (5))){
var inst_29667 = (state_29714[(7)]);
var inst_29669 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29670 = (new cljs.core.PersistentArrayMap(null,2,inst_29669,null));
var inst_29671 = (new cljs.core.PersistentHashSet(null,inst_29670,null));
var inst_29672 = figwheel.client.focus_msgs.call(null,inst_29671,inst_29667);
var inst_29673 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29672);
var inst_29674 = cljs.core.first.call(null,inst_29672);
var inst_29675 = figwheel.client.autoload_QMARK_.call(null);
var state_29714__$1 = (function (){var statearr_29729 = state_29714;
(statearr_29729[(8)] = inst_29674);

(statearr_29729[(9)] = inst_29673);

return statearr_29729;
})();
if(cljs.core.truth_(inst_29675)){
var statearr_29730_29754 = state_29714__$1;
(statearr_29730_29754[(1)] = (8));

} else {
var statearr_29731_29755 = state_29714__$1;
(statearr_29731_29755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (14))){
var inst_29685 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
var statearr_29732_29756 = state_29714__$1;
(statearr_29732_29756[(2)] = inst_29685);

(statearr_29732_29756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (16))){
var state_29714__$1 = state_29714;
var statearr_29733_29757 = state_29714__$1;
(statearr_29733_29757[(2)] = null);

(statearr_29733_29757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (10))){
var inst_29706 = (state_29714[(2)]);
var state_29714__$1 = (function (){var statearr_29734 = state_29714;
(statearr_29734[(11)] = inst_29706);

return statearr_29734;
})();
var statearr_29735_29758 = state_29714__$1;
(statearr_29735_29758[(2)] = null);

(statearr_29735_29758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (8))){
var inst_29673 = (state_29714[(9)]);
var inst_29677 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29673,opts);
var state_29714__$1 = state_29714;
if(cljs.core.truth_(inst_29677)){
var statearr_29736_29759 = state_29714__$1;
(statearr_29736_29759[(1)] = (11));

} else {
var statearr_29737_29760 = state_29714__$1;
(statearr_29737_29760[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24480__auto___29742,ch))
;
return ((function (switch__24385__auto__,c__24480__auto___29742,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24386__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24386__auto____0 = (function (){
var statearr_29738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29738[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24386__auto__);

(statearr_29738[(1)] = (1));

return statearr_29738;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24386__auto____1 = (function (state_29714){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_29714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e29739){if((e29739 instanceof Object)){
var ex__24389__auto__ = e29739;
var statearr_29740_29761 = state_29714;
(statearr_29740_29761[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29762 = state_29714;
state_29714 = G__29762;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24386__auto__ = function(state_29714){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24386__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24386__auto____1.call(this,state_29714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24386__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24386__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___29742,ch))
})();
var state__24482__auto__ = (function (){var statearr_29741 = f__24481__auto__.call(null);
(statearr_29741[(6)] = c__24480__auto___29742);

return statearr_29741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___29742,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29763_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29763_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29769 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29769){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29765 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29766 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29767 = true;
var _STAR_print_fn_STAR__temp_val__29768 = ((function (_STAR_print_newline_STAR__orig_val__29765,_STAR_print_fn_STAR__orig_val__29766,_STAR_print_newline_STAR__temp_val__29767,sb,base_path_29769){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29765,_STAR_print_fn_STAR__orig_val__29766,_STAR_print_newline_STAR__temp_val__29767,sb,base_path_29769))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29767;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29768;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29766;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29765;
}}catch (e29764){if((e29764 instanceof Error)){
var e = e29764;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29769], null));
} else {
var e = e29764;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29769))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29770){
var map__29771 = p__29770;
var map__29771__$1 = (((((!((map__29771 == null))))?(((((map__29771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29771):map__29771);
var opts = map__29771__$1;
var build_id = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29771,map__29771__$1,opts,build_id){
return (function (p__29773){
var vec__29774 = p__29773;
var seq__29775 = cljs.core.seq.call(null,vec__29774);
var first__29776 = cljs.core.first.call(null,seq__29775);
var seq__29775__$1 = cljs.core.next.call(null,seq__29775);
var map__29777 = first__29776;
var map__29777__$1 = (((((!((map__29777 == null))))?(((((map__29777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29777):map__29777);
var msg = map__29777__$1;
var msg_name = cljs.core.get.call(null,map__29777__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29775__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29774,seq__29775,first__29776,seq__29775__$1,map__29777,map__29777__$1,msg,msg_name,_,map__29771,map__29771__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29774,seq__29775,first__29776,seq__29775__$1,map__29777,map__29777__$1,msg,msg_name,_,map__29771,map__29771__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29771,map__29771__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29779){
var vec__29780 = p__29779;
var seq__29781 = cljs.core.seq.call(null,vec__29780);
var first__29782 = cljs.core.first.call(null,seq__29781);
var seq__29781__$1 = cljs.core.next.call(null,seq__29781);
var map__29783 = first__29782;
var map__29783__$1 = (((((!((map__29783 == null))))?(((((map__29783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29783):map__29783);
var msg = map__29783__$1;
var msg_name = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29781__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29785){
var map__29786 = p__29785;
var map__29786__$1 = (((((!((map__29786 == null))))?(((((map__29786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786):map__29786);
var on_compile_warning = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29786,map__29786__$1,on_compile_warning,on_compile_fail){
return (function (p__29788){
var vec__29789 = p__29788;
var seq__29790 = cljs.core.seq.call(null,vec__29789);
var first__29791 = cljs.core.first.call(null,seq__29790);
var seq__29790__$1 = cljs.core.next.call(null,seq__29790);
var map__29792 = first__29791;
var map__29792__$1 = (((((!((map__29792 == null))))?(((((map__29792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29792):map__29792);
var msg = map__29792__$1;
var msg_name = cljs.core.get.call(null,map__29792__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29790__$1;
var pred__29794 = cljs.core._EQ_;
var expr__29795 = msg_name;
if(cljs.core.truth_(pred__29794.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29795))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29794.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29795))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29786,map__29786__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__,msg_hist,msg_names,msg){
return (function (state_29884){
var state_val_29885 = (state_29884[(1)]);
if((state_val_29885 === (7))){
var inst_29804 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
if(cljs.core.truth_(inst_29804)){
var statearr_29886_29933 = state_29884__$1;
(statearr_29886_29933[(1)] = (8));

} else {
var statearr_29887_29934 = state_29884__$1;
(statearr_29887_29934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (20))){
var inst_29878 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29888_29935 = state_29884__$1;
(statearr_29888_29935[(2)] = inst_29878);

(statearr_29888_29935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (27))){
var inst_29874 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29889_29936 = state_29884__$1;
(statearr_29889_29936[(2)] = inst_29874);

(statearr_29889_29936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (1))){
var inst_29797 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29884__$1 = state_29884;
if(cljs.core.truth_(inst_29797)){
var statearr_29890_29937 = state_29884__$1;
(statearr_29890_29937[(1)] = (2));

} else {
var statearr_29891_29938 = state_29884__$1;
(statearr_29891_29938[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (24))){
var inst_29876 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29892_29939 = state_29884__$1;
(statearr_29892_29939[(2)] = inst_29876);

(statearr_29892_29939[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (4))){
var inst_29882 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29884__$1,inst_29882);
} else {
if((state_val_29885 === (15))){
var inst_29880 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29893_29940 = state_29884__$1;
(statearr_29893_29940[(2)] = inst_29880);

(statearr_29893_29940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (21))){
var inst_29833 = (state_29884[(2)]);
var inst_29834 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29835 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29834);
var state_29884__$1 = (function (){var statearr_29894 = state_29884;
(statearr_29894[(7)] = inst_29833);

return statearr_29894;
})();
var statearr_29895_29941 = state_29884__$1;
(statearr_29895_29941[(2)] = inst_29835);

(statearr_29895_29941[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (31))){
var inst_29863 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29884__$1 = state_29884;
if(inst_29863){
var statearr_29896_29942 = state_29884__$1;
(statearr_29896_29942[(1)] = (34));

} else {
var statearr_29897_29943 = state_29884__$1;
(statearr_29897_29943[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (32))){
var inst_29872 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29898_29944 = state_29884__$1;
(statearr_29898_29944[(2)] = inst_29872);

(statearr_29898_29944[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (33))){
var inst_29859 = (state_29884[(2)]);
var inst_29860 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29861 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29860);
var state_29884__$1 = (function (){var statearr_29899 = state_29884;
(statearr_29899[(8)] = inst_29859);

return statearr_29899;
})();
var statearr_29900_29945 = state_29884__$1;
(statearr_29900_29945[(2)] = inst_29861);

(statearr_29900_29945[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (13))){
var inst_29818 = figwheel.client.heads_up.clear.call(null);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(16),inst_29818);
} else {
if((state_val_29885 === (22))){
var inst_29839 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29840 = figwheel.client.heads_up.append_warning_message.call(null,inst_29839);
var state_29884__$1 = state_29884;
var statearr_29901_29946 = state_29884__$1;
(statearr_29901_29946[(2)] = inst_29840);

(statearr_29901_29946[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (36))){
var inst_29870 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29902_29947 = state_29884__$1;
(statearr_29902_29947[(2)] = inst_29870);

(statearr_29902_29947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (29))){
var inst_29850 = (state_29884[(2)]);
var inst_29851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29852 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29851);
var state_29884__$1 = (function (){var statearr_29903 = state_29884;
(statearr_29903[(9)] = inst_29850);

return statearr_29903;
})();
var statearr_29904_29948 = state_29884__$1;
(statearr_29904_29948[(2)] = inst_29852);

(statearr_29904_29948[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (6))){
var inst_29799 = (state_29884[(10)]);
var state_29884__$1 = state_29884;
var statearr_29905_29949 = state_29884__$1;
(statearr_29905_29949[(2)] = inst_29799);

(statearr_29905_29949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (28))){
var inst_29846 = (state_29884[(2)]);
var inst_29847 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29848 = figwheel.client.heads_up.display_warning.call(null,inst_29847);
var state_29884__$1 = (function (){var statearr_29906 = state_29884;
(statearr_29906[(11)] = inst_29846);

return statearr_29906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(29),inst_29848);
} else {
if((state_val_29885 === (25))){
var inst_29844 = figwheel.client.heads_up.clear.call(null);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(28),inst_29844);
} else {
if((state_val_29885 === (34))){
var inst_29865 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(37),inst_29865);
} else {
if((state_val_29885 === (17))){
var inst_29824 = (state_29884[(2)]);
var inst_29825 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29826 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29825);
var state_29884__$1 = (function (){var statearr_29907 = state_29884;
(statearr_29907[(12)] = inst_29824);

return statearr_29907;
})();
var statearr_29908_29950 = state_29884__$1;
(statearr_29908_29950[(2)] = inst_29826);

(statearr_29908_29950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (3))){
var inst_29816 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29884__$1 = state_29884;
if(inst_29816){
var statearr_29909_29951 = state_29884__$1;
(statearr_29909_29951[(1)] = (13));

} else {
var statearr_29910_29952 = state_29884__$1;
(statearr_29910_29952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (12))){
var inst_29812 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29911_29953 = state_29884__$1;
(statearr_29911_29953[(2)] = inst_29812);

(statearr_29911_29953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (2))){
var inst_29799 = (state_29884[(10)]);
var inst_29799__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29884__$1 = (function (){var statearr_29912 = state_29884;
(statearr_29912[(10)] = inst_29799__$1);

return statearr_29912;
})();
if(cljs.core.truth_(inst_29799__$1)){
var statearr_29913_29954 = state_29884__$1;
(statearr_29913_29954[(1)] = (5));

} else {
var statearr_29914_29955 = state_29884__$1;
(statearr_29914_29955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (23))){
var inst_29842 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29884__$1 = state_29884;
if(inst_29842){
var statearr_29915_29956 = state_29884__$1;
(statearr_29915_29956[(1)] = (25));

} else {
var statearr_29916_29957 = state_29884__$1;
(statearr_29916_29957[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (35))){
var state_29884__$1 = state_29884;
var statearr_29917_29958 = state_29884__$1;
(statearr_29917_29958[(2)] = null);

(statearr_29917_29958[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (19))){
var inst_29837 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29884__$1 = state_29884;
if(inst_29837){
var statearr_29918_29959 = state_29884__$1;
(statearr_29918_29959[(1)] = (22));

} else {
var statearr_29919_29960 = state_29884__$1;
(statearr_29919_29960[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (11))){
var inst_29808 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29920_29961 = state_29884__$1;
(statearr_29920_29961[(2)] = inst_29808);

(statearr_29920_29961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (9))){
var inst_29810 = figwheel.client.heads_up.clear.call(null);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(12),inst_29810);
} else {
if((state_val_29885 === (5))){
var inst_29801 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29884__$1 = state_29884;
var statearr_29921_29962 = state_29884__$1;
(statearr_29921_29962[(2)] = inst_29801);

(statearr_29921_29962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (14))){
var inst_29828 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29884__$1 = state_29884;
if(inst_29828){
var statearr_29922_29963 = state_29884__$1;
(statearr_29922_29963[(1)] = (18));

} else {
var statearr_29923_29964 = state_29884__$1;
(statearr_29923_29964[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (26))){
var inst_29854 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29884__$1 = state_29884;
if(inst_29854){
var statearr_29924_29965 = state_29884__$1;
(statearr_29924_29965[(1)] = (30));

} else {
var statearr_29925_29966 = state_29884__$1;
(statearr_29925_29966[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (16))){
var inst_29820 = (state_29884[(2)]);
var inst_29821 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29822 = figwheel.client.heads_up.display_exception.call(null,inst_29821);
var state_29884__$1 = (function (){var statearr_29926 = state_29884;
(statearr_29926[(13)] = inst_29820);

return statearr_29926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(17),inst_29822);
} else {
if((state_val_29885 === (30))){
var inst_29856 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29857 = figwheel.client.heads_up.display_warning.call(null,inst_29856);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(33),inst_29857);
} else {
if((state_val_29885 === (10))){
var inst_29814 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29927_29967 = state_29884__$1;
(statearr_29927_29967[(2)] = inst_29814);

(statearr_29927_29967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (18))){
var inst_29830 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29831 = figwheel.client.heads_up.display_exception.call(null,inst_29830);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(21),inst_29831);
} else {
if((state_val_29885 === (37))){
var inst_29867 = (state_29884[(2)]);
var state_29884__$1 = state_29884;
var statearr_29928_29968 = state_29884__$1;
(statearr_29928_29968[(2)] = inst_29867);

(statearr_29928_29968[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29885 === (8))){
var inst_29806 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29884__$1 = state_29884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29884__$1,(11),inst_29806);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24480__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24385__auto__,c__24480__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto____0 = (function (){
var statearr_29929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29929[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto__);

(statearr_29929[(1)] = (1));

return statearr_29929;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto____1 = (function (state_29884){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_29884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e29930){if((e29930 instanceof Object)){
var ex__24389__auto__ = e29930;
var statearr_29931_29969 = state_29884;
(statearr_29931_29969[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29970 = state_29884;
state_29884 = G__29970;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto__ = function(state_29884){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto____1.call(this,state_29884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__,msg_hist,msg_names,msg))
})();
var state__24482__auto__ = (function (){var statearr_29932 = f__24481__auto__.call(null);
(statearr_29932[(6)] = c__24480__auto__);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__,msg_hist,msg_names,msg))
);

return c__24480__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24480__auto___29999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___29999,ch){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___29999,ch){
return (function (state_29985){
var state_val_29986 = (state_29985[(1)]);
if((state_val_29986 === (1))){
var state_29985__$1 = state_29985;
var statearr_29987_30000 = state_29985__$1;
(statearr_29987_30000[(2)] = null);

(statearr_29987_30000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (2))){
var state_29985__$1 = state_29985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29985__$1,(4),ch);
} else {
if((state_val_29986 === (3))){
var inst_29983 = (state_29985[(2)]);
var state_29985__$1 = state_29985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29985__$1,inst_29983);
} else {
if((state_val_29986 === (4))){
var inst_29973 = (state_29985[(7)]);
var inst_29973__$1 = (state_29985[(2)]);
var state_29985__$1 = (function (){var statearr_29988 = state_29985;
(statearr_29988[(7)] = inst_29973__$1);

return statearr_29988;
})();
if(cljs.core.truth_(inst_29973__$1)){
var statearr_29989_30001 = state_29985__$1;
(statearr_29989_30001[(1)] = (5));

} else {
var statearr_29990_30002 = state_29985__$1;
(statearr_29990_30002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (5))){
var inst_29973 = (state_29985[(7)]);
var inst_29975 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29973);
var state_29985__$1 = state_29985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29985__$1,(8),inst_29975);
} else {
if((state_val_29986 === (6))){
var state_29985__$1 = state_29985;
var statearr_29991_30003 = state_29985__$1;
(statearr_29991_30003[(2)] = null);

(statearr_29991_30003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (7))){
var inst_29981 = (state_29985[(2)]);
var state_29985__$1 = state_29985;
var statearr_29992_30004 = state_29985__$1;
(statearr_29992_30004[(2)] = inst_29981);

(statearr_29992_30004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29986 === (8))){
var inst_29977 = (state_29985[(2)]);
var state_29985__$1 = (function (){var statearr_29993 = state_29985;
(statearr_29993[(8)] = inst_29977);

return statearr_29993;
})();
var statearr_29994_30005 = state_29985__$1;
(statearr_29994_30005[(2)] = null);

(statearr_29994_30005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24480__auto___29999,ch))
;
return ((function (switch__24385__auto__,c__24480__auto___29999,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24386__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24386__auto____0 = (function (){
var statearr_29995 = [null,null,null,null,null,null,null,null,null];
(statearr_29995[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24386__auto__);

(statearr_29995[(1)] = (1));

return statearr_29995;
});
var figwheel$client$heads_up_plugin_$_state_machine__24386__auto____1 = (function (state_29985){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_29985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e29996){if((e29996 instanceof Object)){
var ex__24389__auto__ = e29996;
var statearr_29997_30006 = state_29985;
(statearr_29997_30006[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30007 = state_29985;
state_29985 = G__30007;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24386__auto__ = function(state_29985){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24386__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24386__auto____1.call(this,state_29985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24386__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24386__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___29999,ch))
})();
var state__24482__auto__ = (function (){var statearr_29998 = f__24481__auto__.call(null);
(statearr_29998[(6)] = c__24480__auto___29999);

return statearr_29998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___29999,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__){
return (function (state_30013){
var state_val_30014 = (state_30013[(1)]);
if((state_val_30014 === (1))){
var inst_30008 = cljs.core.async.timeout.call(null,(3000));
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30013__$1,(2),inst_30008);
} else {
if((state_val_30014 === (2))){
var inst_30010 = (state_30013[(2)]);
var inst_30011 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30013__$1 = (function (){var statearr_30015 = state_30013;
(statearr_30015[(7)] = inst_30010);

return statearr_30015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30013__$1,inst_30011);
} else {
return null;
}
}
});})(c__24480__auto__))
;
return ((function (switch__24385__auto__,c__24480__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24386__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24386__auto____0 = (function (){
var statearr_30016 = [null,null,null,null,null,null,null,null];
(statearr_30016[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24386__auto__);

(statearr_30016[(1)] = (1));

return statearr_30016;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24386__auto____1 = (function (state_30013){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_30013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e30017){if((e30017 instanceof Object)){
var ex__24389__auto__ = e30017;
var statearr_30018_30020 = state_30013;
(statearr_30018_30020[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30021 = state_30013;
state_30013 = G__30021;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24386__auto__ = function(state_30013){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24386__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24386__auto____1.call(this,state_30013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24386__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24386__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__))
})();
var state__24482__auto__ = (function (){var statearr_30019 = f__24481__auto__.call(null);
(statearr_30019[(6)] = c__24480__auto__);

return statearr_30019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__))
);

return c__24480__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30028){
var state_val_30029 = (state_30028[(1)]);
if((state_val_30029 === (1))){
var inst_30022 = cljs.core.async.timeout.call(null,(2000));
var state_30028__$1 = state_30028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30028__$1,(2),inst_30022);
} else {
if((state_val_30029 === (2))){
var inst_30024 = (state_30028[(2)]);
var inst_30025 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30026 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30025);
var state_30028__$1 = (function (){var statearr_30030 = state_30028;
(statearr_30030[(7)] = inst_30024);

return statearr_30030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30028__$1,inst_30026);
} else {
return null;
}
}
});})(c__24480__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24385__auto__,c__24480__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto____0 = (function (){
var statearr_30031 = [null,null,null,null,null,null,null,null];
(statearr_30031[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto__);

(statearr_30031[(1)] = (1));

return statearr_30031;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto____1 = (function (state_30028){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_30028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e30032){if((e30032 instanceof Object)){
var ex__24389__auto__ = e30032;
var statearr_30033_30035 = state_30028;
(statearr_30033_30035[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30036 = state_30028;
state_30028 = G__30036;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto__ = function(state_30028){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto____1.call(this,state_30028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__,figwheel_version,temp__5457__auto__))
})();
var state__24482__auto__ = (function (){var statearr_30034 = f__24481__auto__.call(null);
(statearr_30034[(6)] = c__24480__auto__);

return statearr_30034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__,figwheel_version,temp__5457__auto__))
);

return c__24480__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30037){
var map__30038 = p__30037;
var map__30038__$1 = (((((!((map__30038 == null))))?(((((map__30038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30038):map__30038);
var file = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30040 = "";
var G__30040__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30040),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30040);
var G__30040__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30040__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30040__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30040__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30040__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30041){
var map__30042 = p__30041;
var map__30042__$1 = (((((!((map__30042 == null))))?(((((map__30042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30042):map__30042);
var ed = map__30042__$1;
var formatted_exception = cljs.core.get.call(null,map__30042__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30042__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30042__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30044_30048 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30045_30049 = null;
var count__30046_30050 = (0);
var i__30047_30051 = (0);
while(true){
if((i__30047_30051 < count__30046_30050)){
var msg_30052 = cljs.core._nth.call(null,chunk__30045_30049,i__30047_30051);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30052);


var G__30053 = seq__30044_30048;
var G__30054 = chunk__30045_30049;
var G__30055 = count__30046_30050;
var G__30056 = (i__30047_30051 + (1));
seq__30044_30048 = G__30053;
chunk__30045_30049 = G__30054;
count__30046_30050 = G__30055;
i__30047_30051 = G__30056;
continue;
} else {
var temp__5457__auto___30057 = cljs.core.seq.call(null,seq__30044_30048);
if(temp__5457__auto___30057){
var seq__30044_30058__$1 = temp__5457__auto___30057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30044_30058__$1)){
var c__4461__auto___30059 = cljs.core.chunk_first.call(null,seq__30044_30058__$1);
var G__30060 = cljs.core.chunk_rest.call(null,seq__30044_30058__$1);
var G__30061 = c__4461__auto___30059;
var G__30062 = cljs.core.count.call(null,c__4461__auto___30059);
var G__30063 = (0);
seq__30044_30048 = G__30060;
chunk__30045_30049 = G__30061;
count__30046_30050 = G__30062;
i__30047_30051 = G__30063;
continue;
} else {
var msg_30064 = cljs.core.first.call(null,seq__30044_30058__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30064);


var G__30065 = cljs.core.next.call(null,seq__30044_30058__$1);
var G__30066 = null;
var G__30067 = (0);
var G__30068 = (0);
seq__30044_30048 = G__30065;
chunk__30045_30049 = G__30066;
count__30046_30050 = G__30067;
i__30047_30051 = G__30068;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30069){
var map__30070 = p__30069;
var map__30070__$1 = (((((!((map__30070 == null))))?(((((map__30070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30070):map__30070);
var w = map__30070__$1;
var message = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30072 = cljs.core.seq.call(null,plugins);
var chunk__30073 = null;
var count__30074 = (0);
var i__30075 = (0);
while(true){
if((i__30075 < count__30074)){
var vec__30076 = cljs.core._nth.call(null,chunk__30073,i__30075);
var k = cljs.core.nth.call(null,vec__30076,(0),null);
var plugin = cljs.core.nth.call(null,vec__30076,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30082 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30072,chunk__30073,count__30074,i__30075,pl_30082,vec__30076,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30082.call(null,msg_hist);
});})(seq__30072,chunk__30073,count__30074,i__30075,pl_30082,vec__30076,k,plugin))
);
} else {
}


var G__30083 = seq__30072;
var G__30084 = chunk__30073;
var G__30085 = count__30074;
var G__30086 = (i__30075 + (1));
seq__30072 = G__30083;
chunk__30073 = G__30084;
count__30074 = G__30085;
i__30075 = G__30086;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30072);
if(temp__5457__auto__){
var seq__30072__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30072__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30072__$1);
var G__30087 = cljs.core.chunk_rest.call(null,seq__30072__$1);
var G__30088 = c__4461__auto__;
var G__30089 = cljs.core.count.call(null,c__4461__auto__);
var G__30090 = (0);
seq__30072 = G__30087;
chunk__30073 = G__30088;
count__30074 = G__30089;
i__30075 = G__30090;
continue;
} else {
var vec__30079 = cljs.core.first.call(null,seq__30072__$1);
var k = cljs.core.nth.call(null,vec__30079,(0),null);
var plugin = cljs.core.nth.call(null,vec__30079,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30091 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30072,chunk__30073,count__30074,i__30075,pl_30091,vec__30079,k,plugin,seq__30072__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30091.call(null,msg_hist);
});})(seq__30072,chunk__30073,count__30074,i__30075,pl_30091,vec__30079,k,plugin,seq__30072__$1,temp__5457__auto__))
);
} else {
}


var G__30092 = cljs.core.next.call(null,seq__30072__$1);
var G__30093 = null;
var G__30094 = (0);
var G__30095 = (0);
seq__30072 = G__30092;
chunk__30073 = G__30093;
count__30074 = G__30094;
i__30075 = G__30095;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30097 = arguments.length;
switch (G__30097) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30098_30103 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30099_30104 = null;
var count__30100_30105 = (0);
var i__30101_30106 = (0);
while(true){
if((i__30101_30106 < count__30100_30105)){
var msg_30107 = cljs.core._nth.call(null,chunk__30099_30104,i__30101_30106);
figwheel.client.socket.handle_incoming_message.call(null,msg_30107);


var G__30108 = seq__30098_30103;
var G__30109 = chunk__30099_30104;
var G__30110 = count__30100_30105;
var G__30111 = (i__30101_30106 + (1));
seq__30098_30103 = G__30108;
chunk__30099_30104 = G__30109;
count__30100_30105 = G__30110;
i__30101_30106 = G__30111;
continue;
} else {
var temp__5457__auto___30112 = cljs.core.seq.call(null,seq__30098_30103);
if(temp__5457__auto___30112){
var seq__30098_30113__$1 = temp__5457__auto___30112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30098_30113__$1)){
var c__4461__auto___30114 = cljs.core.chunk_first.call(null,seq__30098_30113__$1);
var G__30115 = cljs.core.chunk_rest.call(null,seq__30098_30113__$1);
var G__30116 = c__4461__auto___30114;
var G__30117 = cljs.core.count.call(null,c__4461__auto___30114);
var G__30118 = (0);
seq__30098_30103 = G__30115;
chunk__30099_30104 = G__30116;
count__30100_30105 = G__30117;
i__30101_30106 = G__30118;
continue;
} else {
var msg_30119 = cljs.core.first.call(null,seq__30098_30113__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30119);


var G__30120 = cljs.core.next.call(null,seq__30098_30113__$1);
var G__30121 = null;
var G__30122 = (0);
var G__30123 = (0);
seq__30098_30103 = G__30120;
chunk__30099_30104 = G__30121;
count__30100_30105 = G__30122;
i__30101_30106 = G__30123;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30128 = arguments.length;
var i__4642__auto___30129 = (0);
while(true){
if((i__4642__auto___30129 < len__4641__auto___30128)){
args__4647__auto__.push((arguments[i__4642__auto___30129]));

var G__30130 = (i__4642__auto___30129 + (1));
i__4642__auto___30129 = G__30130;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30125){
var map__30126 = p__30125;
var map__30126__$1 = (((((!((map__30126 == null))))?(((((map__30126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30126):map__30126);
var opts = map__30126__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30124){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30124));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30131){if((e30131 instanceof Error)){
var e = e30131;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30131;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30132){
var map__30133 = p__30132;
var map__30133__$1 = (((((!((map__30133 == null))))?(((((map__30133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30133):map__30133);
var msg_name = cljs.core.get.call(null,map__30133__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1541536697855
