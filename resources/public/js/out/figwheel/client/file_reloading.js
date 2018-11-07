// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27888_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27888_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27889 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27890 = null;
var count__27891 = (0);
var i__27892 = (0);
while(true){
if((i__27892 < count__27891)){
var n = cljs.core._nth.call(null,chunk__27890,i__27892);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27893 = seq__27889;
var G__27894 = chunk__27890;
var G__27895 = count__27891;
var G__27896 = (i__27892 + (1));
seq__27889 = G__27893;
chunk__27890 = G__27894;
count__27891 = G__27895;
i__27892 = G__27896;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27889);
if(temp__5457__auto__){
var seq__27889__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27889__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27889__$1);
var G__27897 = cljs.core.chunk_rest.call(null,seq__27889__$1);
var G__27898 = c__4461__auto__;
var G__27899 = cljs.core.count.call(null,c__4461__auto__);
var G__27900 = (0);
seq__27889 = G__27897;
chunk__27890 = G__27898;
count__27891 = G__27899;
i__27892 = G__27900;
continue;
} else {
var n = cljs.core.first.call(null,seq__27889__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27901 = cljs.core.next.call(null,seq__27889__$1);
var G__27902 = null;
var G__27903 = (0);
var G__27904 = (0);
seq__27889 = G__27901;
chunk__27890 = G__27902;
count__27891 = G__27903;
i__27892 = G__27904;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27905){
var vec__27906 = p__27905;
var _ = cljs.core.nth.call(null,vec__27906,(0),null);
var v = cljs.core.nth.call(null,vec__27906,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__27909){
var vec__27910 = p__27909;
var k = cljs.core.nth.call(null,vec__27910,(0),null);
var v = cljs.core.nth.call(null,vec__27910,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27922_27930 = cljs.core.seq.call(null,deps);
var chunk__27923_27931 = null;
var count__27924_27932 = (0);
var i__27925_27933 = (0);
while(true){
if((i__27925_27933 < count__27924_27932)){
var dep_27934 = cljs.core._nth.call(null,chunk__27923_27931,i__27925_27933);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27934;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27934));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27934,(depth + (1)),state);
} else {
}


var G__27935 = seq__27922_27930;
var G__27936 = chunk__27923_27931;
var G__27937 = count__27924_27932;
var G__27938 = (i__27925_27933 + (1));
seq__27922_27930 = G__27935;
chunk__27923_27931 = G__27936;
count__27924_27932 = G__27937;
i__27925_27933 = G__27938;
continue;
} else {
var temp__5457__auto___27939 = cljs.core.seq.call(null,seq__27922_27930);
if(temp__5457__auto___27939){
var seq__27922_27940__$1 = temp__5457__auto___27939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27922_27940__$1)){
var c__4461__auto___27941 = cljs.core.chunk_first.call(null,seq__27922_27940__$1);
var G__27942 = cljs.core.chunk_rest.call(null,seq__27922_27940__$1);
var G__27943 = c__4461__auto___27941;
var G__27944 = cljs.core.count.call(null,c__4461__auto___27941);
var G__27945 = (0);
seq__27922_27930 = G__27942;
chunk__27923_27931 = G__27943;
count__27924_27932 = G__27944;
i__27925_27933 = G__27945;
continue;
} else {
var dep_27946 = cljs.core.first.call(null,seq__27922_27940__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27946;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27946));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27946,(depth + (1)),state);
} else {
}


var G__27947 = cljs.core.next.call(null,seq__27922_27940__$1);
var G__27948 = null;
var G__27949 = (0);
var G__27950 = (0);
seq__27922_27930 = G__27947;
chunk__27923_27931 = G__27948;
count__27924_27932 = G__27949;
i__27925_27933 = G__27950;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27926){
var vec__27927 = p__27926;
var seq__27928 = cljs.core.seq.call(null,vec__27927);
var first__27929 = cljs.core.first.call(null,seq__27928);
var seq__27928__$1 = cljs.core.next.call(null,seq__27928);
var x = first__27929;
var xs = seq__27928__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27927,seq__27928,first__27929,seq__27928__$1,x,xs,get_deps__$1){
return (function (p1__27913_SHARP_){
return clojure.set.difference.call(null,p1__27913_SHARP_,x);
});})(vec__27927,seq__27928,first__27929,seq__27928__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27951 = cljs.core.seq.call(null,provides);
var chunk__27952 = null;
var count__27953 = (0);
var i__27954 = (0);
while(true){
if((i__27954 < count__27953)){
var prov = cljs.core._nth.call(null,chunk__27952,i__27954);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27955_27963 = cljs.core.seq.call(null,requires);
var chunk__27956_27964 = null;
var count__27957_27965 = (0);
var i__27958_27966 = (0);
while(true){
if((i__27958_27966 < count__27957_27965)){
var req_27967 = cljs.core._nth.call(null,chunk__27956_27964,i__27958_27966);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27967,prov);


var G__27968 = seq__27955_27963;
var G__27969 = chunk__27956_27964;
var G__27970 = count__27957_27965;
var G__27971 = (i__27958_27966 + (1));
seq__27955_27963 = G__27968;
chunk__27956_27964 = G__27969;
count__27957_27965 = G__27970;
i__27958_27966 = G__27971;
continue;
} else {
var temp__5457__auto___27972 = cljs.core.seq.call(null,seq__27955_27963);
if(temp__5457__auto___27972){
var seq__27955_27973__$1 = temp__5457__auto___27972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27955_27973__$1)){
var c__4461__auto___27974 = cljs.core.chunk_first.call(null,seq__27955_27973__$1);
var G__27975 = cljs.core.chunk_rest.call(null,seq__27955_27973__$1);
var G__27976 = c__4461__auto___27974;
var G__27977 = cljs.core.count.call(null,c__4461__auto___27974);
var G__27978 = (0);
seq__27955_27963 = G__27975;
chunk__27956_27964 = G__27976;
count__27957_27965 = G__27977;
i__27958_27966 = G__27978;
continue;
} else {
var req_27979 = cljs.core.first.call(null,seq__27955_27973__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27979,prov);


var G__27980 = cljs.core.next.call(null,seq__27955_27973__$1);
var G__27981 = null;
var G__27982 = (0);
var G__27983 = (0);
seq__27955_27963 = G__27980;
chunk__27956_27964 = G__27981;
count__27957_27965 = G__27982;
i__27958_27966 = G__27983;
continue;
}
} else {
}
}
break;
}


