// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29361){
var map__29362 = p__29361;
var map__29362__$1 = (((((!((map__29362 == null))))?(((((map__29362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29362):map__29362);
var m = map__29362__$1;
var n = cljs.core.get.call(null,map__29362__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29364_29386 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29365_29387 = null;
var count__29366_29388 = (0);
var i__29367_29389 = (0);
while(true){
if((i__29367_29389 < count__29366_29388)){
var f_29390 = cljs.core._nth.call(null,chunk__29365_29387,i__29367_29389);
cljs.core.println.call(null,"  ",f_29390);


var G__29391 = seq__29364_29386;
var G__29392 = chunk__29365_29387;
var G__29393 = count__29366_29388;
var G__29394 = (i__29367_29389 + (1));
seq__29364_29386 = G__29391;
chunk__29365_29387 = G__29392;
count__29366_29388 = G__29393;
i__29367_29389 = G__29394;
continue;
} else {
var temp__5457__auto___29395 = cljs.core.seq.call(null,seq__29364_29386);
if(temp__5457__auto___29395){
var seq__29364_29396__$1 = temp__5457__auto___29395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29364_29396__$1)){
var c__4461__auto___29397 = cljs.core.chunk_first.call(null,seq__29364_29396__$1);
var G__29398 = cljs.core.chunk_rest.call(null,seq__29364_29396__$1);
var G__29399 = c__4461__auto___29397;
var G__29400 = cljs.core.count.call(null,c__4461__auto___29397);
var G__29401 = (0);
seq__29364_29386 = G__29398;
chunk__29365_29387 = G__29399;
count__29366_29388 = G__29400;
i__29367_29389 = G__29401;
continue;
} else {
var f_29402 = cljs.core.first.call(null,seq__29364_29396__$1);
cljs.core.println.call(null,"  ",f_29402);


var G__29403 = cljs.core.next.call(null,seq__29364_29396__$1);
var G__29404 = null;
var G__29405 = (0);
var G__29406 = (0);
seq__29364_29386 = G__29403;
chunk__29365_29387 = G__29404;
count__29366_29388 = G__29405;
i__29367_29389 = G__29406;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29407 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29407);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29407)))?cljs.core.second.call(null,arglists_29407):arglists_29407));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29368_29408 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29369_29409 = null;
var count__29370_29410 = (0);
var i__29371_29411 = (0);
while(true){
if((i__29371_29411 < count__29370_29410)){
var vec__29372_29412 = cljs.core._nth.call(null,chunk__29369_29409,i__29371_29411);
var name_29413 = cljs.core.nth.call(null,vec__29372_29412,(0),null);
var map__29375_29414 = cljs.core.nth.call(null,vec__29372_29412,(1),null);
var map__29375_29415__$1 = (((((!((map__29375_29414 == null))))?(((((map__29375_29414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29375_29414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29375_29414):map__29375_29414);
var doc_29416 = cljs.core.get.call(null,map__29375_29415__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29417 = cljs.core.get.call(null,map__29375_29415__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29413);

cljs.core.println.call(null," ",arglists_29417);

if(cljs.core.truth_(doc_29416)){
cljs.core.println.call(null," ",doc_29416);
} else {
}


var G__29418 = seq__29368_29408;
var G__29419 = chunk__29369_29409;
var G__29420 = count__29370_29410;
var G__29421 = (i__29371_29411 + (1));
seq__29368_29408 = G__29418;
chunk__29369_29409 = G__29419;
count__29370_29410 = G__29420;
i__29371_29411 = G__29421;
continue;
} else {
var temp__5457__auto___29422 = cljs.core.seq.call(null,seq__29368_29408);
if(temp__5457__auto___29422){
var seq__29368_29423__$1 = temp__5457__auto___29422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29368_29423__$1)){
var c__4461__auto___29424 = cljs.core.chunk_first.call(null,seq__29368_29423__$1);
var G__29425 = cljs.core.chunk_rest.call(null,seq__29368_29423__$1);
var G__29426 = c__4461__auto___29424;
var G__29427 = cljs.core.count.call(null,c__4461__auto___29424);
var G__29428 = (0);
seq__29368_29408 = G__29425;
chunk__29369_29409 = G__29426;
count__29370_29410 = G__29427;
i__29371_29411 = G__29428;
continue;
} else {
var vec__29377_29429 = cljs.core.first.call(null,seq__29368_29423__$1);
var name_29430 = cljs.core.nth.call(null,vec__29377_29429,(0),null);
var map__29380_29431 = cljs.core.nth.call(null,vec__29377_29429,(1),null);
var map__29380_29432__$1 = (((((!((map__29380_29431 == null))))?(((((map__29380_29431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29380_29431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29380_29431):map__29380_29431);
var doc_29433 = cljs.core.get.call(null,map__29380_29432__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29434 = cljs.core.get.call(null,map__29380_29432__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29430);

cljs.core.println.call(null," ",arglists_29434);

if(cljs.core.truth_(doc_29433)){
cljs.core.println.call(null," ",doc_29433);
} else {
}


var G__29435 = cljs.core.next.call(null,seq__29368_29423__$1);
var G__29436 = null;
var G__29437 = (0);
var G__29438 = (0);
seq__29368_29408 = G__29435;
chunk__29369_29409 = G__29436;
count__29370_29410 = G__29437;
i__29371_29411 = G__29438;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29382 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29383 = null;
var count__29384 = (0);
var i__29385 = (0);
while(true){
if((i__29385 < count__29384)){
var role = cljs.core._nth.call(null,chunk__29383,i__29385);
var temp__5457__auto___29439__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29439__$1)){
var spec_29440 = temp__5457__auto___29439__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29440));
} else {
}


var G__29441 = seq__29382;
var G__29442 = chunk__29383;
var G__29443 = count__29384;
var G__29444 = (i__29385 + (1));
seq__29382 = G__29441;
chunk__29383 = G__29442;
count__29384 = G__29443;
i__29385 = G__29444;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29382);
if(temp__5457__auto____$1){
var seq__29382__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29382__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29382__$1);
var G__29445 = cljs.core.chunk_rest.call(null,seq__29382__$1);
var G__29446 = c__4461__auto__;
var G__29447 = cljs.core.count.call(null,c__4461__auto__);
var G__29448 = (0);
seq__29382 = G__29445;
chunk__29383 = G__29446;
count__29384 = G__29447;
i__29385 = G__29448;
continue;
} else {
var role = cljs.core.first.call(null,seq__29382__$1);
var temp__5457__auto___29449__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29449__$2)){
var spec_29450 = temp__5457__auto___29449__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29450));
} else {
}


var G__29451 = cljs.core.next.call(null,seq__29382__$1);
var G__29452 = null;
var G__29453 = (0);
var G__29454 = (0);
seq__29382 = G__29451;
chunk__29383 = G__29452;
count__29384 = G__29453;
i__29385 = G__29454;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1541536696465