var G__27984 = seq__27951;
var G__27985 = chunk__27952;
var G__27986 = count__27953;
var G__27987 = (i__27954 + (1));
seq__27951 = G__27984;
chunk__27952 = G__27985;
count__27953 = G__27986;
i__27954 = G__27987;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27951);
if(temp__5457__auto__){
var seq__27951__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27951__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27951__$1);
var G__27988 = cljs.core.chunk_rest.call(null,seq__27951__$1);
var G__27989 = c__4461__auto__;
var G__27990 = cljs.core.count.call(null,c__4461__auto__);
var G__27991 = (0);
seq__27951 = G__27988;
chunk__27952 = G__27989;
count__27953 = G__27990;
i__27954 = G__27991;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27951__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27959_27992 = cljs.core.seq.call(null,requires);
var chunk__27960_27993 = null;
var count__27961_27994 = (0);
var i__27962_27995 = (0);
while(true){
if((i__27962_27995 < count__27961_27994)){
var req_27996 = cljs.core._nth.call(null,chunk__27960_27993,i__27962_27995);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27996,prov);


var G__27997 = seq__27959_27992;
var G__27998 = chunk__27960_27993;
var G__27999 = count__27961_27994;
var G__28000 = (i__27962_27995 + (1));
seq__27959_27992 = G__27997;
chunk__27960_27993 = G__27998;
count__27961_27994 = G__27999;
i__27962_27995 = G__28000;
continue;
} else {
var temp__5457__auto___28001__$1 = cljs.core.seq.call(null,seq__27959_27992);
if(temp__5457__auto___28001__$1){
var seq__27959_28002__$1 = temp__5457__auto___28001__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27959_28002__$1)){
var c__4461__auto___28003 = cljs.core.chunk_first.call(null,seq__27959_28002__$1);
var G__28004 = cljs.core.chunk_rest.call(null,seq__27959_28002__$1);
var G__28005 = c__4461__auto___28003;
var G__28006 = cljs.core.count.call(null,c__4461__auto___28003);
var G__28007 = (0);
seq__27959_27992 = G__28004;
chunk__27960_27993 = G__28005;
count__27961_27994 = G__28006;
i__27962_27995 = G__28007;
continue;
} else {
var req_28008 = cljs.core.first.call(null,seq__27959_28002__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28008,prov);


var G__28009 = cljs.core.next.call(null,seq__27959_28002__$1);
var G__28010 = null;
var G__28011 = (0);
var G__28012 = (0);
seq__27959_27992 = G__28009;
chunk__27960_27993 = G__28010;
count__27961_27994 = G__28011;
i__27962_27995 = G__28012;
continue;
}
} else {
}
}
break;
}


var G__28013 = cljs.core.next.call(null,seq__27951__$1);
var G__28014 = null;
var G__28015 = (0);
var G__28016 = (0);
seq__27951 = G__28013;
chunk__27952 = G__28014;
count__27953 = G__28015;
i__27954 = G__28016;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28017_28021 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28018_28022 = null;
var count__28019_28023 = (0);
var i__28020_28024 = (0);
while(true){
if((i__28020_28024 < count__28019_28023)){
var ns_28025 = cljs.core._nth.call(null,chunk__28018_28022,i__28020_28024);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28025);


var G__28026 = seq__28017_28021;
var G__28027 = chunk__28018_28022;
var G__28028 = count__28019_28023;
var G__28029 = (i__28020_28024 + (1));
seq__28017_28021 = G__28026;
chunk__28018_28022 = G__28027;
count__28019_28023 = G__28028;
i__28020_28024 = G__28029;
continue;
} else {
var temp__5457__auto___28030 = cljs.core.seq.call(null,seq__28017_28021);
if(temp__5457__auto___28030){
var seq__28017_28031__$1 = temp__5457__auto___28030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28017_28031__$1)){
var c__4461__auto___28032 = cljs.core.chunk_first.call(null,seq__28017_28031__$1);
var G__28033 = cljs.core.chunk_rest.call(null,seq__28017_28031__$1);
var G__28034 = c__4461__auto___28032;
var G__28035 = cljs.core.count.call(null,c__4461__auto___28032);
var G__28036 = (0);
seq__28017_28021 = G__28033;
chunk__28018_28022 = G__28034;
count__28019_28023 = G__28035;
i__28020_28024 = G__28036;
continue;
} else {
var ns_28037 = cljs.core.first.call(null,seq__28017_28031__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28037);


var G__28038 = cljs.core.next.call(null,seq__28017_28031__$1);
var G__28039 = null;
var G__28040 = (0);
var G__28041 = (0);
seq__28017_28021 = G__28038;
chunk__28018_28022 = G__28039;
count__28019_28023 = G__28040;
i__28020_28024 = G__28041;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28042__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28043__i = 0, G__28043__a = new Array(arguments.length -  0);
while (G__28043__i < G__28043__a.length) {G__28043__a[G__28043__i] = arguments[G__28043__i + 0]; ++G__28043__i;}
  args = new cljs.core.IndexedSeq(G__28043__a,0,null);
} 
return G__28042__delegate.call(this,args);};
G__28042.cljs$lang$maxFixedArity = 0;
G__28042.cljs$lang$applyTo = (function (arglist__28044){
var args = cljs.core.seq(arglist__28044);
return G__28042__delegate(args);
});
G__28042.cljs$core$IFn$_invoke$arity$variadic = G__28042__delegate;
return G__28042;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28045_SHARP_,p2__28046_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28045_SHARP_)),p2__28046_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28047_SHARP_,p2__28048_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28047_SHARP_),p2__28048_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28049 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28049.addCallback(((function (G__28049){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28049))
);

G__28049.addErrback(((function (G__28049){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28049))
);

return G__28049;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28050){if((e28050 instanceof Error)){
var e = e28050;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28050;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28051){if((e28051 instanceof Error)){
var e = e28051;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28051;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28052 = cljs.core._EQ_;
var expr__28053 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28052.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28053))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28052.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28053))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28052.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28053))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28052,expr__28053){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28052,expr__28053))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28055,callback){
var map__28056 = p__28055;
var map__28056__$1 = (((((!((map__28056 == null))))?(((((map__28056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28056):map__28056);
var file_msg = map__28056__$1;
var request_url = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28056,map__28056__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28056,map__28056__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__){
return (function (state_28094){
var state_val_28095 = (state_28094[(1)]);
if((state_val_28095 === (7))){
var inst_28090 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
var statearr_28096_28122 = state_28094__$1;
(statearr_28096_28122[(2)] = inst_28090);

(statearr_28096_28122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (1))){
var state_28094__$1 = state_28094;
var statearr_28097_28123 = state_28094__$1;
(statearr_28097_28123[(2)] = null);

(statearr_28097_28123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (4))){
var inst_28060 = (state_28094[(7)]);
var inst_28060__$1 = (state_28094[(2)]);
var state_28094__$1 = (function (){var statearr_28098 = state_28094;
(statearr_28098[(7)] = inst_28060__$1);

return statearr_28098;
})();
if(cljs.core.truth_(inst_28060__$1)){
var statearr_28099_28124 = state_28094__$1;
(statearr_28099_28124[(1)] = (5));

} else {
var statearr_28100_28125 = state_28094__$1;
(statearr_28100_28125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (15))){
var inst_28073 = (state_28094[(8)]);
var inst_28075 = (state_28094[(9)]);
var inst_28077 = inst_28075.call(null,inst_28073);
var state_28094__$1 = state_28094;
var statearr_28101_28126 = state_28094__$1;
(statearr_28101_28126[(2)] = inst_28077);

(statearr_28101_28126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (13))){
var inst_28084 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
var statearr_28102_28127 = state_28094__$1;
(statearr_28102_28127[(2)] = inst_28084);

(statearr_28102_28127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (6))){
var state_28094__$1 = state_28094;
var statearr_28103_28128 = state_28094__$1;
(statearr_28103_28128[(2)] = null);

(statearr_28103_28128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (17))){
var inst_28081 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
var statearr_28104_28129 = state_28094__$1;
(statearr_28104_28129[(2)] = inst_28081);

(statearr_28104_28129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (3))){
var inst_28092 = (state_28094[(2)]);
var state_28094__$1 = state_28094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28094__$1,inst_28092);
} else {
if((state_val_28095 === (12))){
var state_28094__$1 = state_28094;
var statearr_28105_28130 = state_28094__$1;
(statearr_28105_28130[(2)] = null);

(statearr_28105_28130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (2))){
var state_28094__$1 = state_28094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28094__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28095 === (11))){
var inst_28065 = (state_28094[(10)]);
var inst_28071 = figwheel.client.file_reloading.blocking_load.call(null,inst_28065);
var state_28094__$1 = state_28094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28094__$1,(14),inst_28071);
} else {
if((state_val_28095 === (9))){
var inst_28065 = (state_28094[(10)]);
var state_28094__$1 = state_28094;
if(cljs.core.truth_(inst_28065)){
var statearr_28106_28131 = state_28094__$1;
(statearr_28106_28131[(1)] = (11));

} else {
var statearr_28107_28132 = state_28094__$1;
(statearr_28107_28132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (5))){
var inst_28060 = (state_28094[(7)]);
var inst_28066 = (state_28094[(11)]);
var inst_28065 = cljs.core.nth.call(null,inst_28060,(0),null);
var inst_28066__$1 = cljs.core.nth.call(null,inst_28060,(1),null);
var state_28094__$1 = (function (){var statearr_28108 = state_28094;
(statearr_28108[(10)] = inst_28065);

(statearr_28108[(11)] = inst_28066__$1);

return statearr_28108;
})();
if(cljs.core.truth_(inst_28066__$1)){
var statearr_28109_28133 = state_28094__$1;
(statearr_28109_28133[(1)] = (8));

} else {
var statearr_28110_28134 = state_28094__$1;
(statearr_28110_28134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (14))){
var inst_28065 = (state_28094[(10)]);
var inst_28075 = (state_28094[(9)]);
var inst_28073 = (state_28094[(2)]);
var inst_28074 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28075__$1 = cljs.core.get.call(null,inst_28074,inst_28065);
var state_28094__$1 = (function (){var statearr_28111 = state_28094;
(statearr_28111[(8)] = inst_28073);

(statearr_28111[(9)] = inst_28075__$1);

return statearr_28111;
})();
if(cljs.core.truth_(inst_28075__$1)){
var statearr_28112_28135 = state_28094__$1;
(statearr_28112_28135[(1)] = (15));

} else {
var statearr_28113_28136 = state_28094__$1;
(statearr_28113_28136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (16))){
var inst_28073 = (state_28094[(8)]);
var inst_28079 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28073);
var state_28094__$1 = state_28094;
var statearr_28114_28137 = state_28094__$1;
(statearr_28114_28137[(2)] = inst_28079);

(statearr_28114_28137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (10))){
var inst_28086 = (state_28094[(2)]);
var state_28094__$1 = (function (){var statearr_28115 = state_28094;
(statearr_28115[(12)] = inst_28086);

return statearr_28115;
})();
var statearr_28116_28138 = state_28094__$1;
(statearr_28116_28138[(2)] = null);

(statearr_28116_28138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28095 === (8))){
var inst_28066 = (state_28094[(11)]);
var inst_28068 = eval(inst_28066);
var state_28094__$1 = state_28094;
var statearr_28117_28139 = state_28094__$1;
(statearr_28117_28139[(2)] = inst_28068);

(statearr_28117_28139[(1)] = (10));


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
});})(c__24480__auto__))
;
return ((function (switch__24385__auto__,c__24480__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24386__auto__ = null;
var figwheel$client$file_reloading$state_machine__24386__auto____0 = (function (){
var statearr_28118 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28118[(0)] = figwheel$client$file_reloading$state_machine__24386__auto__);

(statearr_28118[(1)] = (1));

return statearr_28118;
});
var figwheel$client$file_reloading$state_machine__24386__auto____1 = (function (state_28094){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_28094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e28119){if((e28119 instanceof Object)){
var ex__24389__auto__ = e28119;
var statearr_28120_28140 = state_28094;
(statearr_28120_28140[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28141 = state_28094;
state_28094 = G__28141;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24386__auto__ = function(state_28094){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24386__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24386__auto____1.call(this,state_28094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24386__auto____0;
figwheel$client$file_reloading$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24386__auto____1;
return figwheel$client$file_reloading$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__))
})();
var state__24482__auto__ = (function (){var statearr_28121 = f__24481__auto__.call(null);
(statearr_28121[(6)] = c__24480__auto__);

return statearr_28121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__))
);

return c__24480__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28143 = arguments.length;
switch (G__28143) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28145,callback){
var map__28146 = p__28145;
var map__28146__$1 = (((((!((map__28146 == null))))?(((((map__28146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28146):map__28146);
var file_msg = map__28146__$1;
var namespace = cljs.core.get.call(null,map__28146__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28146,map__28146__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28146,map__28146__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28148){
var map__28149 = p__28148;
var map__28149__$1 = (((((!((map__28149 == null))))?(((((map__28149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28149):map__28149);
var file_msg = map__28149__$1;
var namespace = cljs.core.get.call(null,map__28149__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28151){
var map__28152 = p__28151;
var map__28152__$1 = (((((!((map__28152 == null))))?(((((map__28152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28152):map__28152);
var file_msg = map__28152__$1;
var namespace = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28154,callback){
var map__28155 = p__28154;
var map__28155__$1 = (((((!((map__28155 == null))))?(((((map__28155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28155):map__28155);
var file_msg = map__28155__$1;
var request_url = cljs.core.get.call(null,map__28155__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28155__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24480__auto___28205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___28205,out){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___28205,out){
return (function (state_28190){
var state_val_28191 = (state_28190[(1)]);
if((state_val_28191 === (1))){
var inst_28164 = cljs.core.seq.call(null,files);
var inst_28165 = cljs.core.first.call(null,inst_28164);
var inst_28166 = cljs.core.next.call(null,inst_28164);
var inst_28167 = files;
var state_28190__$1 = (function (){var statearr_28192 = state_28190;
(statearr_28192[(7)] = inst_28166);

(statearr_28192[(8)] = inst_28165);

(statearr_28192[(9)] = inst_28167);

return statearr_28192;
})();
var statearr_28193_28206 = state_28190__$1;
(statearr_28193_28206[(2)] = null);

(statearr_28193_28206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (2))){
var inst_28173 = (state_28190[(10)]);
var inst_28167 = (state_28190[(9)]);
var inst_28172 = cljs.core.seq.call(null,inst_28167);
var inst_28173__$1 = cljs.core.first.call(null,inst_28172);
var inst_28174 = cljs.core.next.call(null,inst_28172);
var inst_28175 = (inst_28173__$1 == null);
var inst_28176 = cljs.core.not.call(null,inst_28175);
var state_28190__$1 = (function (){var statearr_28194 = state_28190;
(statearr_28194[(10)] = inst_28173__$1);

(statearr_28194[(11)] = inst_28174);

return statearr_28194;
})();
if(inst_28176){
var statearr_28195_28207 = state_28190__$1;
(statearr_28195_28207[(1)] = (4));

} else {
var statearr_28196_28208 = state_28190__$1;
(statearr_28196_28208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (3))){
var inst_28188 = (state_28190[(2)]);
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28190__$1,inst_28188);
} else {
if((state_val_28191 === (4))){
var inst_28173 = (state_28190[(10)]);
var inst_28178 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28173);
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28190__$1,(7),inst_28178);
} else {
if((state_val_28191 === (5))){
var inst_28184 = cljs.core.async.close_BANG_.call(null,out);
var state_28190__$1 = state_28190;
var statearr_28197_28209 = state_28190__$1;
(statearr_28197_28209[(2)] = inst_28184);

(statearr_28197_28209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (6))){
var inst_28186 = (state_28190[(2)]);
var state_28190__$1 = state_28190;
var statearr_28198_28210 = state_28190__$1;
(statearr_28198_28210[(2)] = inst_28186);

(statearr_28198_28210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (7))){
var inst_28174 = (state_28190[(11)]);
var inst_28180 = (state_28190[(2)]);
var inst_28181 = cljs.core.async.put_BANG_.call(null,out,inst_28180);
var inst_28167 = inst_28174;
var state_28190__$1 = (function (){var statearr_28199 = state_28190;
(statearr_28199[(12)] = inst_28181);

(statearr_28199[(9)] = inst_28167);

return statearr_28199;
})();
var statearr_28200_28211 = state_28190__$1;
(statearr_28200_28211[(2)] = null);

(statearr_28200_28211[(1)] = (2));


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
});})(c__24480__auto___28205,out))
;
return ((function (switch__24385__auto__,c__24480__auto___28205,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto____0 = (function (){
var statearr_28201 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28201[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto__);

(statearr_28201[(1)] = (1));

return statearr_28201;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto____1 = (function (state_28190){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_28190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e28202){if((e28202 instanceof Object)){
var ex__24389__auto__ = e28202;
var statearr_28203_28212 = state_28190;
(statearr_28203_28212[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28213 = state_28190;
state_28190 = G__28213;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto__ = function(state_28190){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto____1.call(this,state_28190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___28205,out))
})();
var state__24482__auto__ = (function (){var statearr_28204 = f__24481__auto__.call(null);
(statearr_28204[(6)] = c__24480__auto___28205);

return statearr_28204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___28205,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28214,opts){
var map__28215 = p__28214;
var map__28215__$1 = (((((!((map__28215 == null))))?(((((map__28215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28215):map__28215);
var eval_body = cljs.core.get.call(null,map__28215__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28215__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28217){var e = e28217;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28218_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28218_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28219){
var vec__28220 = p__28219;
var k = cljs.core.nth.call(null,vec__28220,(0),null);
var v = cljs.core.nth.call(null,vec__28220,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28223){
var vec__28224 = p__28223;
var k = cljs.core.nth.call(null,vec__28224,(0),null);
var v = cljs.core.nth.call(null,vec__28224,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28230,p__28231){
var map__28232 = p__28230;
var map__28232__$1 = (((((!((map__28232 == null))))?(((((map__28232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28232):map__28232);
var opts = map__28232__$1;
var before_jsload = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28233 = p__28231;
var map__28233__$1 = (((((!((map__28233 == null))))?(((((map__28233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28233):map__28233);
var msg = map__28233__$1;
var files = cljs.core.get.call(null,map__28233__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28233__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28233__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28387){
var state_val_28388 = (state_28387[(1)]);
if((state_val_28388 === (7))){
var inst_28250 = (state_28387[(7)]);
var inst_28247 = (state_28387[(8)]);
var inst_28249 = (state_28387[(9)]);
var inst_28248 = (state_28387[(10)]);
var inst_28255 = cljs.core._nth.call(null,inst_28248,inst_28250);
var inst_28256 = figwheel.client.file_reloading.eval_body.call(null,inst_28255,opts);
var inst_28257 = (inst_28250 + (1));
var tmp28389 = inst_28247;
var tmp28390 = inst_28249;
var tmp28391 = inst_28248;
var inst_28247__$1 = tmp28389;
var inst_28248__$1 = tmp28391;
var inst_28249__$1 = tmp28390;
var inst_28250__$1 = inst_28257;
var state_28387__$1 = (function (){var statearr_28392 = state_28387;
(statearr_28392[(11)] = inst_28256);

(statearr_28392[(7)] = inst_28250__$1);

(statearr_28392[(8)] = inst_28247__$1);

(statearr_28392[(9)] = inst_28249__$1);

(statearr_28392[(10)] = inst_28248__$1);

return statearr_28392;
})();
var statearr_28393_28476 = state_28387__$1;
(statearr_28393_28476[(2)] = null);

(statearr_28393_28476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (20))){
var inst_28290 = (state_28387[(12)]);
var inst_28298 = figwheel.client.file_reloading.sort_files.call(null,inst_28290);
var state_28387__$1 = state_28387;
var statearr_28394_28477 = state_28387__$1;
(statearr_28394_28477[(2)] = inst_28298);

(statearr_28394_28477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (27))){
var state_28387__$1 = state_28387;
var statearr_28395_28478 = state_28387__$1;
(statearr_28395_28478[(2)] = null);

(statearr_28395_28478[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (1))){
var inst_28239 = (state_28387[(13)]);
var inst_28236 = before_jsload.call(null,files);
var inst_28237 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28238 = (function (){return ((function (inst_28239,inst_28236,inst_28237,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28227_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28227_SHARP_);
});
;})(inst_28239,inst_28236,inst_28237,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28239__$1 = cljs.core.filter.call(null,inst_28238,files);
var inst_28240 = cljs.core.not_empty.call(null,inst_28239__$1);
var state_28387__$1 = (function (){var statearr_28396 = state_28387;
(statearr_28396[(13)] = inst_28239__$1);

(statearr_28396[(14)] = inst_28237);

(statearr_28396[(15)] = inst_28236);

return statearr_28396;
})();
if(cljs.core.truth_(inst_28240)){
var statearr_28397_28479 = state_28387__$1;
(statearr_28397_28479[(1)] = (2));

} else {
var statearr_28398_28480 = state_28387__$1;
(statearr_28398_28480[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (24))){
var state_28387__$1 = state_28387;
var statearr_28399_28481 = state_28387__$1;
(statearr_28399_28481[(2)] = null);

(statearr_28399_28481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (39))){
var inst_28340 = (state_28387[(16)]);
var state_28387__$1 = state_28387;
var statearr_28400_28482 = state_28387__$1;
(statearr_28400_28482[(2)] = inst_28340);

(statearr_28400_28482[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (46))){
var inst_28382 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28401_28483 = state_28387__$1;
(statearr_28401_28483[(2)] = inst_28382);

(statearr_28401_28483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (4))){
var inst_28284 = (state_28387[(2)]);
var inst_28285 = cljs.core.List.EMPTY;
var inst_28286 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28285);
var inst_28287 = (function (){return ((function (inst_28284,inst_28285,inst_28286,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28228_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28228_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28228_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28228_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28284,inst_28285,inst_28286,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28288 = cljs.core.filter.call(null,inst_28287,files);
var inst_28289 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28290 = cljs.core.concat.call(null,inst_28288,inst_28289);
var state_28387__$1 = (function (){var statearr_28402 = state_28387;
(statearr_28402[(17)] = inst_28284);

(statearr_28402[(18)] = inst_28286);

(statearr_28402[(12)] = inst_28290);

return statearr_28402;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28403_28484 = state_28387__$1;
(statearr_28403_28484[(1)] = (16));

} else {
var statearr_28404_28485 = state_28387__$1;
(statearr_28404_28485[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (15))){
var inst_28274 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28405_28486 = state_28387__$1;
(statearr_28405_28486[(2)] = inst_28274);

(statearr_28405_28486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (21))){
var inst_28300 = (state_28387[(19)]);
var inst_28300__$1 = (state_28387[(2)]);
var inst_28301 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28300__$1);
var state_28387__$1 = (function (){var statearr_28406 = state_28387;
(statearr_28406[(19)] = inst_28300__$1);

return statearr_28406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28387__$1,(22),inst_28301);
} else {
if((state_val_28388 === (31))){
var inst_28385 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28387__$1,inst_28385);
} else {
if((state_val_28388 === (32))){
var inst_28340 = (state_28387[(16)]);
var inst_28345 = inst_28340.cljs$lang$protocol_mask$partition0$;
var inst_28346 = (inst_28345 & (64));
var inst_28347 = inst_28340.cljs$core$ISeq$;
var inst_28348 = (cljs.core.PROTOCOL_SENTINEL === inst_28347);
var inst_28349 = ((inst_28346) || (inst_28348));
var state_28387__$1 = state_28387;
if(cljs.core.truth_(inst_28349)){
var statearr_28407_28487 = state_28387__$1;
(statearr_28407_28487[(1)] = (35));

} else {
var statearr_28408_28488 = state_28387__$1;
(statearr_28408_28488[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (40))){
var inst_28362 = (state_28387[(20)]);
var inst_28361 = (state_28387[(2)]);
var inst_28362__$1 = cljs.core.get.call(null,inst_28361,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28363 = cljs.core.get.call(null,inst_28361,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28364 = cljs.core.not_empty.call(null,inst_28362__$1);
var state_28387__$1 = (function (){var statearr_28409 = state_28387;
(statearr_28409[(21)] = inst_28363);

(statearr_28409[(20)] = inst_28362__$1);

return statearr_28409;
})();
if(cljs.core.truth_(inst_28364)){
var statearr_28410_28489 = state_28387__$1;
(statearr_28410_28489[(1)] = (41));

} else {
var statearr_28411_28490 = state_28387__$1;
(statearr_28411_28490[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (33))){
var state_28387__$1 = state_28387;
var statearr_28412_28491 = state_28387__$1;
(statearr_28412_28491[(2)] = false);

(statearr_28412_28491[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (13))){
var inst_28260 = (state_28387[(22)]);
var inst_28264 = cljs.core.chunk_first.call(null,inst_28260);
var inst_28265 = cljs.core.chunk_rest.call(null,inst_28260);
var inst_28266 = cljs.core.count.call(null,inst_28264);
var inst_28247 = inst_28265;
var inst_28248 = inst_28264;
var inst_28249 = inst_28266;
var inst_28250 = (0);
var state_28387__$1 = (function (){var statearr_28413 = state_28387;
(statearr_28413[(7)] = inst_28250);

(statearr_28413[(8)] = inst_28247);

(statearr_28413[(9)] = inst_28249);

(statearr_28413[(10)] = inst_28248);

return statearr_28413;
})();
var statearr_28414_28492 = state_28387__$1;
(statearr_28414_28492[(2)] = null);

(statearr_28414_28492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (22))){
var inst_28304 = (state_28387[(23)]);
var inst_28303 = (state_28387[(24)]);
var inst_28300 = (state_28387[(19)]);
var inst_28308 = (state_28387[(25)]);
var inst_28303__$1 = (state_28387[(2)]);
var inst_28304__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28303__$1);
var inst_28305 = (function (){var all_files = inst_28300;
var res_SINGLEQUOTE_ = inst_28303__$1;
var res = inst_28304__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28304,inst_28303,inst_28300,inst_28308,inst_28303__$1,inst_28304__$1,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28229_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28229_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28304,inst_28303,inst_28300,inst_28308,inst_28303__$1,inst_28304__$1,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28306 = cljs.core.filter.call(null,inst_28305,inst_28303__$1);
var inst_28307 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28308__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28307);
var inst_28309 = cljs.core.not_empty.call(null,inst_28308__$1);
var state_28387__$1 = (function (){var statearr_28415 = state_28387;
(statearr_28415[(23)] = inst_28304__$1);

(statearr_28415[(24)] = inst_28303__$1);

(statearr_28415[(26)] = inst_28306);

(statearr_28415[(25)] = inst_28308__$1);

return statearr_28415;
})();
if(cljs.core.truth_(inst_28309)){
var statearr_28416_28493 = state_28387__$1;
(statearr_28416_28493[(1)] = (23));

} else {
var statearr_28417_28494 = state_28387__$1;
(statearr_28417_28494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (36))){
var state_28387__$1 = state_28387;
var statearr_28418_28495 = state_28387__$1;
(statearr_28418_28495[(2)] = false);

(statearr_28418_28495[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (41))){
var inst_28362 = (state_28387[(20)]);
var inst_28366 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28367 = cljs.core.map.call(null,inst_28366,inst_28362);
var inst_28368 = cljs.core.pr_str.call(null,inst_28367);
var inst_28369 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28368)].join('');
var inst_28370 = figwheel.client.utils.log.call(null,inst_28369);
var state_28387__$1 = state_28387;
var statearr_28419_28496 = state_28387__$1;
(statearr_28419_28496[(2)] = inst_28370);

(statearr_28419_28496[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (43))){
var inst_28363 = (state_28387[(21)]);
var inst_28373 = (state_28387[(2)]);
var inst_28374 = cljs.core.not_empty.call(null,inst_28363);
var state_28387__$1 = (function (){var statearr_28420 = state_28387;
(statearr_28420[(27)] = inst_28373);

return statearr_28420;
})();
if(cljs.core.truth_(inst_28374)){
var statearr_28421_28497 = state_28387__$1;
(statearr_28421_28497[(1)] = (44));

} else {
var statearr_28422_28498 = state_28387__$1;
(statearr_28422_28498[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (29))){
var inst_28304 = (state_28387[(23)]);
var inst_28303 = (state_28387[(24)]);
var inst_28300 = (state_28387[(19)]);
var inst_28306 = (state_28387[(26)]);
var inst_28340 = (state_28387[(16)]);
var inst_28308 = (state_28387[(25)]);
var inst_28336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28339 = (function (){var all_files = inst_28300;
var res_SINGLEQUOTE_ = inst_28303;
var res = inst_28304;
var files_not_loaded = inst_28306;
var dependencies_that_loaded = inst_28308;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28304,inst_28303,inst_28300,inst_28306,inst_28340,inst_28308,inst_28336,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28338){
var map__28423 = p__28338;
var map__28423__$1 = (((((!((map__28423 == null))))?(((((map__28423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28423):map__28423);
var namespace = cljs.core.get.call(null,map__28423__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28304,inst_28303,inst_28300,inst_28306,inst_28340,inst_28308,inst_28336,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28340__$1 = cljs.core.group_by.call(null,inst_28339,inst_28306);
var inst_28342 = (inst_28340__$1 == null);
var inst_28343 = cljs.core.not.call(null,inst_28342);
var state_28387__$1 = (function (){var statearr_28425 = state_28387;
(statearr_28425[(28)] = inst_28336);

(statearr_28425[(16)] = inst_28340__$1);

return statearr_28425;
})();
if(inst_28343){
var statearr_28426_28499 = state_28387__$1;
(statearr_28426_28499[(1)] = (32));

} else {
var statearr_28427_28500 = state_28387__$1;
(statearr_28427_28500[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (44))){
var inst_28363 = (state_28387[(21)]);
var inst_28376 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28363);
var inst_28377 = cljs.core.pr_str.call(null,inst_28376);
var inst_28378 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28377)].join('');
var inst_28379 = figwheel.client.utils.log.call(null,inst_28378);
var state_28387__$1 = state_28387;
var statearr_28428_28501 = state_28387__$1;
(statearr_28428_28501[(2)] = inst_28379);

(statearr_28428_28501[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (6))){
var inst_28281 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28429_28502 = state_28387__$1;
(statearr_28429_28502[(2)] = inst_28281);

(statearr_28429_28502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (28))){
var inst_28306 = (state_28387[(26)]);
var inst_28333 = (state_28387[(2)]);
var inst_28334 = cljs.core.not_empty.call(null,inst_28306);
var state_28387__$1 = (function (){var statearr_28430 = state_28387;
(statearr_28430[(29)] = inst_28333);

return statearr_28430;
})();
if(cljs.core.truth_(inst_28334)){
var statearr_28431_28503 = state_28387__$1;
(statearr_28431_28503[(1)] = (29));

} else {
var statearr_28432_28504 = state_28387__$1;
(statearr_28432_28504[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (25))){
var inst_28304 = (state_28387[(23)]);
var inst_28320 = (state_28387[(2)]);
var inst_28321 = cljs.core.not_empty.call(null,inst_28304);
var state_28387__$1 = (function (){var statearr_28433 = state_28387;
(statearr_28433[(30)] = inst_28320);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28321)){
var statearr_28434_28505 = state_28387__$1;
(statearr_28434_28505[(1)] = (26));

} else {
var statearr_28435_28506 = state_28387__$1;
(statearr_28435_28506[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (34))){
var inst_28356 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
if(cljs.core.truth_(inst_28356)){
var statearr_28436_28507 = state_28387__$1;
(statearr_28436_28507[(1)] = (38));

} else {
var statearr_28437_28508 = state_28387__$1;
(statearr_28437_28508[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (17))){
var state_28387__$1 = state_28387;
var statearr_28438_28509 = state_28387__$1;
(statearr_28438_28509[(2)] = recompile_dependents);

(statearr_28438_28509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (3))){
var state_28387__$1 = state_28387;
var statearr_28439_28510 = state_28387__$1;
(statearr_28439_28510[(2)] = null);

(statearr_28439_28510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (12))){
var inst_28277 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28440_28511 = state_28387__$1;
(statearr_28440_28511[(2)] = inst_28277);

(statearr_28440_28511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (2))){
var inst_28239 = (state_28387[(13)]);
var inst_28246 = cljs.core.seq.call(null,inst_28239);
var inst_28247 = inst_28246;
var inst_28248 = null;
var inst_28249 = (0);
var inst_28250 = (0);
var state_28387__$1 = (function (){var statearr_28441 = state_28387;
(statearr_28441[(7)] = inst_28250);

(statearr_28441[(8)] = inst_28247);

(statearr_28441[(9)] = inst_28249);

(statearr_28441[(10)] = inst_28248);

return statearr_28441;
})();
var statearr_28442_28512 = state_28387__$1;
(statearr_28442_28512[(2)] = null);

(statearr_28442_28512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (23))){
var inst_28304 = (state_28387[(23)]);
var inst_28303 = (state_28387[(24)]);
var inst_28300 = (state_28387[(19)]);
var inst_28306 = (state_28387[(26)]);
var inst_28308 = (state_28387[(25)]);
var inst_28311 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28313 = (function (){var all_files = inst_28300;
var res_SINGLEQUOTE_ = inst_28303;
var res = inst_28304;
var files_not_loaded = inst_28306;
var dependencies_that_loaded = inst_28308;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28304,inst_28303,inst_28300,inst_28306,inst_28308,inst_28311,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28312){
var map__28443 = p__28312;
var map__28443__$1 = (((((!((map__28443 == null))))?(((((map__28443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28443):map__28443);
var request_url = cljs.core.get.call(null,map__28443__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28304,inst_28303,inst_28300,inst_28306,inst_28308,inst_28311,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28314 = cljs.core.reverse.call(null,inst_28308);
var inst_28315 = cljs.core.map.call(null,inst_28313,inst_28314);
var inst_28316 = cljs.core.pr_str.call(null,inst_28315);
var inst_28317 = figwheel.client.utils.log.call(null,inst_28316);
var state_28387__$1 = (function (){var statearr_28445 = state_28387;
(statearr_28445[(31)] = inst_28311);

return statearr_28445;
})();
var statearr_28446_28513 = state_28387__$1;
(statearr_28446_28513[(2)] = inst_28317);

(statearr_28446_28513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (35))){
var state_28387__$1 = state_28387;
var statearr_28447_28514 = state_28387__$1;
(statearr_28447_28514[(2)] = true);

(statearr_28447_28514[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (19))){
var inst_28290 = (state_28387[(12)]);
var inst_28296 = figwheel.client.file_reloading.expand_files.call(null,inst_28290);
var state_28387__$1 = state_28387;
var statearr_28448_28515 = state_28387__$1;
(statearr_28448_28515[(2)] = inst_28296);

(statearr_28448_28515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (11))){
var state_28387__$1 = state_28387;
var statearr_28449_28516 = state_28387__$1;
(statearr_28449_28516[(2)] = null);

(statearr_28449_28516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (9))){
var inst_28279 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28450_28517 = state_28387__$1;
(statearr_28450_28517[(2)] = inst_28279);

(statearr_28450_28517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (5))){
var inst_28250 = (state_28387[(7)]);
var inst_28249 = (state_28387[(9)]);
var inst_28252 = (inst_28250 < inst_28249);
var inst_28253 = inst_28252;
var state_28387__$1 = state_28387;
if(cljs.core.truth_(inst_28253)){
var statearr_28451_28518 = state_28387__$1;
(statearr_28451_28518[(1)] = (7));

} else {
var statearr_28452_28519 = state_28387__$1;
(statearr_28452_28519[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (14))){
var inst_28260 = (state_28387[(22)]);
var inst_28269 = cljs.core.first.call(null,inst_28260);
var inst_28270 = figwheel.client.file_reloading.eval_body.call(null,inst_28269,opts);
var inst_28271 = cljs.core.next.call(null,inst_28260);
var inst_28247 = inst_28271;
var inst_28248 = null;
var inst_28249 = (0);
var inst_28250 = (0);
var state_28387__$1 = (function (){var statearr_28453 = state_28387;
(statearr_28453[(7)] = inst_28250);

(statearr_28453[(8)] = inst_28247);

(statearr_28453[(32)] = inst_28270);

(statearr_28453[(9)] = inst_28249);

(statearr_28453[(10)] = inst_28248);

return statearr_28453;
})();
var statearr_28454_28520 = state_28387__$1;
(statearr_28454_28520[(2)] = null);

(statearr_28454_28520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (45))){
var state_28387__$1 = state_28387;
var statearr_28455_28521 = state_28387__$1;
(statearr_28455_28521[(2)] = null);

(statearr_28455_28521[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (26))){
var inst_28304 = (state_28387[(23)]);
var inst_28303 = (state_28387[(24)]);
var inst_28300 = (state_28387[(19)]);
var inst_28306 = (state_28387[(26)]);
var inst_28308 = (state_28387[(25)]);
var inst_28323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28325 = (function (){var all_files = inst_28300;
var res_SINGLEQUOTE_ = inst_28303;
var res = inst_28304;
var files_not_loaded = inst_28306;
var dependencies_that_loaded = inst_28308;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28304,inst_28303,inst_28300,inst_28306,inst_28308,inst_28323,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28324){
var map__28456 = p__28324;
var map__28456__$1 = (((((!((map__28456 == null))))?(((((map__28456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28456):map__28456);
var namespace = cljs.core.get.call(null,map__28456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28304,inst_28303,inst_28300,inst_28306,inst_28308,inst_28323,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28326 = cljs.core.map.call(null,inst_28325,inst_28304);
var inst_28327 = cljs.core.pr_str.call(null,inst_28326);
var inst_28328 = figwheel.client.utils.log.call(null,inst_28327);
var inst_28329 = (function (){var all_files = inst_28300;
var res_SINGLEQUOTE_ = inst_28303;
var res = inst_28304;
var files_not_loaded = inst_28306;
var dependencies_that_loaded = inst_28308;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28304,inst_28303,inst_28300,inst_28306,inst_28308,inst_28323,inst_28325,inst_28326,inst_28327,inst_28328,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28304,inst_28303,inst_28300,inst_28306,inst_28308,inst_28323,inst_28325,inst_28326,inst_28327,inst_28328,state_val_28388,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28330 = setTimeout(inst_28329,(10));
var state_28387__$1 = (function (){var statearr_28458 = state_28387;
(statearr_28458[(33)] = inst_28323);

(statearr_28458[(34)] = inst_28328);

return statearr_28458;
})();
var statearr_28459_28522 = state_28387__$1;
(statearr_28459_28522[(2)] = inst_28330);

(statearr_28459_28522[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (16))){
var state_28387__$1 = state_28387;
var statearr_28460_28523 = state_28387__$1;
(statearr_28460_28523[(2)] = reload_dependents);

(statearr_28460_28523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (38))){
var inst_28340 = (state_28387[(16)]);
var inst_28358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28340);
var state_28387__$1 = state_28387;
var statearr_28461_28524 = state_28387__$1;
(statearr_28461_28524[(2)] = inst_28358);

(statearr_28461_28524[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (30))){
var state_28387__$1 = state_28387;
var statearr_28462_28525 = state_28387__$1;
(statearr_28462_28525[(2)] = null);

(statearr_28462_28525[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (10))){
var inst_28260 = (state_28387[(22)]);
var inst_28262 = cljs.core.chunked_seq_QMARK_.call(null,inst_28260);
var state_28387__$1 = state_28387;
if(inst_28262){
var statearr_28463_28526 = state_28387__$1;
(statearr_28463_28526[(1)] = (13));

} else {
var statearr_28464_28527 = state_28387__$1;
(statearr_28464_28527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (18))){
var inst_28294 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
if(cljs.core.truth_(inst_28294)){
var statearr_28465_28528 = state_28387__$1;
(statearr_28465_28528[(1)] = (19));

} else {
var statearr_28466_28529 = state_28387__$1;
(statearr_28466_28529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (42))){
var state_28387__$1 = state_28387;
var statearr_28467_28530 = state_28387__$1;
(statearr_28467_28530[(2)] = null);

(statearr_28467_28530[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (37))){
var inst_28353 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28468_28531 = state_28387__$1;
(statearr_28468_28531[(2)] = inst_28353);

(statearr_28468_28531[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (8))){
var inst_28260 = (state_28387[(22)]);
var inst_28247 = (state_28387[(8)]);
var inst_28260__$1 = cljs.core.seq.call(null,inst_28247);
var state_28387__$1 = (function (){var statearr_28469 = state_28387;
(statearr_28469[(22)] = inst_28260__$1);

return statearr_28469;
})();
if(inst_28260__$1){
var statearr_28470_28532 = state_28387__$1;
(statearr_28470_28532[(1)] = (10));

} else {
var statearr_28471_28533 = state_28387__$1;
(statearr_28471_28533[(1)] = (11));

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
});})(c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24385__auto__,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto____0 = (function (){
var statearr_28472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28472[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto__);

(statearr_28472[(1)] = (1));

return statearr_28472;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto____1 = (function (state_28387){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_28387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e28473){if((e28473 instanceof Object)){
var ex__24389__auto__ = e28473;
var statearr_28474_28534 = state_28387;
(statearr_28474_28534[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28535 = state_28387;
state_28387 = G__28535;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto__ = function(state_28387){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto____1.call(this,state_28387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24482__auto__ = (function (){var statearr_28475 = f__24481__auto__.call(null);
(statearr_28475[(6)] = c__24480__auto__);

return statearr_28475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__,map__28232,map__28232__$1,opts,before_jsload,on_jsload,reload_dependents,map__28233,map__28233__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24480__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28538,link){
var map__28539 = p__28538;
var map__28539__$1 = (((((!((map__28539 == null))))?(((((map__28539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28539):map__28539);
var file = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__28539,map__28539__$1,file){
return (function (p1__28536_SHARP_,p2__28537_SHARP_){
if(cljs.core._EQ_.call(null,p1__28536_SHARP_,p2__28537_SHARP_)){
return p1__28536_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__28539,map__28539__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28542){
var map__28543 = p__28542;
var map__28543__$1 = (((((!((map__28543 == null))))?(((((map__28543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28543):map__28543);
var match_length = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28541_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28541_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28545_SHARP_,p2__28546_SHARP_){
return cljs.core.assoc.call(null,p1__28545_SHARP_,cljs.core.get.call(null,p2__28546_SHARP_,key),p2__28546_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28547 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28547);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28547);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28548,p__28549){
var map__28550 = p__28548;
var map__28550__$1 = (((((!((map__28550 == null))))?(((((map__28550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28550):map__28550);
var on_cssload = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28551 = p__28549;
var map__28551__$1 = (((((!((map__28551 == null))))?(((((map__28551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28551):map__28551);
var files_msg = map__28551__$1;
var files = cljs.core.get.call(null,map__28551__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1541536692252
