// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24540 = arguments.length;
switch (G__24540) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24541 = (function (f,blockable,meta24542){
this.f = f;
this.blockable = blockable;
this.meta24542 = meta24542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24543,meta24542__$1){
var self__ = this;
var _24543__$1 = this;
return (new cljs.core.async.t_cljs$core$async24541(self__.f,self__.blockable,meta24542__$1));
});

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24543){
var self__ = this;
var _24543__$1 = this;
return self__.meta24542;
});

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24542","meta24542",304755355,null)], null);
});

cljs.core.async.t_cljs$core$async24541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24541";

cljs.core.async.t_cljs$core$async24541.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24541");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24541.
 */
cljs.core.async.__GT_t_cljs$core$async24541 = (function cljs$core$async$__GT_t_cljs$core$async24541(f__$1,blockable__$1,meta24542){
return (new cljs.core.async.t_cljs$core$async24541(f__$1,blockable__$1,meta24542));
});

}

return (new cljs.core.async.t_cljs$core$async24541(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24547 = arguments.length;
switch (G__24547) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24550 = arguments.length;
switch (G__24550) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24553 = arguments.length;
switch (G__24553) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24555 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24555);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24555,ret){
return (function (){
return fn1.call(null,val_24555);
});})(val_24555,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24557 = arguments.length;
switch (G__24557) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___24559 = n;
var x_24560 = (0);
while(true){
if((x_24560 < n__4518__auto___24559)){
(a[x_24560] = (0));

var G__24561 = (x_24560 + (1));
x_24560 = G__24561;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24562 = (i + (1));
i = G__24562;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24563 = (function (flag,meta24564){
this.flag = flag;
this.meta24564 = meta24564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24565,meta24564__$1){
var self__ = this;
var _24565__$1 = this;
return (new cljs.core.async.t_cljs$core$async24563(self__.flag,meta24564__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24565){
var self__ = this;
var _24565__$1 = this;
return self__.meta24564;
});})(flag))
;

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24563.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24564","meta24564",-778321323,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24563";

cljs.core.async.t_cljs$core$async24563.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24563");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24563.
 */
cljs.core.async.__GT_t_cljs$core$async24563 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24563(flag__$1,meta24564){
return (new cljs.core.async.t_cljs$core$async24563(flag__$1,meta24564));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24563(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24566 = (function (flag,cb,meta24567){
this.flag = flag;
this.cb = cb;
this.meta24567 = meta24567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24568,meta24567__$1){
var self__ = this;
var _24568__$1 = this;
return (new cljs.core.async.t_cljs$core$async24566(self__.flag,self__.cb,meta24567__$1));
});

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24568){
var self__ = this;
var _24568__$1 = this;
return self__.meta24567;
});

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24567","meta24567",-1725429308,null)], null);
});

cljs.core.async.t_cljs$core$async24566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24566";

cljs.core.async.t_cljs$core$async24566.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24566");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24566.
 */
cljs.core.async.__GT_t_cljs$core$async24566 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24566(flag__$1,cb__$1,meta24567){
return (new cljs.core.async.t_cljs$core$async24566(flag__$1,cb__$1,meta24567));
});

}

return (new cljs.core.async.t_cljs$core$async24566(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24569_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24569_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24570_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24570_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24571 = (i + (1));
i = G__24571;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___24577 = arguments.length;
var i__4642__auto___24578 = (0);
while(true){
if((i__4642__auto___24578 < len__4641__auto___24577)){
args__4647__auto__.push((arguments[i__4642__auto___24578]));

var G__24579 = (i__4642__auto___24578 + (1));
i__4642__auto___24578 = G__24579;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24574){
var map__24575 = p__24574;
var map__24575__$1 = (((((!((map__24575 == null))))?(((((map__24575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24575):map__24575);
var opts = map__24575__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24572){
var G__24573 = cljs.core.first.call(null,seq24572);
var seq24572__$1 = cljs.core.next.call(null,seq24572);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24573,seq24572__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24581 = arguments.length;
switch (G__24581) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24480__auto___24627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___24627){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___24627){
return (function (state_24605){
var state_val_24606 = (state_24605[(1)]);
if((state_val_24606 === (7))){
var inst_24601 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
var statearr_24607_24628 = state_24605__$1;
(statearr_24607_24628[(2)] = inst_24601);

(statearr_24607_24628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (1))){
var state_24605__$1 = state_24605;
var statearr_24608_24629 = state_24605__$1;
(statearr_24608_24629[(2)] = null);

(statearr_24608_24629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (4))){
var inst_24584 = (state_24605[(7)]);
var inst_24584__$1 = (state_24605[(2)]);
var inst_24585 = (inst_24584__$1 == null);
var state_24605__$1 = (function (){var statearr_24609 = state_24605;
(statearr_24609[(7)] = inst_24584__$1);

return statearr_24609;
})();
if(cljs.core.truth_(inst_24585)){
var statearr_24610_24630 = state_24605__$1;
(statearr_24610_24630[(1)] = (5));

} else {
var statearr_24611_24631 = state_24605__$1;
(statearr_24611_24631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (13))){
var state_24605__$1 = state_24605;
var statearr_24612_24632 = state_24605__$1;
(statearr_24612_24632[(2)] = null);

(statearr_24612_24632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (6))){
var inst_24584 = (state_24605[(7)]);
var state_24605__$1 = state_24605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24605__$1,(11),to,inst_24584);
} else {
if((state_val_24606 === (3))){
var inst_24603 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24605__$1,inst_24603);
} else {
if((state_val_24606 === (12))){
var state_24605__$1 = state_24605;
var statearr_24613_24633 = state_24605__$1;
(statearr_24613_24633[(2)] = null);

(statearr_24613_24633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (2))){
var state_24605__$1 = state_24605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24605__$1,(4),from);
} else {
if((state_val_24606 === (11))){
var inst_24594 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
if(cljs.core.truth_(inst_24594)){
var statearr_24614_24634 = state_24605__$1;
(statearr_24614_24634[(1)] = (12));

} else {
var statearr_24615_24635 = state_24605__$1;
(statearr_24615_24635[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (9))){
var state_24605__$1 = state_24605;
var statearr_24616_24636 = state_24605__$1;
(statearr_24616_24636[(2)] = null);

(statearr_24616_24636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (5))){
var state_24605__$1 = state_24605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24617_24637 = state_24605__$1;
(statearr_24617_24637[(1)] = (8));

} else {
var statearr_24618_24638 = state_24605__$1;
(statearr_24618_24638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (14))){
var inst_24599 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
var statearr_24619_24639 = state_24605__$1;
(statearr_24619_24639[(2)] = inst_24599);

(statearr_24619_24639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (10))){
var inst_24591 = (state_24605[(2)]);
var state_24605__$1 = state_24605;
var statearr_24620_24640 = state_24605__$1;
(statearr_24620_24640[(2)] = inst_24591);

(statearr_24620_24640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24606 === (8))){
var inst_24588 = cljs.core.async.close_BANG_.call(null,to);
var state_24605__$1 = state_24605;
var statearr_24621_24641 = state_24605__$1;
(statearr_24621_24641[(2)] = inst_24588);

(statearr_24621_24641[(1)] = (10));


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
});})(c__24480__auto___24627))
;
return ((function (switch__24385__auto__,c__24480__auto___24627){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_24622 = [null,null,null,null,null,null,null,null];
(statearr_24622[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_24622[(1)] = (1));

return statearr_24622;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_24605){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_24605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e24623){if((e24623 instanceof Object)){
var ex__24389__auto__ = e24623;
var statearr_24624_24642 = state_24605;
(statearr_24624_24642[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24643 = state_24605;
state_24605 = G__24643;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_24605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_24605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___24627))
})();
var state__24482__auto__ = (function (){var statearr_24625 = f__24481__auto__.call(null);
(statearr_24625[(6)] = c__24480__auto___24627);

return statearr_24625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___24627))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24644){
var vec__24645 = p__24644;
var v = cljs.core.nth.call(null,vec__24645,(0),null);
var p = cljs.core.nth.call(null,vec__24645,(1),null);
var job = vec__24645;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24480__auto___24816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___24816,res,vec__24645,v,p,job,jobs,results){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___24816,res,vec__24645,v,p,job,jobs,results){
return (function (state_24652){
var state_val_24653 = (state_24652[(1)]);
if((state_val_24653 === (1))){
var state_24652__$1 = state_24652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24652__$1,(2),res,v);
} else {
if((state_val_24653 === (2))){
var inst_24649 = (state_24652[(2)]);
var inst_24650 = cljs.core.async.close_BANG_.call(null,res);
var state_24652__$1 = (function (){var statearr_24654 = state_24652;
(statearr_24654[(7)] = inst_24649);

return statearr_24654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24652__$1,inst_24650);
} else {
return null;
}
}
});})(c__24480__auto___24816,res,vec__24645,v,p,job,jobs,results))
;
return ((function (switch__24385__auto__,c__24480__auto___24816,res,vec__24645,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0 = (function (){
var statearr_24655 = [null,null,null,null,null,null,null,null];
(statearr_24655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__);

(statearr_24655[(1)] = (1));

return statearr_24655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1 = (function (state_24652){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_24652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e24656){if((e24656 instanceof Object)){
var ex__24389__auto__ = e24656;
var statearr_24657_24817 = state_24652;
(statearr_24657_24817[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24818 = state_24652;
state_24652 = G__24818;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = function(state_24652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1.call(this,state_24652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___24816,res,vec__24645,v,p,job,jobs,results))
})();
var state__24482__auto__ = (function (){var statearr_24658 = f__24481__auto__.call(null);
(statearr_24658[(6)] = c__24480__auto___24816);

return statearr_24658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___24816,res,vec__24645,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24659){
var vec__24660 = p__24659;
var v = cljs.core.nth.call(null,vec__24660,(0),null);
var p = cljs.core.nth.call(null,vec__24660,(1),null);
var job = vec__24660;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___24819 = n;
var __24820 = (0);
while(true){
if((__24820 < n__4518__auto___24819)){
var G__24663_24821 = type;
var G__24663_24822__$1 = (((G__24663_24821 instanceof cljs.core.Keyword))?G__24663_24821.fqn:null);
switch (G__24663_24822__$1) {
case "compute":
var c__24480__auto___24824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24820,c__24480__auto___24824,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (__24820,c__24480__auto___24824,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async){
return (function (state_24676){
var state_val_24677 = (state_24676[(1)]);
if((state_val_24677 === (1))){
var state_24676__$1 = state_24676;
var statearr_24678_24825 = state_24676__$1;
(statearr_24678_24825[(2)] = null);

(statearr_24678_24825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (2))){
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24676__$1,(4),jobs);
} else {
if((state_val_24677 === (3))){
var inst_24674 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24676__$1,inst_24674);
} else {
if((state_val_24677 === (4))){
var inst_24666 = (state_24676[(2)]);
var inst_24667 = process.call(null,inst_24666);
var state_24676__$1 = state_24676;
if(cljs.core.truth_(inst_24667)){
var statearr_24679_24826 = state_24676__$1;
(statearr_24679_24826[(1)] = (5));

} else {
var statearr_24680_24827 = state_24676__$1;
(statearr_24680_24827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (5))){
var state_24676__$1 = state_24676;
var statearr_24681_24828 = state_24676__$1;
(statearr_24681_24828[(2)] = null);

(statearr_24681_24828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (6))){
var state_24676__$1 = state_24676;
var statearr_24682_24829 = state_24676__$1;
(statearr_24682_24829[(2)] = null);

(statearr_24682_24829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (7))){
var inst_24672 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
var statearr_24683_24830 = state_24676__$1;
(statearr_24683_24830[(2)] = inst_24672);

(statearr_24683_24830[(1)] = (3));


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
});})(__24820,c__24480__auto___24824,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async))
;
return ((function (__24820,switch__24385__auto__,c__24480__auto___24824,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0 = (function (){
var statearr_24684 = [null,null,null,null,null,null,null];
(statearr_24684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__);

(statearr_24684[(1)] = (1));

return statearr_24684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1 = (function (state_24676){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_24676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e24685){if((e24685 instanceof Object)){
var ex__24389__auto__ = e24685;
var statearr_24686_24831 = state_24676;
(statearr_24686_24831[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24832 = state_24676;
state_24676 = G__24832;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = function(state_24676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1.call(this,state_24676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__;
})()
;})(__24820,switch__24385__auto__,c__24480__auto___24824,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async))
})();
var state__24482__auto__ = (function (){var statearr_24687 = f__24481__auto__.call(null);
(statearr_24687[(6)] = c__24480__auto___24824);

return statearr_24687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(__24820,c__24480__auto___24824,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async))
);


break;
case "async":
var c__24480__auto___24833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24820,c__24480__auto___24833,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (__24820,c__24480__auto___24833,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async){
return (function (state_24700){
var state_val_24701 = (state_24700[(1)]);
if((state_val_24701 === (1))){
var state_24700__$1 = state_24700;
var statearr_24702_24834 = state_24700__$1;
(statearr_24702_24834[(2)] = null);

(statearr_24702_24834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (2))){
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24700__$1,(4),jobs);
} else {
if((state_val_24701 === (3))){
var inst_24698 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24700__$1,inst_24698);
} else {
if((state_val_24701 === (4))){
var inst_24690 = (state_24700[(2)]);
var inst_24691 = async.call(null,inst_24690);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24691)){
var statearr_24703_24835 = state_24700__$1;
(statearr_24703_24835[(1)] = (5));

} else {
var statearr_24704_24836 = state_24700__$1;
(statearr_24704_24836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (5))){
var state_24700__$1 = state_24700;
var statearr_24705_24837 = state_24700__$1;
(statearr_24705_24837[(2)] = null);

(statearr_24705_24837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (6))){
var state_24700__$1 = state_24700;
var statearr_24706_24838 = state_24700__$1;
(statearr_24706_24838[(2)] = null);

(statearr_24706_24838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (7))){
var inst_24696 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24707_24839 = state_24700__$1;
(statearr_24707_24839[(2)] = inst_24696);

(statearr_24707_24839[(1)] = (3));


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
});})(__24820,c__24480__auto___24833,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async))
;
return ((function (__24820,switch__24385__auto__,c__24480__auto___24833,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0 = (function (){
var statearr_24708 = [null,null,null,null,null,null,null];
(statearr_24708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__);

(statearr_24708[(1)] = (1));

return statearr_24708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1 = (function (state_24700){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_24700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e24709){if((e24709 instanceof Object)){
var ex__24389__auto__ = e24709;
var statearr_24710_24840 = state_24700;
(statearr_24710_24840[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24841 = state_24700;
state_24700 = G__24841;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = function(state_24700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1.call(this,state_24700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__;
})()
;})(__24820,switch__24385__auto__,c__24480__auto___24833,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async))
})();
var state__24482__auto__ = (function (){var statearr_24711 = f__24481__auto__.call(null);
(statearr_24711[(6)] = c__24480__auto___24833);

return statearr_24711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(__24820,c__24480__auto___24833,G__24663_24821,G__24663_24822__$1,n__4518__auto___24819,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24663_24822__$1)].join('')));

}

var G__24842 = (__24820 + (1));
__24820 = G__24842;
continue;
} else {
}
break;
}

var c__24480__auto___24843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___24843,jobs,results,process,async){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___24843,jobs,results,process,async){
return (function (state_24733){
var state_val_24734 = (state_24733[(1)]);
if((state_val_24734 === (1))){
var state_24733__$1 = state_24733;
var statearr_24735_24844 = state_24733__$1;
(statearr_24735_24844[(2)] = null);

(statearr_24735_24844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (2))){
var state_24733__$1 = state_24733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24733__$1,(4),from);
} else {
if((state_val_24734 === (3))){
var inst_24731 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24733__$1,inst_24731);
} else {
if((state_val_24734 === (4))){
var inst_24714 = (state_24733[(7)]);
var inst_24714__$1 = (state_24733[(2)]);
var inst_24715 = (inst_24714__$1 == null);
var state_24733__$1 = (function (){var statearr_24736 = state_24733;
(statearr_24736[(7)] = inst_24714__$1);

return statearr_24736;
})();
if(cljs.core.truth_(inst_24715)){
var statearr_24737_24845 = state_24733__$1;
(statearr_24737_24845[(1)] = (5));

} else {
var statearr_24738_24846 = state_24733__$1;
(statearr_24738_24846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (5))){
var inst_24717 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24733__$1 = state_24733;
var statearr_24739_24847 = state_24733__$1;
(statearr_24739_24847[(2)] = inst_24717);

(statearr_24739_24847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (6))){
var inst_24719 = (state_24733[(8)]);
var inst_24714 = (state_24733[(7)]);
var inst_24719__$1 = cljs.core.async.chan.call(null,(1));
var inst_24720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24721 = [inst_24714,inst_24719__$1];
var inst_24722 = (new cljs.core.PersistentVector(null,2,(5),inst_24720,inst_24721,null));
var state_24733__$1 = (function (){var statearr_24740 = state_24733;
(statearr_24740[(8)] = inst_24719__$1);

return statearr_24740;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24733__$1,(8),jobs,inst_24722);
} else {
if((state_val_24734 === (7))){
var inst_24729 = (state_24733[(2)]);
var state_24733__$1 = state_24733;
var statearr_24741_24848 = state_24733__$1;
(statearr_24741_24848[(2)] = inst_24729);

(statearr_24741_24848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24734 === (8))){
var inst_24719 = (state_24733[(8)]);
var inst_24724 = (state_24733[(2)]);
var state_24733__$1 = (function (){var statearr_24742 = state_24733;
(statearr_24742[(9)] = inst_24724);

return statearr_24742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24733__$1,(9),results,inst_24719);
} else {
if((state_val_24734 === (9))){
var inst_24726 = (state_24733[(2)]);
var state_24733__$1 = (function (){var statearr_24743 = state_24733;
(statearr_24743[(10)] = inst_24726);

return statearr_24743;
})();
var statearr_24744_24849 = state_24733__$1;
(statearr_24744_24849[(2)] = null);

(statearr_24744_24849[(1)] = (2));


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
});})(c__24480__auto___24843,jobs,results,process,async))
;
return ((function (switch__24385__auto__,c__24480__auto___24843,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0 = (function (){
var statearr_24745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__);

(statearr_24745[(1)] = (1));

return statearr_24745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1 = (function (state_24733){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_24733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e24746){if((e24746 instanceof Object)){
var ex__24389__auto__ = e24746;
var statearr_24747_24850 = state_24733;
(statearr_24747_24850[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24851 = state_24733;
state_24733 = G__24851;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = function(state_24733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1.call(this,state_24733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___24843,jobs,results,process,async))
})();
var state__24482__auto__ = (function (){var statearr_24748 = f__24481__auto__.call(null);
(statearr_24748[(6)] = c__24480__auto___24843);

return statearr_24748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___24843,jobs,results,process,async))
);


var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__,jobs,results,process,async){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__,jobs,results,process,async){
return (function (state_24786){
var state_val_24787 = (state_24786[(1)]);
if((state_val_24787 === (7))){
var inst_24782 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
var statearr_24788_24852 = state_24786__$1;
(statearr_24788_24852[(2)] = inst_24782);

(statearr_24788_24852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (20))){
var state_24786__$1 = state_24786;
var statearr_24789_24853 = state_24786__$1;
(statearr_24789_24853[(2)] = null);

(statearr_24789_24853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (1))){
var state_24786__$1 = state_24786;
var statearr_24790_24854 = state_24786__$1;
(statearr_24790_24854[(2)] = null);

(statearr_24790_24854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (4))){
var inst_24751 = (state_24786[(7)]);
var inst_24751__$1 = (state_24786[(2)]);
var inst_24752 = (inst_24751__$1 == null);
var state_24786__$1 = (function (){var statearr_24791 = state_24786;
(statearr_24791[(7)] = inst_24751__$1);

return statearr_24791;
})();
if(cljs.core.truth_(inst_24752)){
var statearr_24792_24855 = state_24786__$1;
(statearr_24792_24855[(1)] = (5));

} else {
var statearr_24793_24856 = state_24786__$1;
(statearr_24793_24856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (15))){
var inst_24764 = (state_24786[(8)]);
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24786__$1,(18),to,inst_24764);
} else {
if((state_val_24787 === (21))){
var inst_24777 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
var statearr_24794_24857 = state_24786__$1;
(statearr_24794_24857[(2)] = inst_24777);

(statearr_24794_24857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (13))){
var inst_24779 = (state_24786[(2)]);
var state_24786__$1 = (function (){var statearr_24795 = state_24786;
(statearr_24795[(9)] = inst_24779);

return statearr_24795;
})();
var statearr_24796_24858 = state_24786__$1;
(statearr_24796_24858[(2)] = null);

(statearr_24796_24858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (6))){
var inst_24751 = (state_24786[(7)]);
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24786__$1,(11),inst_24751);
} else {
if((state_val_24787 === (17))){
var inst_24772 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
if(cljs.core.truth_(inst_24772)){
var statearr_24797_24859 = state_24786__$1;
(statearr_24797_24859[(1)] = (19));

} else {
var statearr_24798_24860 = state_24786__$1;
(statearr_24798_24860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (3))){
var inst_24784 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24786__$1,inst_24784);
} else {
if((state_val_24787 === (12))){
var inst_24761 = (state_24786[(10)]);
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24786__$1,(14),inst_24761);
} else {
if((state_val_24787 === (2))){
var state_24786__$1 = state_24786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24786__$1,(4),results);
} else {
if((state_val_24787 === (19))){
var state_24786__$1 = state_24786;
var statearr_24799_24861 = state_24786__$1;
(statearr_24799_24861[(2)] = null);

(statearr_24799_24861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (11))){
var inst_24761 = (state_24786[(2)]);
var state_24786__$1 = (function (){var statearr_24800 = state_24786;
(statearr_24800[(10)] = inst_24761);

return statearr_24800;
})();
var statearr_24801_24862 = state_24786__$1;
(statearr_24801_24862[(2)] = null);

(statearr_24801_24862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (9))){
var state_24786__$1 = state_24786;
var statearr_24802_24863 = state_24786__$1;
(statearr_24802_24863[(2)] = null);

(statearr_24802_24863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (5))){
var state_24786__$1 = state_24786;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24803_24864 = state_24786__$1;
(statearr_24803_24864[(1)] = (8));

} else {
var statearr_24804_24865 = state_24786__$1;
(statearr_24804_24865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (14))){
var inst_24764 = (state_24786[(8)]);
var inst_24766 = (state_24786[(11)]);
var inst_24764__$1 = (state_24786[(2)]);
var inst_24765 = (inst_24764__$1 == null);
var inst_24766__$1 = cljs.core.not.call(null,inst_24765);
var state_24786__$1 = (function (){var statearr_24805 = state_24786;
(statearr_24805[(8)] = inst_24764__$1);

(statearr_24805[(11)] = inst_24766__$1);

return statearr_24805;
})();
if(inst_24766__$1){
var statearr_24806_24866 = state_24786__$1;
(statearr_24806_24866[(1)] = (15));

} else {
var statearr_24807_24867 = state_24786__$1;
(statearr_24807_24867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (16))){
var inst_24766 = (state_24786[(11)]);
var state_24786__$1 = state_24786;
var statearr_24808_24868 = state_24786__$1;
(statearr_24808_24868[(2)] = inst_24766);

(statearr_24808_24868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (10))){
var inst_24758 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
var statearr_24809_24869 = state_24786__$1;
(statearr_24809_24869[(2)] = inst_24758);

(statearr_24809_24869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (18))){
var inst_24769 = (state_24786[(2)]);
var state_24786__$1 = state_24786;
var statearr_24810_24870 = state_24786__$1;
(statearr_24810_24870[(2)] = inst_24769);

(statearr_24810_24870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24787 === (8))){
var inst_24755 = cljs.core.async.close_BANG_.call(null,to);
var state_24786__$1 = state_24786;
var statearr_24811_24871 = state_24786__$1;
(statearr_24811_24871[(2)] = inst_24755);

(statearr_24811_24871[(1)] = (10));


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
});})(c__24480__auto__,jobs,results,process,async))
;
return ((function (switch__24385__auto__,c__24480__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0 = (function (){
var statearr_24812 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__);

(statearr_24812[(1)] = (1));

return statearr_24812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1 = (function (state_24786){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_24786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e24813){if((e24813 instanceof Object)){
var ex__24389__auto__ = e24813;
var statearr_24814_24872 = state_24786;
(statearr_24814_24872[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24873 = state_24786;
state_24786 = G__24873;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__ = function(state_24786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1.call(this,state_24786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__,jobs,results,process,async))
})();
var state__24482__auto__ = (function (){var statearr_24815 = f__24481__auto__.call(null);
(statearr_24815[(6)] = c__24480__auto__);

return statearr_24815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__,jobs,results,process,async))
);

return c__24480__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24875 = arguments.length;
switch (G__24875) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24878 = arguments.length;
switch (G__24878) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24881 = arguments.length;
switch (G__24881) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24480__auto___24930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___24930,tc,fc){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___24930,tc,fc){
return (function (state_24907){
var state_val_24908 = (state_24907[(1)]);
if((state_val_24908 === (7))){
var inst_24903 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24909_24931 = state_24907__$1;
(statearr_24909_24931[(2)] = inst_24903);

(statearr_24909_24931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (1))){
var state_24907__$1 = state_24907;
var statearr_24910_24932 = state_24907__$1;
(statearr_24910_24932[(2)] = null);

(statearr_24910_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (4))){
var inst_24884 = (state_24907[(7)]);
var inst_24884__$1 = (state_24907[(2)]);
var inst_24885 = (inst_24884__$1 == null);
var state_24907__$1 = (function (){var statearr_24911 = state_24907;
(statearr_24911[(7)] = inst_24884__$1);

return statearr_24911;
})();
if(cljs.core.truth_(inst_24885)){
var statearr_24912_24933 = state_24907__$1;
(statearr_24912_24933[(1)] = (5));

} else {
var statearr_24913_24934 = state_24907__$1;
(statearr_24913_24934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (13))){
var state_24907__$1 = state_24907;
var statearr_24914_24935 = state_24907__$1;
(statearr_24914_24935[(2)] = null);

(statearr_24914_24935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (6))){
var inst_24884 = (state_24907[(7)]);
var inst_24890 = p.call(null,inst_24884);
var state_24907__$1 = state_24907;
if(cljs.core.truth_(inst_24890)){
var statearr_24915_24936 = state_24907__$1;
(statearr_24915_24936[(1)] = (9));

} else {
var statearr_24916_24937 = state_24907__$1;
(statearr_24916_24937[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (3))){
var inst_24905 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24907__$1,inst_24905);
} else {
if((state_val_24908 === (12))){
var state_24907__$1 = state_24907;
var statearr_24917_24938 = state_24907__$1;
(statearr_24917_24938[(2)] = null);

(statearr_24917_24938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (2))){
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24907__$1,(4),ch);
} else {
if((state_val_24908 === (11))){
var inst_24884 = (state_24907[(7)]);
var inst_24894 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24907__$1,(8),inst_24894,inst_24884);
} else {
if((state_val_24908 === (9))){
var state_24907__$1 = state_24907;
var statearr_24918_24939 = state_24907__$1;
(statearr_24918_24939[(2)] = tc);

(statearr_24918_24939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (5))){
var inst_24887 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24888 = cljs.core.async.close_BANG_.call(null,fc);
var state_24907__$1 = (function (){var statearr_24919 = state_24907;
(statearr_24919[(8)] = inst_24887);

return statearr_24919;
})();
var statearr_24920_24940 = state_24907__$1;
(statearr_24920_24940[(2)] = inst_24888);

(statearr_24920_24940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (14))){
var inst_24901 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24921_24941 = state_24907__$1;
(statearr_24921_24941[(2)] = inst_24901);

(statearr_24921_24941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (10))){
var state_24907__$1 = state_24907;
var statearr_24922_24942 = state_24907__$1;
(statearr_24922_24942[(2)] = fc);

(statearr_24922_24942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24908 === (8))){
var inst_24896 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
if(cljs.core.truth_(inst_24896)){
var statearr_24923_24943 = state_24907__$1;
(statearr_24923_24943[(1)] = (12));

} else {
var statearr_24924_24944 = state_24907__$1;
(statearr_24924_24944[(1)] = (13));

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
});})(c__24480__auto___24930,tc,fc))
;
return ((function (switch__24385__auto__,c__24480__auto___24930,tc,fc){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_24925 = [null,null,null,null,null,null,null,null,null];
(statearr_24925[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_24925[(1)] = (1));

return statearr_24925;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_24907){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_24907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e24926){if((e24926 instanceof Object)){
var ex__24389__auto__ = e24926;
var statearr_24927_24945 = state_24907;
(statearr_24927_24945[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24946 = state_24907;
state_24907 = G__24946;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_24907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_24907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___24930,tc,fc))
})();
var state__24482__auto__ = (function (){var statearr_24928 = f__24481__auto__.call(null);
(statearr_24928[(6)] = c__24480__auto___24930);

return statearr_24928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___24930,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__){
return (function (state_24967){
var state_val_24968 = (state_24967[(1)]);
if((state_val_24968 === (7))){
var inst_24963 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24969_24987 = state_24967__$1;
(statearr_24969_24987[(2)] = inst_24963);

(statearr_24969_24987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (1))){
var inst_24947 = init;
var state_24967__$1 = (function (){var statearr_24970 = state_24967;
(statearr_24970[(7)] = inst_24947);

return statearr_24970;
})();
var statearr_24971_24988 = state_24967__$1;
(statearr_24971_24988[(2)] = null);

(statearr_24971_24988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (4))){
var inst_24950 = (state_24967[(8)]);
var inst_24950__$1 = (state_24967[(2)]);
var inst_24951 = (inst_24950__$1 == null);
var state_24967__$1 = (function (){var statearr_24972 = state_24967;
(statearr_24972[(8)] = inst_24950__$1);

return statearr_24972;
})();
if(cljs.core.truth_(inst_24951)){
var statearr_24973_24989 = state_24967__$1;
(statearr_24973_24989[(1)] = (5));

} else {
var statearr_24974_24990 = state_24967__$1;
(statearr_24974_24990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (6))){
var inst_24947 = (state_24967[(7)]);
var inst_24954 = (state_24967[(9)]);
var inst_24950 = (state_24967[(8)]);
var inst_24954__$1 = f.call(null,inst_24947,inst_24950);
var inst_24955 = cljs.core.reduced_QMARK_.call(null,inst_24954__$1);
var state_24967__$1 = (function (){var statearr_24975 = state_24967;
(statearr_24975[(9)] = inst_24954__$1);

return statearr_24975;
})();
if(inst_24955){
var statearr_24976_24991 = state_24967__$1;
(statearr_24976_24991[(1)] = (8));

} else {
var statearr_24977_24992 = state_24967__$1;
(statearr_24977_24992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (3))){
var inst_24965 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24967__$1,inst_24965);
} else {
if((state_val_24968 === (2))){
var state_24967__$1 = state_24967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24967__$1,(4),ch);
} else {
if((state_val_24968 === (9))){
var inst_24954 = (state_24967[(9)]);
var inst_24947 = inst_24954;
var state_24967__$1 = (function (){var statearr_24978 = state_24967;
(statearr_24978[(7)] = inst_24947);

return statearr_24978;
})();
var statearr_24979_24993 = state_24967__$1;
(statearr_24979_24993[(2)] = null);

(statearr_24979_24993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (5))){
var inst_24947 = (state_24967[(7)]);
var state_24967__$1 = state_24967;
var statearr_24980_24994 = state_24967__$1;
(statearr_24980_24994[(2)] = inst_24947);

(statearr_24980_24994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (10))){
var inst_24961 = (state_24967[(2)]);
var state_24967__$1 = state_24967;
var statearr_24981_24995 = state_24967__$1;
(statearr_24981_24995[(2)] = inst_24961);

(statearr_24981_24995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24968 === (8))){
var inst_24954 = (state_24967[(9)]);
var inst_24957 = cljs.core.deref.call(null,inst_24954);
var state_24967__$1 = state_24967;
var statearr_24982_24996 = state_24967__$1;
(statearr_24982_24996[(2)] = inst_24957);

(statearr_24982_24996[(1)] = (10));


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
});})(c__24480__auto__))
;
return ((function (switch__24385__auto__,c__24480__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24386__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24386__auto____0 = (function (){
var statearr_24983 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24983[(0)] = cljs$core$async$reduce_$_state_machine__24386__auto__);

(statearr_24983[(1)] = (1));

return statearr_24983;
});
var cljs$core$async$reduce_$_state_machine__24386__auto____1 = (function (state_24967){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_24967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e24984){if((e24984 instanceof Object)){
var ex__24389__auto__ = e24984;
var statearr_24985_24997 = state_24967;
(statearr_24985_24997[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24967;
state_24967 = G__24998;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24386__auto__ = function(state_24967){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24386__auto____1.call(this,state_24967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24386__auto____0;
cljs$core$async$reduce_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24386__auto____1;
return cljs$core$async$reduce_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__))
})();
var state__24482__auto__ = (function (){var statearr_24986 = f__24481__auto__.call(null);
(statearr_24986[(6)] = c__24480__auto__);

return statearr_24986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__))
);

return c__24480__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__,f__$1){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__,f__$1){
return (function (state_25004){
var state_val_25005 = (state_25004[(1)]);
if((state_val_25005 === (1))){
var inst_24999 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25004__$1 = state_25004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25004__$1,(2),inst_24999);
} else {
if((state_val_25005 === (2))){
var inst_25001 = (state_25004[(2)]);
var inst_25002 = f__$1.call(null,inst_25001);
var state_25004__$1 = state_25004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25004__$1,inst_25002);
} else {
return null;
}
}
});})(c__24480__auto__,f__$1))
;
return ((function (switch__24385__auto__,c__24480__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24386__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24386__auto____0 = (function (){
var statearr_25006 = [null,null,null,null,null,null,null];
(statearr_25006[(0)] = cljs$core$async$transduce_$_state_machine__24386__auto__);

(statearr_25006[(1)] = (1));

return statearr_25006;
});
var cljs$core$async$transduce_$_state_machine__24386__auto____1 = (function (state_25004){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_25004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e25007){if((e25007 instanceof Object)){
var ex__24389__auto__ = e25007;
var statearr_25008_25010 = state_25004;
(statearr_25008_25010[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25011 = state_25004;
state_25004 = G__25011;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24386__auto__ = function(state_25004){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24386__auto____1.call(this,state_25004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24386__auto____0;
cljs$core$async$transduce_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24386__auto____1;
return cljs$core$async$transduce_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__,f__$1))
})();
var state__24482__auto__ = (function (){var statearr_25009 = f__24481__auto__.call(null);
(statearr_25009[(6)] = c__24480__auto__);

return statearr_25009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__,f__$1))
);

return c__24480__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25013 = arguments.length;
switch (G__25013) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__){
return (function (state_25038){
var state_val_25039 = (state_25038[(1)]);
if((state_val_25039 === (7))){
var inst_25020 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25040_25061 = state_25038__$1;
(statearr_25040_25061[(2)] = inst_25020);

(statearr_25040_25061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (1))){
var inst_25014 = cljs.core.seq.call(null,coll);
var inst_25015 = inst_25014;
var state_25038__$1 = (function (){var statearr_25041 = state_25038;
(statearr_25041[(7)] = inst_25015);

return statearr_25041;
})();
var statearr_25042_25062 = state_25038__$1;
(statearr_25042_25062[(2)] = null);

(statearr_25042_25062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (4))){
var inst_25015 = (state_25038[(7)]);
var inst_25018 = cljs.core.first.call(null,inst_25015);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25038__$1,(7),ch,inst_25018);
} else {
if((state_val_25039 === (13))){
var inst_25032 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25043_25063 = state_25038__$1;
(statearr_25043_25063[(2)] = inst_25032);

(statearr_25043_25063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (6))){
var inst_25023 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_25023)){
var statearr_25044_25064 = state_25038__$1;
(statearr_25044_25064[(1)] = (8));

} else {
var statearr_25045_25065 = state_25038__$1;
(statearr_25045_25065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (3))){
var inst_25036 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25038__$1,inst_25036);
} else {
if((state_val_25039 === (12))){
var state_25038__$1 = state_25038;
var statearr_25046_25066 = state_25038__$1;
(statearr_25046_25066[(2)] = null);

(statearr_25046_25066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (2))){
var inst_25015 = (state_25038[(7)]);
var state_25038__$1 = state_25038;
if(cljs.core.truth_(inst_25015)){
var statearr_25047_25067 = state_25038__$1;
(statearr_25047_25067[(1)] = (4));

} else {
var statearr_25048_25068 = state_25038__$1;
(statearr_25048_25068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (11))){
var inst_25029 = cljs.core.async.close_BANG_.call(null,ch);
var state_25038__$1 = state_25038;
var statearr_25049_25069 = state_25038__$1;
(statearr_25049_25069[(2)] = inst_25029);

(statearr_25049_25069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (9))){
var state_25038__$1 = state_25038;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25050_25070 = state_25038__$1;
(statearr_25050_25070[(1)] = (11));

} else {
var statearr_25051_25071 = state_25038__$1;
(statearr_25051_25071[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (5))){
var inst_25015 = (state_25038[(7)]);
var state_25038__$1 = state_25038;
var statearr_25052_25072 = state_25038__$1;
(statearr_25052_25072[(2)] = inst_25015);

(statearr_25052_25072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (10))){
var inst_25034 = (state_25038[(2)]);
var state_25038__$1 = state_25038;
var statearr_25053_25073 = state_25038__$1;
(statearr_25053_25073[(2)] = inst_25034);

(statearr_25053_25073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25039 === (8))){
var inst_25015 = (state_25038[(7)]);
var inst_25025 = cljs.core.next.call(null,inst_25015);
var inst_25015__$1 = inst_25025;
var state_25038__$1 = (function (){var statearr_25054 = state_25038;
(statearr_25054[(7)] = inst_25015__$1);

return statearr_25054;
})();
var statearr_25055_25074 = state_25038__$1;
(statearr_25055_25074[(2)] = null);

(statearr_25055_25074[(1)] = (2));


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
});})(c__24480__auto__))
;
return ((function (switch__24385__auto__,c__24480__auto__){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_25056 = [null,null,null,null,null,null,null,null];
(statearr_25056[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_25056[(1)] = (1));

return statearr_25056;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_25038){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_25038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e25057){if((e25057 instanceof Object)){
var ex__24389__auto__ = e25057;
var statearr_25058_25075 = state_25038;
(statearr_25058_25075[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25076 = state_25038;
state_25038 = G__25076;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_25038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_25038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__))
})();
var state__24482__auto__ = (function (){var statearr_25059 = f__24481__auto__.call(null);
(statearr_25059[(6)] = c__24480__auto__);

return statearr_25059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__))
);

return c__24480__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25077 = (function (ch,cs,meta25078){
this.ch = ch;
this.cs = cs;
this.meta25078 = meta25078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25079,meta25078__$1){
var self__ = this;
var _25079__$1 = this;
return (new cljs.core.async.t_cljs$core$async25077(self__.ch,self__.cs,meta25078__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25079){
var self__ = this;
var _25079__$1 = this;
return self__.meta25078;
});})(cs))
;

cljs.core.async.t_cljs$core$async25077.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25077.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25077.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25077.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25077.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25077.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25078","meta25078",-1999499173,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25077";

cljs.core.async.t_cljs$core$async25077.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25077");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25077.
 */
cljs.core.async.__GT_t_cljs$core$async25077 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25077(ch__$1,cs__$1,meta25078){
return (new cljs.core.async.t_cljs$core$async25077(ch__$1,cs__$1,meta25078));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25077(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24480__auto___25299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___25299,cs,m,dchan,dctr,done){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___25299,cs,m,dchan,dctr,done){
return (function (state_25214){
var state_val_25215 = (state_25214[(1)]);
if((state_val_25215 === (7))){
var inst_25210 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25216_25300 = state_25214__$1;
(statearr_25216_25300[(2)] = inst_25210);

(statearr_25216_25300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (20))){
var inst_25113 = (state_25214[(7)]);
var inst_25125 = cljs.core.first.call(null,inst_25113);
var inst_25126 = cljs.core.nth.call(null,inst_25125,(0),null);
var inst_25127 = cljs.core.nth.call(null,inst_25125,(1),null);
var state_25214__$1 = (function (){var statearr_25217 = state_25214;
(statearr_25217[(8)] = inst_25126);

return statearr_25217;
})();
if(cljs.core.truth_(inst_25127)){
var statearr_25218_25301 = state_25214__$1;
(statearr_25218_25301[(1)] = (22));

} else {
var statearr_25219_25302 = state_25214__$1;
(statearr_25219_25302[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (27))){
var inst_25162 = (state_25214[(9)]);
var inst_25155 = (state_25214[(10)]);
var inst_25157 = (state_25214[(11)]);
var inst_25082 = (state_25214[(12)]);
var inst_25162__$1 = cljs.core._nth.call(null,inst_25155,inst_25157);
var inst_25163 = cljs.core.async.put_BANG_.call(null,inst_25162__$1,inst_25082,done);
var state_25214__$1 = (function (){var statearr_25220 = state_25214;
(statearr_25220[(9)] = inst_25162__$1);

return statearr_25220;
})();
if(cljs.core.truth_(inst_25163)){
var statearr_25221_25303 = state_25214__$1;
(statearr_25221_25303[(1)] = (30));

} else {
var statearr_25222_25304 = state_25214__$1;
(statearr_25222_25304[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (1))){
var state_25214__$1 = state_25214;
var statearr_25223_25305 = state_25214__$1;
(statearr_25223_25305[(2)] = null);

(statearr_25223_25305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (24))){
var inst_25113 = (state_25214[(7)]);
var inst_25132 = (state_25214[(2)]);
var inst_25133 = cljs.core.next.call(null,inst_25113);
var inst_25091 = inst_25133;
var inst_25092 = null;
var inst_25093 = (0);
var inst_25094 = (0);
var state_25214__$1 = (function (){var statearr_25224 = state_25214;
(statearr_25224[(13)] = inst_25092);

(statearr_25224[(14)] = inst_25091);

(statearr_25224[(15)] = inst_25094);

(statearr_25224[(16)] = inst_25093);

(statearr_25224[(17)] = inst_25132);

return statearr_25224;
})();
var statearr_25225_25306 = state_25214__$1;
(statearr_25225_25306[(2)] = null);

(statearr_25225_25306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (39))){
var state_25214__$1 = state_25214;
var statearr_25229_25307 = state_25214__$1;
(statearr_25229_25307[(2)] = null);

(statearr_25229_25307[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (4))){
var inst_25082 = (state_25214[(12)]);
var inst_25082__$1 = (state_25214[(2)]);
var inst_25083 = (inst_25082__$1 == null);
var state_25214__$1 = (function (){var statearr_25230 = state_25214;
(statearr_25230[(12)] = inst_25082__$1);

return statearr_25230;
})();
if(cljs.core.truth_(inst_25083)){
var statearr_25231_25308 = state_25214__$1;
(statearr_25231_25308[(1)] = (5));

} else {
var statearr_25232_25309 = state_25214__$1;
(statearr_25232_25309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (15))){
var inst_25092 = (state_25214[(13)]);
var inst_25091 = (state_25214[(14)]);
var inst_25094 = (state_25214[(15)]);
var inst_25093 = (state_25214[(16)]);
var inst_25109 = (state_25214[(2)]);
var inst_25110 = (inst_25094 + (1));
var tmp25226 = inst_25092;
var tmp25227 = inst_25091;
var tmp25228 = inst_25093;
var inst_25091__$1 = tmp25227;
var inst_25092__$1 = tmp25226;
var inst_25093__$1 = tmp25228;
var inst_25094__$1 = inst_25110;
var state_25214__$1 = (function (){var statearr_25233 = state_25214;
(statearr_25233[(13)] = inst_25092__$1);

(statearr_25233[(14)] = inst_25091__$1);

(statearr_25233[(15)] = inst_25094__$1);

(statearr_25233[(16)] = inst_25093__$1);

(statearr_25233[(18)] = inst_25109);

return statearr_25233;
})();
var statearr_25234_25310 = state_25214__$1;
(statearr_25234_25310[(2)] = null);

(statearr_25234_25310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (21))){
var inst_25136 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25238_25311 = state_25214__$1;
(statearr_25238_25311[(2)] = inst_25136);

(statearr_25238_25311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (31))){
var inst_25162 = (state_25214[(9)]);
var inst_25166 = done.call(null,null);
var inst_25167 = cljs.core.async.untap_STAR_.call(null,m,inst_25162);
var state_25214__$1 = (function (){var statearr_25239 = state_25214;
(statearr_25239[(19)] = inst_25166);

return statearr_25239;
})();
var statearr_25240_25312 = state_25214__$1;
(statearr_25240_25312[(2)] = inst_25167);

(statearr_25240_25312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (32))){
var inst_25155 = (state_25214[(10)]);
var inst_25156 = (state_25214[(20)]);
var inst_25157 = (state_25214[(11)]);
var inst_25154 = (state_25214[(21)]);
var inst_25169 = (state_25214[(2)]);
var inst_25170 = (inst_25157 + (1));
var tmp25235 = inst_25155;
var tmp25236 = inst_25156;
var tmp25237 = inst_25154;
var inst_25154__$1 = tmp25237;
var inst_25155__$1 = tmp25235;
var inst_25156__$1 = tmp25236;
var inst_25157__$1 = inst_25170;
var state_25214__$1 = (function (){var statearr_25241 = state_25214;
(statearr_25241[(10)] = inst_25155__$1);

(statearr_25241[(20)] = inst_25156__$1);

(statearr_25241[(11)] = inst_25157__$1);

(statearr_25241[(21)] = inst_25154__$1);

(statearr_25241[(22)] = inst_25169);

return statearr_25241;
})();
var statearr_25242_25313 = state_25214__$1;
(statearr_25242_25313[(2)] = null);

(statearr_25242_25313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (40))){
var inst_25182 = (state_25214[(23)]);
var inst_25186 = done.call(null,null);
var inst_25187 = cljs.core.async.untap_STAR_.call(null,m,inst_25182);
var state_25214__$1 = (function (){var statearr_25243 = state_25214;
(statearr_25243[(24)] = inst_25186);

return statearr_25243;
})();
var statearr_25244_25314 = state_25214__$1;
(statearr_25244_25314[(2)] = inst_25187);

(statearr_25244_25314[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (33))){
var inst_25173 = (state_25214[(25)]);
var inst_25175 = cljs.core.chunked_seq_QMARK_.call(null,inst_25173);
var state_25214__$1 = state_25214;
if(inst_25175){
var statearr_25245_25315 = state_25214__$1;
(statearr_25245_25315[(1)] = (36));

} else {
var statearr_25246_25316 = state_25214__$1;
(statearr_25246_25316[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (13))){
var inst_25103 = (state_25214[(26)]);
var inst_25106 = cljs.core.async.close_BANG_.call(null,inst_25103);
var state_25214__$1 = state_25214;
var statearr_25247_25317 = state_25214__$1;
(statearr_25247_25317[(2)] = inst_25106);

(statearr_25247_25317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (22))){
var inst_25126 = (state_25214[(8)]);
var inst_25129 = cljs.core.async.close_BANG_.call(null,inst_25126);
var state_25214__$1 = state_25214;
var statearr_25248_25318 = state_25214__$1;
(statearr_25248_25318[(2)] = inst_25129);

(statearr_25248_25318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (36))){
var inst_25173 = (state_25214[(25)]);
var inst_25177 = cljs.core.chunk_first.call(null,inst_25173);
var inst_25178 = cljs.core.chunk_rest.call(null,inst_25173);
var inst_25179 = cljs.core.count.call(null,inst_25177);
var inst_25154 = inst_25178;
var inst_25155 = inst_25177;
var inst_25156 = inst_25179;
var inst_25157 = (0);
var state_25214__$1 = (function (){var statearr_25249 = state_25214;
(statearr_25249[(10)] = inst_25155);

(statearr_25249[(20)] = inst_25156);

(statearr_25249[(11)] = inst_25157);

(statearr_25249[(21)] = inst_25154);

return statearr_25249;
})();
var statearr_25250_25319 = state_25214__$1;
(statearr_25250_25319[(2)] = null);

(statearr_25250_25319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (41))){
var inst_25173 = (state_25214[(25)]);
var inst_25189 = (state_25214[(2)]);
var inst_25190 = cljs.core.next.call(null,inst_25173);
var inst_25154 = inst_25190;
var inst_25155 = null;
var inst_25156 = (0);
var inst_25157 = (0);
var state_25214__$1 = (function (){var statearr_25251 = state_25214;
(statearr_25251[(10)] = inst_25155);

(statearr_25251[(20)] = inst_25156);

(statearr_25251[(27)] = inst_25189);

(statearr_25251[(11)] = inst_25157);

(statearr_25251[(21)] = inst_25154);

return statearr_25251;
})();
var statearr_25252_25320 = state_25214__$1;
(statearr_25252_25320[(2)] = null);

(statearr_25252_25320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (43))){
var state_25214__$1 = state_25214;
var statearr_25253_25321 = state_25214__$1;
(statearr_25253_25321[(2)] = null);

(statearr_25253_25321[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (29))){
var inst_25198 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25254_25322 = state_25214__$1;
(statearr_25254_25322[(2)] = inst_25198);

(statearr_25254_25322[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (44))){
var inst_25207 = (state_25214[(2)]);
var state_25214__$1 = (function (){var statearr_25255 = state_25214;
(statearr_25255[(28)] = inst_25207);

return statearr_25255;
})();
var statearr_25256_25323 = state_25214__$1;
(statearr_25256_25323[(2)] = null);

(statearr_25256_25323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (6))){
var inst_25146 = (state_25214[(29)]);
var inst_25145 = cljs.core.deref.call(null,cs);
var inst_25146__$1 = cljs.core.keys.call(null,inst_25145);
var inst_25147 = cljs.core.count.call(null,inst_25146__$1);
var inst_25148 = cljs.core.reset_BANG_.call(null,dctr,inst_25147);
var inst_25153 = cljs.core.seq.call(null,inst_25146__$1);
var inst_25154 = inst_25153;
var inst_25155 = null;
var inst_25156 = (0);
var inst_25157 = (0);
var state_25214__$1 = (function (){var statearr_25257 = state_25214;
(statearr_25257[(10)] = inst_25155);

(statearr_25257[(20)] = inst_25156);

(statearr_25257[(11)] = inst_25157);

(statearr_25257[(29)] = inst_25146__$1);

(statearr_25257[(21)] = inst_25154);

(statearr_25257[(30)] = inst_25148);

return statearr_25257;
})();
var statearr_25258_25324 = state_25214__$1;
(statearr_25258_25324[(2)] = null);

(statearr_25258_25324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (28))){
var inst_25173 = (state_25214[(25)]);
var inst_25154 = (state_25214[(21)]);
var inst_25173__$1 = cljs.core.seq.call(null,inst_25154);
var state_25214__$1 = (function (){var statearr_25259 = state_25214;
(statearr_25259[(25)] = inst_25173__$1);

return statearr_25259;
})();
if(inst_25173__$1){
var statearr_25260_25325 = state_25214__$1;
(statearr_25260_25325[(1)] = (33));

} else {
var statearr_25261_25326 = state_25214__$1;
(statearr_25261_25326[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (25))){
var inst_25156 = (state_25214[(20)]);
var inst_25157 = (state_25214[(11)]);
var inst_25159 = (inst_25157 < inst_25156);
var inst_25160 = inst_25159;
var state_25214__$1 = state_25214;
if(cljs.core.truth_(inst_25160)){
var statearr_25262_25327 = state_25214__$1;
(statearr_25262_25327[(1)] = (27));

} else {
var statearr_25263_25328 = state_25214__$1;
(statearr_25263_25328[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (34))){
var state_25214__$1 = state_25214;
var statearr_25264_25329 = state_25214__$1;
(statearr_25264_25329[(2)] = null);

(statearr_25264_25329[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (17))){
var state_25214__$1 = state_25214;
var statearr_25265_25330 = state_25214__$1;
(statearr_25265_25330[(2)] = null);

(statearr_25265_25330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (3))){
var inst_25212 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25214__$1,inst_25212);
} else {
if((state_val_25215 === (12))){
var inst_25141 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25266_25331 = state_25214__$1;
(statearr_25266_25331[(2)] = inst_25141);

(statearr_25266_25331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (2))){
var state_25214__$1 = state_25214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25214__$1,(4),ch);
} else {
if((state_val_25215 === (23))){
var state_25214__$1 = state_25214;
var statearr_25267_25332 = state_25214__$1;
(statearr_25267_25332[(2)] = null);

(statearr_25267_25332[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (35))){
var inst_25196 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25268_25333 = state_25214__$1;
(statearr_25268_25333[(2)] = inst_25196);

(statearr_25268_25333[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (19))){
var inst_25113 = (state_25214[(7)]);
var inst_25117 = cljs.core.chunk_first.call(null,inst_25113);
var inst_25118 = cljs.core.chunk_rest.call(null,inst_25113);
var inst_25119 = cljs.core.count.call(null,inst_25117);
var inst_25091 = inst_25118;
var inst_25092 = inst_25117;
var inst_25093 = inst_25119;
var inst_25094 = (0);
var state_25214__$1 = (function (){var statearr_25269 = state_25214;
(statearr_25269[(13)] = inst_25092);

(statearr_25269[(14)] = inst_25091);

(statearr_25269[(15)] = inst_25094);

(statearr_25269[(16)] = inst_25093);

return statearr_25269;
})();
var statearr_25270_25334 = state_25214__$1;
(statearr_25270_25334[(2)] = null);

(statearr_25270_25334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (11))){
var inst_25091 = (state_25214[(14)]);
var inst_25113 = (state_25214[(7)]);
var inst_25113__$1 = cljs.core.seq.call(null,inst_25091);
var state_25214__$1 = (function (){var statearr_25271 = state_25214;
(statearr_25271[(7)] = inst_25113__$1);

return statearr_25271;
})();
if(inst_25113__$1){
var statearr_25272_25335 = state_25214__$1;
(statearr_25272_25335[(1)] = (16));

} else {
var statearr_25273_25336 = state_25214__$1;
(statearr_25273_25336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (9))){
var inst_25143 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25274_25337 = state_25214__$1;
(statearr_25274_25337[(2)] = inst_25143);

(statearr_25274_25337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (5))){
var inst_25089 = cljs.core.deref.call(null,cs);
var inst_25090 = cljs.core.seq.call(null,inst_25089);
var inst_25091 = inst_25090;
var inst_25092 = null;
var inst_25093 = (0);
var inst_25094 = (0);
var state_25214__$1 = (function (){var statearr_25275 = state_25214;
(statearr_25275[(13)] = inst_25092);

(statearr_25275[(14)] = inst_25091);

(statearr_25275[(15)] = inst_25094);

(statearr_25275[(16)] = inst_25093);

return statearr_25275;
})();
var statearr_25276_25338 = state_25214__$1;
(statearr_25276_25338[(2)] = null);

(statearr_25276_25338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (14))){
var state_25214__$1 = state_25214;
var statearr_25277_25339 = state_25214__$1;
(statearr_25277_25339[(2)] = null);

(statearr_25277_25339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (45))){
var inst_25204 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25278_25340 = state_25214__$1;
(statearr_25278_25340[(2)] = inst_25204);

(statearr_25278_25340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (26))){
var inst_25146 = (state_25214[(29)]);
var inst_25200 = (state_25214[(2)]);
var inst_25201 = cljs.core.seq.call(null,inst_25146);
var state_25214__$1 = (function (){var statearr_25279 = state_25214;
(statearr_25279[(31)] = inst_25200);

return statearr_25279;
})();
if(inst_25201){
var statearr_25280_25341 = state_25214__$1;
(statearr_25280_25341[(1)] = (42));

} else {
var statearr_25281_25342 = state_25214__$1;
(statearr_25281_25342[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (16))){
var inst_25113 = (state_25214[(7)]);
var inst_25115 = cljs.core.chunked_seq_QMARK_.call(null,inst_25113);
var state_25214__$1 = state_25214;
if(inst_25115){
var statearr_25282_25343 = state_25214__$1;
(statearr_25282_25343[(1)] = (19));

} else {
var statearr_25283_25344 = state_25214__$1;
(statearr_25283_25344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (38))){
var inst_25193 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25284_25345 = state_25214__$1;
(statearr_25284_25345[(2)] = inst_25193);

(statearr_25284_25345[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (30))){
var state_25214__$1 = state_25214;
var statearr_25285_25346 = state_25214__$1;
(statearr_25285_25346[(2)] = null);

(statearr_25285_25346[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (10))){
var inst_25092 = (state_25214[(13)]);
var inst_25094 = (state_25214[(15)]);
var inst_25102 = cljs.core._nth.call(null,inst_25092,inst_25094);
var inst_25103 = cljs.core.nth.call(null,inst_25102,(0),null);
var inst_25104 = cljs.core.nth.call(null,inst_25102,(1),null);
var state_25214__$1 = (function (){var statearr_25286 = state_25214;
(statearr_25286[(26)] = inst_25103);

return statearr_25286;
})();
if(cljs.core.truth_(inst_25104)){
var statearr_25287_25347 = state_25214__$1;
(statearr_25287_25347[(1)] = (13));

} else {
var statearr_25288_25348 = state_25214__$1;
(statearr_25288_25348[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (18))){
var inst_25139 = (state_25214[(2)]);
var state_25214__$1 = state_25214;
var statearr_25289_25349 = state_25214__$1;
(statearr_25289_25349[(2)] = inst_25139);

(statearr_25289_25349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (42))){
var state_25214__$1 = state_25214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25214__$1,(45),dchan);
} else {
if((state_val_25215 === (37))){
var inst_25173 = (state_25214[(25)]);
var inst_25182 = (state_25214[(23)]);
var inst_25082 = (state_25214[(12)]);
var inst_25182__$1 = cljs.core.first.call(null,inst_25173);
var inst_25183 = cljs.core.async.put_BANG_.call(null,inst_25182__$1,inst_25082,done);
var state_25214__$1 = (function (){var statearr_25290 = state_25214;
(statearr_25290[(23)] = inst_25182__$1);

return statearr_25290;
})();
if(cljs.core.truth_(inst_25183)){
var statearr_25291_25350 = state_25214__$1;
(statearr_25291_25350[(1)] = (39));

} else {
var statearr_25292_25351 = state_25214__$1;
(statearr_25292_25351[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25215 === (8))){
var inst_25094 = (state_25214[(15)]);
var inst_25093 = (state_25214[(16)]);
var inst_25096 = (inst_25094 < inst_25093);
var inst_25097 = inst_25096;
var state_25214__$1 = state_25214;
if(cljs.core.truth_(inst_25097)){
var statearr_25293_25352 = state_25214__$1;
(statearr_25293_25352[(1)] = (10));

} else {
var statearr_25294_25353 = state_25214__$1;
(statearr_25294_25353[(1)] = (11));

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
});})(c__24480__auto___25299,cs,m,dchan,dctr,done))
;
return ((function (switch__24385__auto__,c__24480__auto___25299,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24386__auto__ = null;
var cljs$core$async$mult_$_state_machine__24386__auto____0 = (function (){
var statearr_25295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25295[(0)] = cljs$core$async$mult_$_state_machine__24386__auto__);

(statearr_25295[(1)] = (1));

return statearr_25295;
});
var cljs$core$async$mult_$_state_machine__24386__auto____1 = (function (state_25214){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_25214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e25296){if((e25296 instanceof Object)){
var ex__24389__auto__ = e25296;
var statearr_25297_25354 = state_25214;
(statearr_25297_25354[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25355 = state_25214;
state_25214 = G__25355;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24386__auto__ = function(state_25214){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24386__auto____1.call(this,state_25214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24386__auto____0;
cljs$core$async$mult_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24386__auto____1;
return cljs$core$async$mult_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___25299,cs,m,dchan,dctr,done))
})();
var state__24482__auto__ = (function (){var statearr_25298 = f__24481__auto__.call(null);
(statearr_25298[(6)] = c__24480__auto___25299);

return statearr_25298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___25299,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25357 = arguments.length;
switch (G__25357) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___25369 = arguments.length;
var i__4642__auto___25370 = (0);
while(true){
if((i__4642__auto___25370 < len__4641__auto___25369)){
args__4647__auto__.push((arguments[i__4642__auto___25370]));

var G__25371 = (i__4642__auto___25370 + (1));
i__4642__auto___25370 = G__25371;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25363){
var map__25364 = p__25363;
var map__25364__$1 = (((((!((map__25364 == null))))?(((((map__25364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25364):map__25364);
var opts = map__25364__$1;
var statearr_25366_25372 = state;
(statearr_25366_25372[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25364,map__25364__$1,opts){
return (function (val){
var statearr_25367_25373 = state;
(statearr_25367_25373[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25364,map__25364__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25368_25374 = state;
(statearr_25368_25374[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25359){
var G__25360 = cljs.core.first.call(null,seq25359);
var seq25359__$1 = cljs.core.next.call(null,seq25359);
var G__25361 = cljs.core.first.call(null,seq25359__$1);
var seq25359__$2 = cljs.core.next.call(null,seq25359__$1);
var G__25362 = cljs.core.first.call(null,seq25359__$2);
var seq25359__$3 = cljs.core.next.call(null,seq25359__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25360,G__25361,G__25362,seq25359__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25375 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25376){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25376 = meta25376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25377,meta25376__$1){
var self__ = this;
var _25377__$1 = this;
return (new cljs.core.async.t_cljs$core$async25375(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25376__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25377){
var self__ = this;
var _25377__$1 = this;
return self__.meta25376;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25376","meta25376",-245617817,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25375";

cljs.core.async.t_cljs$core$async25375.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25375");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25375.
 */
cljs.core.async.__GT_t_cljs$core$async25375 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25375(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25376){
return (new cljs.core.async.t_cljs$core$async25375(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25376));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25375(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24480__auto___25539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___25539,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___25539,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25479){
var state_val_25480 = (state_25479[(1)]);
if((state_val_25480 === (7))){
var inst_25394 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25481_25540 = state_25479__$1;
(statearr_25481_25540[(2)] = inst_25394);

(statearr_25481_25540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (20))){
var inst_25406 = (state_25479[(7)]);
var state_25479__$1 = state_25479;
var statearr_25482_25541 = state_25479__$1;
(statearr_25482_25541[(2)] = inst_25406);

(statearr_25482_25541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (27))){
var state_25479__$1 = state_25479;
var statearr_25483_25542 = state_25479__$1;
(statearr_25483_25542[(2)] = null);

(statearr_25483_25542[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (1))){
var inst_25381 = (state_25479[(8)]);
var inst_25381__$1 = calc_state.call(null);
var inst_25383 = (inst_25381__$1 == null);
var inst_25384 = cljs.core.not.call(null,inst_25383);
var state_25479__$1 = (function (){var statearr_25484 = state_25479;
(statearr_25484[(8)] = inst_25381__$1);

return statearr_25484;
})();
if(inst_25384){
var statearr_25485_25543 = state_25479__$1;
(statearr_25485_25543[(1)] = (2));

} else {
var statearr_25486_25544 = state_25479__$1;
(statearr_25486_25544[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (24))){
var inst_25430 = (state_25479[(9)]);
var inst_25453 = (state_25479[(10)]);
var inst_25439 = (state_25479[(11)]);
var inst_25453__$1 = inst_25430.call(null,inst_25439);
var state_25479__$1 = (function (){var statearr_25487 = state_25479;
(statearr_25487[(10)] = inst_25453__$1);

return statearr_25487;
})();
if(cljs.core.truth_(inst_25453__$1)){
var statearr_25488_25545 = state_25479__$1;
(statearr_25488_25545[(1)] = (29));

} else {
var statearr_25489_25546 = state_25479__$1;
(statearr_25489_25546[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (4))){
var inst_25397 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25397)){
var statearr_25490_25547 = state_25479__$1;
(statearr_25490_25547[(1)] = (8));

} else {
var statearr_25491_25548 = state_25479__$1;
(statearr_25491_25548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (15))){
var inst_25424 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25424)){
var statearr_25492_25549 = state_25479__$1;
(statearr_25492_25549[(1)] = (19));

} else {
var statearr_25493_25550 = state_25479__$1;
(statearr_25493_25550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (21))){
var inst_25429 = (state_25479[(12)]);
var inst_25429__$1 = (state_25479[(2)]);
var inst_25430 = cljs.core.get.call(null,inst_25429__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25431 = cljs.core.get.call(null,inst_25429__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25432 = cljs.core.get.call(null,inst_25429__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25479__$1 = (function (){var statearr_25494 = state_25479;
(statearr_25494[(13)] = inst_25431);

(statearr_25494[(9)] = inst_25430);

(statearr_25494[(12)] = inst_25429__$1);

return statearr_25494;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25479__$1,(22),inst_25432);
} else {
if((state_val_25480 === (31))){
var inst_25461 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25461)){
var statearr_25495_25551 = state_25479__$1;
(statearr_25495_25551[(1)] = (32));

} else {
var statearr_25496_25552 = state_25479__$1;
(statearr_25496_25552[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (32))){
var inst_25438 = (state_25479[(14)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25479__$1,(35),out,inst_25438);
} else {
if((state_val_25480 === (33))){
var inst_25429 = (state_25479[(12)]);
var inst_25406 = inst_25429;
var state_25479__$1 = (function (){var statearr_25497 = state_25479;
(statearr_25497[(7)] = inst_25406);

return statearr_25497;
})();
var statearr_25498_25553 = state_25479__$1;
(statearr_25498_25553[(2)] = null);

(statearr_25498_25553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (13))){
var inst_25406 = (state_25479[(7)]);
var inst_25413 = inst_25406.cljs$lang$protocol_mask$partition0$;
var inst_25414 = (inst_25413 & (64));
var inst_25415 = inst_25406.cljs$core$ISeq$;
var inst_25416 = (cljs.core.PROTOCOL_SENTINEL === inst_25415);
var inst_25417 = ((inst_25414) || (inst_25416));
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25417)){
var statearr_25499_25554 = state_25479__$1;
(statearr_25499_25554[(1)] = (16));

} else {
var statearr_25500_25555 = state_25479__$1;
(statearr_25500_25555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (22))){
var inst_25438 = (state_25479[(14)]);
var inst_25439 = (state_25479[(11)]);
var inst_25437 = (state_25479[(2)]);
var inst_25438__$1 = cljs.core.nth.call(null,inst_25437,(0),null);
var inst_25439__$1 = cljs.core.nth.call(null,inst_25437,(1),null);
var inst_25440 = (inst_25438__$1 == null);
var inst_25441 = cljs.core._EQ_.call(null,inst_25439__$1,change);
var inst_25442 = ((inst_25440) || (inst_25441));
var state_25479__$1 = (function (){var statearr_25501 = state_25479;
(statearr_25501[(14)] = inst_25438__$1);

(statearr_25501[(11)] = inst_25439__$1);

return statearr_25501;
})();
if(cljs.core.truth_(inst_25442)){
var statearr_25502_25556 = state_25479__$1;
(statearr_25502_25556[(1)] = (23));

} else {
var statearr_25503_25557 = state_25479__$1;
(statearr_25503_25557[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (36))){
var inst_25429 = (state_25479[(12)]);
var inst_25406 = inst_25429;
var state_25479__$1 = (function (){var statearr_25504 = state_25479;
(statearr_25504[(7)] = inst_25406);

return statearr_25504;
})();
var statearr_25505_25558 = state_25479__$1;
(statearr_25505_25558[(2)] = null);

(statearr_25505_25558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (29))){
var inst_25453 = (state_25479[(10)]);
var state_25479__$1 = state_25479;
var statearr_25506_25559 = state_25479__$1;
(statearr_25506_25559[(2)] = inst_25453);

(statearr_25506_25559[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (6))){
var state_25479__$1 = state_25479;
var statearr_25507_25560 = state_25479__$1;
(statearr_25507_25560[(2)] = false);

(statearr_25507_25560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (28))){
var inst_25449 = (state_25479[(2)]);
var inst_25450 = calc_state.call(null);
var inst_25406 = inst_25450;
var state_25479__$1 = (function (){var statearr_25508 = state_25479;
(statearr_25508[(7)] = inst_25406);

(statearr_25508[(15)] = inst_25449);

return statearr_25508;
})();
var statearr_25509_25561 = state_25479__$1;
(statearr_25509_25561[(2)] = null);

(statearr_25509_25561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (25))){
var inst_25475 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25510_25562 = state_25479__$1;
(statearr_25510_25562[(2)] = inst_25475);

(statearr_25510_25562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (34))){
var inst_25473 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25511_25563 = state_25479__$1;
(statearr_25511_25563[(2)] = inst_25473);

(statearr_25511_25563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (17))){
var state_25479__$1 = state_25479;
var statearr_25512_25564 = state_25479__$1;
(statearr_25512_25564[(2)] = false);

(statearr_25512_25564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (3))){
var state_25479__$1 = state_25479;
var statearr_25513_25565 = state_25479__$1;
(statearr_25513_25565[(2)] = false);

(statearr_25513_25565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (12))){
var inst_25477 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25479__$1,inst_25477);
} else {
if((state_val_25480 === (2))){
var inst_25381 = (state_25479[(8)]);
var inst_25386 = inst_25381.cljs$lang$protocol_mask$partition0$;
var inst_25387 = (inst_25386 & (64));
var inst_25388 = inst_25381.cljs$core$ISeq$;
var inst_25389 = (cljs.core.PROTOCOL_SENTINEL === inst_25388);
var inst_25390 = ((inst_25387) || (inst_25389));
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25390)){
var statearr_25514_25566 = state_25479__$1;
(statearr_25514_25566[(1)] = (5));

} else {
var statearr_25515_25567 = state_25479__$1;
(statearr_25515_25567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (23))){
var inst_25438 = (state_25479[(14)]);
var inst_25444 = (inst_25438 == null);
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25444)){
var statearr_25516_25568 = state_25479__$1;
(statearr_25516_25568[(1)] = (26));

} else {
var statearr_25517_25569 = state_25479__$1;
(statearr_25517_25569[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (35))){
var inst_25464 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
if(cljs.core.truth_(inst_25464)){
var statearr_25518_25570 = state_25479__$1;
(statearr_25518_25570[(1)] = (36));

} else {
var statearr_25519_25571 = state_25479__$1;
(statearr_25519_25571[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (19))){
var inst_25406 = (state_25479[(7)]);
var inst_25426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25406);
var state_25479__$1 = state_25479;
var statearr_25520_25572 = state_25479__$1;
(statearr_25520_25572[(2)] = inst_25426);

(statearr_25520_25572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (11))){
var inst_25406 = (state_25479[(7)]);
var inst_25410 = (inst_25406 == null);
var inst_25411 = cljs.core.not.call(null,inst_25410);
var state_25479__$1 = state_25479;
if(inst_25411){
var statearr_25521_25573 = state_25479__$1;
(statearr_25521_25573[(1)] = (13));

} else {
var statearr_25522_25574 = state_25479__$1;
(statearr_25522_25574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (9))){
var inst_25381 = (state_25479[(8)]);
var state_25479__$1 = state_25479;
var statearr_25523_25575 = state_25479__$1;
(statearr_25523_25575[(2)] = inst_25381);

(statearr_25523_25575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (5))){
var state_25479__$1 = state_25479;
var statearr_25524_25576 = state_25479__$1;
(statearr_25524_25576[(2)] = true);

(statearr_25524_25576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (14))){
var state_25479__$1 = state_25479;
var statearr_25525_25577 = state_25479__$1;
(statearr_25525_25577[(2)] = false);

(statearr_25525_25577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (26))){
var inst_25439 = (state_25479[(11)]);
var inst_25446 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25439);
var state_25479__$1 = state_25479;
var statearr_25526_25578 = state_25479__$1;
(statearr_25526_25578[(2)] = inst_25446);

(statearr_25526_25578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (16))){
var state_25479__$1 = state_25479;
var statearr_25527_25579 = state_25479__$1;
(statearr_25527_25579[(2)] = true);

(statearr_25527_25579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (38))){
var inst_25469 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25528_25580 = state_25479__$1;
(statearr_25528_25580[(2)] = inst_25469);

(statearr_25528_25580[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (30))){
var inst_25431 = (state_25479[(13)]);
var inst_25430 = (state_25479[(9)]);
var inst_25439 = (state_25479[(11)]);
var inst_25456 = cljs.core.empty_QMARK_.call(null,inst_25430);
var inst_25457 = inst_25431.call(null,inst_25439);
var inst_25458 = cljs.core.not.call(null,inst_25457);
var inst_25459 = ((inst_25456) && (inst_25458));
var state_25479__$1 = state_25479;
var statearr_25529_25581 = state_25479__$1;
(statearr_25529_25581[(2)] = inst_25459);

(statearr_25529_25581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (10))){
var inst_25381 = (state_25479[(8)]);
var inst_25402 = (state_25479[(2)]);
var inst_25403 = cljs.core.get.call(null,inst_25402,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25404 = cljs.core.get.call(null,inst_25402,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25405 = cljs.core.get.call(null,inst_25402,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25406 = inst_25381;
var state_25479__$1 = (function (){var statearr_25530 = state_25479;
(statearr_25530[(16)] = inst_25405);

(statearr_25530[(7)] = inst_25406);

(statearr_25530[(17)] = inst_25404);

(statearr_25530[(18)] = inst_25403);

return statearr_25530;
})();
var statearr_25531_25582 = state_25479__$1;
(statearr_25531_25582[(2)] = null);

(statearr_25531_25582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (18))){
var inst_25421 = (state_25479[(2)]);
var state_25479__$1 = state_25479;
var statearr_25532_25583 = state_25479__$1;
(statearr_25532_25583[(2)] = inst_25421);

(statearr_25532_25583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (37))){
var state_25479__$1 = state_25479;
var statearr_25533_25584 = state_25479__$1;
(statearr_25533_25584[(2)] = null);

(statearr_25533_25584[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25480 === (8))){
var inst_25381 = (state_25479[(8)]);
var inst_25399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25381);
var state_25479__$1 = state_25479;
var statearr_25534_25585 = state_25479__$1;
(statearr_25534_25585[(2)] = inst_25399);

(statearr_25534_25585[(1)] = (10));


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
});})(c__24480__auto___25539,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24385__auto__,c__24480__auto___25539,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24386__auto__ = null;
var cljs$core$async$mix_$_state_machine__24386__auto____0 = (function (){
var statearr_25535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25535[(0)] = cljs$core$async$mix_$_state_machine__24386__auto__);

(statearr_25535[(1)] = (1));

return statearr_25535;
});
var cljs$core$async$mix_$_state_machine__24386__auto____1 = (function (state_25479){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_25479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e25536){if((e25536 instanceof Object)){
var ex__24389__auto__ = e25536;
var statearr_25537_25586 = state_25479;
(statearr_25537_25586[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25587 = state_25479;
state_25479 = G__25587;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24386__auto__ = function(state_25479){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24386__auto____1.call(this,state_25479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24386__auto____0;
cljs$core$async$mix_$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24386__auto____1;
return cljs$core$async$mix_$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___25539,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24482__auto__ = (function (){var statearr_25538 = f__24481__auto__.call(null);
(statearr_25538[(6)] = c__24480__auto___25539);

return statearr_25538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___25539,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25589 = arguments.length;
switch (G__25589) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25593 = arguments.length;
switch (G__25593) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__25591_SHARP_){
if(cljs.core.truth_(p1__25591_SHARP_.call(null,topic))){
return p1__25591_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25591_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25594 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25595){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25595 = meta25595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25596,meta25595__$1){
var self__ = this;
var _25596__$1 = this;
return (new cljs.core.async.t_cljs$core$async25594(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25595__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25596){
var self__ = this;
var _25596__$1 = this;
return self__.meta25595;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25594.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25595","meta25595",-1016409079,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25594";

cljs.core.async.t_cljs$core$async25594.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25594");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25594.
 */
cljs.core.async.__GT_t_cljs$core$async25594 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25594(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25595){
return (new cljs.core.async.t_cljs$core$async25594(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25595));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25594(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24480__auto___25714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___25714,mults,ensure_mult,p){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___25714,mults,ensure_mult,p){
return (function (state_25668){
var state_val_25669 = (state_25668[(1)]);
if((state_val_25669 === (7))){
var inst_25664 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25670_25715 = state_25668__$1;
(statearr_25670_25715[(2)] = inst_25664);

(statearr_25670_25715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (20))){
var state_25668__$1 = state_25668;
var statearr_25671_25716 = state_25668__$1;
(statearr_25671_25716[(2)] = null);

(statearr_25671_25716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (1))){
var state_25668__$1 = state_25668;
var statearr_25672_25717 = state_25668__$1;
(statearr_25672_25717[(2)] = null);

(statearr_25672_25717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (24))){
var inst_25647 = (state_25668[(7)]);
var inst_25656 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25647);
var state_25668__$1 = state_25668;
var statearr_25673_25718 = state_25668__$1;
(statearr_25673_25718[(2)] = inst_25656);

(statearr_25673_25718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (4))){
var inst_25599 = (state_25668[(8)]);
var inst_25599__$1 = (state_25668[(2)]);
var inst_25600 = (inst_25599__$1 == null);
var state_25668__$1 = (function (){var statearr_25674 = state_25668;
(statearr_25674[(8)] = inst_25599__$1);

return statearr_25674;
})();
if(cljs.core.truth_(inst_25600)){
var statearr_25675_25719 = state_25668__$1;
(statearr_25675_25719[(1)] = (5));

} else {
var statearr_25676_25720 = state_25668__$1;
(statearr_25676_25720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (15))){
var inst_25641 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25677_25721 = state_25668__$1;
(statearr_25677_25721[(2)] = inst_25641);

(statearr_25677_25721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (21))){
var inst_25661 = (state_25668[(2)]);
var state_25668__$1 = (function (){var statearr_25678 = state_25668;
(statearr_25678[(9)] = inst_25661);

return statearr_25678;
})();
var statearr_25679_25722 = state_25668__$1;
(statearr_25679_25722[(2)] = null);

(statearr_25679_25722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (13))){
var inst_25623 = (state_25668[(10)]);
var inst_25625 = cljs.core.chunked_seq_QMARK_.call(null,inst_25623);
var state_25668__$1 = state_25668;
if(inst_25625){
var statearr_25680_25723 = state_25668__$1;
(statearr_25680_25723[(1)] = (16));

} else {
var statearr_25681_25724 = state_25668__$1;
(statearr_25681_25724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (22))){
var inst_25653 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
if(cljs.core.truth_(inst_25653)){
var statearr_25682_25725 = state_25668__$1;
(statearr_25682_25725[(1)] = (23));

} else {
var statearr_25683_25726 = state_25668__$1;
(statearr_25683_25726[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (6))){
var inst_25649 = (state_25668[(11)]);
var inst_25647 = (state_25668[(7)]);
var inst_25599 = (state_25668[(8)]);
var inst_25647__$1 = topic_fn.call(null,inst_25599);
var inst_25648 = cljs.core.deref.call(null,mults);
var inst_25649__$1 = cljs.core.get.call(null,inst_25648,inst_25647__$1);
var state_25668__$1 = (function (){var statearr_25684 = state_25668;
(statearr_25684[(11)] = inst_25649__$1);

(statearr_25684[(7)] = inst_25647__$1);

return statearr_25684;
})();
if(cljs.core.truth_(inst_25649__$1)){
var statearr_25685_25727 = state_25668__$1;
(statearr_25685_25727[(1)] = (19));

} else {
var statearr_25686_25728 = state_25668__$1;
(statearr_25686_25728[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (25))){
var inst_25658 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25687_25729 = state_25668__$1;
(statearr_25687_25729[(2)] = inst_25658);

(statearr_25687_25729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (17))){
var inst_25623 = (state_25668[(10)]);
var inst_25632 = cljs.core.first.call(null,inst_25623);
var inst_25633 = cljs.core.async.muxch_STAR_.call(null,inst_25632);
var inst_25634 = cljs.core.async.close_BANG_.call(null,inst_25633);
var inst_25635 = cljs.core.next.call(null,inst_25623);
var inst_25609 = inst_25635;
var inst_25610 = null;
var inst_25611 = (0);
var inst_25612 = (0);
var state_25668__$1 = (function (){var statearr_25688 = state_25668;
(statearr_25688[(12)] = inst_25609);

(statearr_25688[(13)] = inst_25634);

(statearr_25688[(14)] = inst_25612);

(statearr_25688[(15)] = inst_25611);

(statearr_25688[(16)] = inst_25610);

return statearr_25688;
})();
var statearr_25689_25730 = state_25668__$1;
(statearr_25689_25730[(2)] = null);

(statearr_25689_25730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (3))){
var inst_25666 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25668__$1,inst_25666);
} else {
if((state_val_25669 === (12))){
var inst_25643 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25690_25731 = state_25668__$1;
(statearr_25690_25731[(2)] = inst_25643);

(statearr_25690_25731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (2))){
var state_25668__$1 = state_25668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25668__$1,(4),ch);
} else {
if((state_val_25669 === (23))){
var state_25668__$1 = state_25668;
var statearr_25691_25732 = state_25668__$1;
(statearr_25691_25732[(2)] = null);

(statearr_25691_25732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (19))){
var inst_25649 = (state_25668[(11)]);
var inst_25599 = (state_25668[(8)]);
var inst_25651 = cljs.core.async.muxch_STAR_.call(null,inst_25649);
var state_25668__$1 = state_25668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25668__$1,(22),inst_25651,inst_25599);
} else {
if((state_val_25669 === (11))){
var inst_25609 = (state_25668[(12)]);
var inst_25623 = (state_25668[(10)]);
var inst_25623__$1 = cljs.core.seq.call(null,inst_25609);
var state_25668__$1 = (function (){var statearr_25692 = state_25668;
(statearr_25692[(10)] = inst_25623__$1);

return statearr_25692;
})();
if(inst_25623__$1){
var statearr_25693_25733 = state_25668__$1;
(statearr_25693_25733[(1)] = (13));

} else {
var statearr_25694_25734 = state_25668__$1;
(statearr_25694_25734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (9))){
var inst_25645 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25695_25735 = state_25668__$1;
(statearr_25695_25735[(2)] = inst_25645);

(statearr_25695_25735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (5))){
var inst_25606 = cljs.core.deref.call(null,mults);
var inst_25607 = cljs.core.vals.call(null,inst_25606);
var inst_25608 = cljs.core.seq.call(null,inst_25607);
var inst_25609 = inst_25608;
var inst_25610 = null;
var inst_25611 = (0);
var inst_25612 = (0);
var state_25668__$1 = (function (){var statearr_25696 = state_25668;
(statearr_25696[(12)] = inst_25609);

(statearr_25696[(14)] = inst_25612);

(statearr_25696[(15)] = inst_25611);

(statearr_25696[(16)] = inst_25610);

return statearr_25696;
})();
var statearr_25697_25736 = state_25668__$1;
(statearr_25697_25736[(2)] = null);

(statearr_25697_25736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (14))){
var state_25668__$1 = state_25668;
var statearr_25701_25737 = state_25668__$1;
(statearr_25701_25737[(2)] = null);

(statearr_25701_25737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (16))){
var inst_25623 = (state_25668[(10)]);
var inst_25627 = cljs.core.chunk_first.call(null,inst_25623);
var inst_25628 = cljs.core.chunk_rest.call(null,inst_25623);
var inst_25629 = cljs.core.count.call(null,inst_25627);
var inst_25609 = inst_25628;
var inst_25610 = inst_25627;
var inst_25611 = inst_25629;
var inst_25612 = (0);
var state_25668__$1 = (function (){var statearr_25702 = state_25668;
(statearr_25702[(12)] = inst_25609);

(statearr_25702[(14)] = inst_25612);

(statearr_25702[(15)] = inst_25611);

(statearr_25702[(16)] = inst_25610);

return statearr_25702;
})();
var statearr_25703_25738 = state_25668__$1;
(statearr_25703_25738[(2)] = null);

(statearr_25703_25738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (10))){
var inst_25609 = (state_25668[(12)]);
var inst_25612 = (state_25668[(14)]);
var inst_25611 = (state_25668[(15)]);
var inst_25610 = (state_25668[(16)]);
var inst_25617 = cljs.core._nth.call(null,inst_25610,inst_25612);
var inst_25618 = cljs.core.async.muxch_STAR_.call(null,inst_25617);
var inst_25619 = cljs.core.async.close_BANG_.call(null,inst_25618);
var inst_25620 = (inst_25612 + (1));
var tmp25698 = inst_25609;
var tmp25699 = inst_25611;
var tmp25700 = inst_25610;
var inst_25609__$1 = tmp25698;
var inst_25610__$1 = tmp25700;
var inst_25611__$1 = tmp25699;
var inst_25612__$1 = inst_25620;
var state_25668__$1 = (function (){var statearr_25704 = state_25668;
(statearr_25704[(12)] = inst_25609__$1);

(statearr_25704[(14)] = inst_25612__$1);

(statearr_25704[(17)] = inst_25619);

(statearr_25704[(15)] = inst_25611__$1);

(statearr_25704[(16)] = inst_25610__$1);

return statearr_25704;
})();
var statearr_25705_25739 = state_25668__$1;
(statearr_25705_25739[(2)] = null);

(statearr_25705_25739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (18))){
var inst_25638 = (state_25668[(2)]);
var state_25668__$1 = state_25668;
var statearr_25706_25740 = state_25668__$1;
(statearr_25706_25740[(2)] = inst_25638);

(statearr_25706_25740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25669 === (8))){
var inst_25612 = (state_25668[(14)]);
var inst_25611 = (state_25668[(15)]);
var inst_25614 = (inst_25612 < inst_25611);
var inst_25615 = inst_25614;
var state_25668__$1 = state_25668;
if(cljs.core.truth_(inst_25615)){
var statearr_25707_25741 = state_25668__$1;
(statearr_25707_25741[(1)] = (10));

} else {
var statearr_25708_25742 = state_25668__$1;
(statearr_25708_25742[(1)] = (11));

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
});})(c__24480__auto___25714,mults,ensure_mult,p))
;
return ((function (switch__24385__auto__,c__24480__auto___25714,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_25709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25709[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_25709[(1)] = (1));

return statearr_25709;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_25668){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_25668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e25710){if((e25710 instanceof Object)){
var ex__24389__auto__ = e25710;
var statearr_25711_25743 = state_25668;
(statearr_25711_25743[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25744 = state_25668;
state_25668 = G__25744;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_25668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_25668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___25714,mults,ensure_mult,p))
})();
var state__24482__auto__ = (function (){var statearr_25712 = f__24481__auto__.call(null);
(statearr_25712[(6)] = c__24480__auto___25714);

return statearr_25712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___25714,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25746 = arguments.length;
switch (G__25746) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25749 = arguments.length;
switch (G__25749) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25752 = arguments.length;
switch (G__25752) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24480__auto___25819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___25819,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___25819,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25791){
var state_val_25792 = (state_25791[(1)]);
if((state_val_25792 === (7))){
var state_25791__$1 = state_25791;
var statearr_25793_25820 = state_25791__$1;
(statearr_25793_25820[(2)] = null);

(statearr_25793_25820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (1))){
var state_25791__$1 = state_25791;
var statearr_25794_25821 = state_25791__$1;
(statearr_25794_25821[(2)] = null);

(statearr_25794_25821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (4))){
var inst_25755 = (state_25791[(7)]);
var inst_25757 = (inst_25755 < cnt);
var state_25791__$1 = state_25791;
if(cljs.core.truth_(inst_25757)){
var statearr_25795_25822 = state_25791__$1;
(statearr_25795_25822[(1)] = (6));

} else {
var statearr_25796_25823 = state_25791__$1;
(statearr_25796_25823[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (15))){
var inst_25787 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
var statearr_25797_25824 = state_25791__$1;
(statearr_25797_25824[(2)] = inst_25787);

(statearr_25797_25824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (13))){
var inst_25780 = cljs.core.async.close_BANG_.call(null,out);
var state_25791__$1 = state_25791;
var statearr_25798_25825 = state_25791__$1;
(statearr_25798_25825[(2)] = inst_25780);

(statearr_25798_25825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (6))){
var state_25791__$1 = state_25791;
var statearr_25799_25826 = state_25791__$1;
(statearr_25799_25826[(2)] = null);

(statearr_25799_25826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (3))){
var inst_25789 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25791__$1,inst_25789);
} else {
if((state_val_25792 === (12))){
var inst_25777 = (state_25791[(8)]);
var inst_25777__$1 = (state_25791[(2)]);
var inst_25778 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25777__$1);
var state_25791__$1 = (function (){var statearr_25800 = state_25791;
(statearr_25800[(8)] = inst_25777__$1);

return statearr_25800;
})();
if(cljs.core.truth_(inst_25778)){
var statearr_25801_25827 = state_25791__$1;
(statearr_25801_25827[(1)] = (13));

} else {
var statearr_25802_25828 = state_25791__$1;
(statearr_25802_25828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (2))){
var inst_25754 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25755 = (0);
var state_25791__$1 = (function (){var statearr_25803 = state_25791;
(statearr_25803[(7)] = inst_25755);

(statearr_25803[(9)] = inst_25754);

return statearr_25803;
})();
var statearr_25804_25829 = state_25791__$1;
(statearr_25804_25829[(2)] = null);

(statearr_25804_25829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (11))){
var inst_25755 = (state_25791[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25791,(10),Object,null,(9));
var inst_25764 = chs__$1.call(null,inst_25755);
var inst_25765 = done.call(null,inst_25755);
var inst_25766 = cljs.core.async.take_BANG_.call(null,inst_25764,inst_25765);
var state_25791__$1 = state_25791;
var statearr_25805_25830 = state_25791__$1;
(statearr_25805_25830[(2)] = inst_25766);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25791__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (9))){
var inst_25755 = (state_25791[(7)]);
var inst_25768 = (state_25791[(2)]);
var inst_25769 = (inst_25755 + (1));
var inst_25755__$1 = inst_25769;
var state_25791__$1 = (function (){var statearr_25806 = state_25791;
(statearr_25806[(10)] = inst_25768);

(statearr_25806[(7)] = inst_25755__$1);

return statearr_25806;
})();
var statearr_25807_25831 = state_25791__$1;
(statearr_25807_25831[(2)] = null);

(statearr_25807_25831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (5))){
var inst_25775 = (state_25791[(2)]);
var state_25791__$1 = (function (){var statearr_25808 = state_25791;
(statearr_25808[(11)] = inst_25775);

return statearr_25808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25791__$1,(12),dchan);
} else {
if((state_val_25792 === (14))){
var inst_25777 = (state_25791[(8)]);
var inst_25782 = cljs.core.apply.call(null,f,inst_25777);
var state_25791__$1 = state_25791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25791__$1,(16),out,inst_25782);
} else {
if((state_val_25792 === (16))){
var inst_25784 = (state_25791[(2)]);
var state_25791__$1 = (function (){var statearr_25809 = state_25791;
(statearr_25809[(12)] = inst_25784);

return statearr_25809;
})();
var statearr_25810_25832 = state_25791__$1;
(statearr_25810_25832[(2)] = null);

(statearr_25810_25832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (10))){
var inst_25759 = (state_25791[(2)]);
var inst_25760 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25791__$1 = (function (){var statearr_25811 = state_25791;
(statearr_25811[(13)] = inst_25759);

return statearr_25811;
})();
var statearr_25812_25833 = state_25791__$1;
(statearr_25812_25833[(2)] = inst_25760);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25791__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25792 === (8))){
var inst_25773 = (state_25791[(2)]);
var state_25791__$1 = state_25791;
var statearr_25813_25834 = state_25791__$1;
(statearr_25813_25834[(2)] = inst_25773);

(statearr_25813_25834[(1)] = (5));


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
});})(c__24480__auto___25819,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24385__auto__,c__24480__auto___25819,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_25814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25814[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_25814[(1)] = (1));

return statearr_25814;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_25791){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_25791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e25815){if((e25815 instanceof Object)){
var ex__24389__auto__ = e25815;
var statearr_25816_25835 = state_25791;
(statearr_25816_25835[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25836 = state_25791;
state_25791 = G__25836;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_25791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_25791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___25819,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24482__auto__ = (function (){var statearr_25817 = f__24481__auto__.call(null);
(statearr_25817[(6)] = c__24480__auto___25819);

return statearr_25817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___25819,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25839 = arguments.length;
switch (G__25839) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24480__auto___25893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___25893,out){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___25893,out){
return (function (state_25871){
var state_val_25872 = (state_25871[(1)]);
if((state_val_25872 === (7))){
var inst_25851 = (state_25871[(7)]);
var inst_25850 = (state_25871[(8)]);
var inst_25850__$1 = (state_25871[(2)]);
var inst_25851__$1 = cljs.core.nth.call(null,inst_25850__$1,(0),null);
var inst_25852 = cljs.core.nth.call(null,inst_25850__$1,(1),null);
var inst_25853 = (inst_25851__$1 == null);
var state_25871__$1 = (function (){var statearr_25873 = state_25871;
(statearr_25873[(7)] = inst_25851__$1);

(statearr_25873[(9)] = inst_25852);

(statearr_25873[(8)] = inst_25850__$1);

return statearr_25873;
})();
if(cljs.core.truth_(inst_25853)){
var statearr_25874_25894 = state_25871__$1;
(statearr_25874_25894[(1)] = (8));

} else {
var statearr_25875_25895 = state_25871__$1;
(statearr_25875_25895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (1))){
var inst_25840 = cljs.core.vec.call(null,chs);
var inst_25841 = inst_25840;
var state_25871__$1 = (function (){var statearr_25876 = state_25871;
(statearr_25876[(10)] = inst_25841);

return statearr_25876;
})();
var statearr_25877_25896 = state_25871__$1;
(statearr_25877_25896[(2)] = null);

(statearr_25877_25896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (4))){
var inst_25841 = (state_25871[(10)]);
var state_25871__$1 = state_25871;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25871__$1,(7),inst_25841);
} else {
if((state_val_25872 === (6))){
var inst_25867 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
var statearr_25878_25897 = state_25871__$1;
(statearr_25878_25897[(2)] = inst_25867);

(statearr_25878_25897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (3))){
var inst_25869 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25871__$1,inst_25869);
} else {
if((state_val_25872 === (2))){
var inst_25841 = (state_25871[(10)]);
var inst_25843 = cljs.core.count.call(null,inst_25841);
var inst_25844 = (inst_25843 > (0));
var state_25871__$1 = state_25871;
if(cljs.core.truth_(inst_25844)){
var statearr_25880_25898 = state_25871__$1;
(statearr_25880_25898[(1)] = (4));

} else {
var statearr_25881_25899 = state_25871__$1;
(statearr_25881_25899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (11))){
var inst_25841 = (state_25871[(10)]);
var inst_25860 = (state_25871[(2)]);
var tmp25879 = inst_25841;
var inst_25841__$1 = tmp25879;
var state_25871__$1 = (function (){var statearr_25882 = state_25871;
(statearr_25882[(11)] = inst_25860);

(statearr_25882[(10)] = inst_25841__$1);

return statearr_25882;
})();
var statearr_25883_25900 = state_25871__$1;
(statearr_25883_25900[(2)] = null);

(statearr_25883_25900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (9))){
var inst_25851 = (state_25871[(7)]);
var state_25871__$1 = state_25871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25871__$1,(11),out,inst_25851);
} else {
if((state_val_25872 === (5))){
var inst_25865 = cljs.core.async.close_BANG_.call(null,out);
var state_25871__$1 = state_25871;
var statearr_25884_25901 = state_25871__$1;
(statearr_25884_25901[(2)] = inst_25865);

(statearr_25884_25901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (10))){
var inst_25863 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
var statearr_25885_25902 = state_25871__$1;
(statearr_25885_25902[(2)] = inst_25863);

(statearr_25885_25902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (8))){
var inst_25851 = (state_25871[(7)]);
var inst_25841 = (state_25871[(10)]);
var inst_25852 = (state_25871[(9)]);
var inst_25850 = (state_25871[(8)]);
var inst_25855 = (function (){var cs = inst_25841;
var vec__25846 = inst_25850;
var v = inst_25851;
var c = inst_25852;
return ((function (cs,vec__25846,v,c,inst_25851,inst_25841,inst_25852,inst_25850,state_val_25872,c__24480__auto___25893,out){
return (function (p1__25837_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25837_SHARP_);
});
;})(cs,vec__25846,v,c,inst_25851,inst_25841,inst_25852,inst_25850,state_val_25872,c__24480__auto___25893,out))
})();
var inst_25856 = cljs.core.filterv.call(null,inst_25855,inst_25841);
var inst_25841__$1 = inst_25856;
var state_25871__$1 = (function (){var statearr_25886 = state_25871;
(statearr_25886[(10)] = inst_25841__$1);

return statearr_25886;
})();
var statearr_25887_25903 = state_25871__$1;
(statearr_25887_25903[(2)] = null);

(statearr_25887_25903[(1)] = (2));


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
});})(c__24480__auto___25893,out))
;
return ((function (switch__24385__auto__,c__24480__auto___25893,out){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_25888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25888[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_25888[(1)] = (1));

return statearr_25888;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_25871){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_25871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e25889){if((e25889 instanceof Object)){
var ex__24389__auto__ = e25889;
var statearr_25890_25904 = state_25871;
(statearr_25890_25904[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25905 = state_25871;
state_25871 = G__25905;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_25871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_25871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___25893,out))
})();
var state__24482__auto__ = (function (){var statearr_25891 = f__24481__auto__.call(null);
(statearr_25891[(6)] = c__24480__auto___25893);

return statearr_25891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___25893,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25907 = arguments.length;
switch (G__25907) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24480__auto___25952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___25952,out){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___25952,out){
return (function (state_25931){
var state_val_25932 = (state_25931[(1)]);
if((state_val_25932 === (7))){
var inst_25913 = (state_25931[(7)]);
var inst_25913__$1 = (state_25931[(2)]);
var inst_25914 = (inst_25913__$1 == null);
var inst_25915 = cljs.core.not.call(null,inst_25914);
var state_25931__$1 = (function (){var statearr_25933 = state_25931;
(statearr_25933[(7)] = inst_25913__$1);

return statearr_25933;
})();
if(inst_25915){
var statearr_25934_25953 = state_25931__$1;
(statearr_25934_25953[(1)] = (8));

} else {
var statearr_25935_25954 = state_25931__$1;
(statearr_25935_25954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (1))){
var inst_25908 = (0);
var state_25931__$1 = (function (){var statearr_25936 = state_25931;
(statearr_25936[(8)] = inst_25908);

return statearr_25936;
})();
var statearr_25937_25955 = state_25931__$1;
(statearr_25937_25955[(2)] = null);

(statearr_25937_25955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (4))){
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25931__$1,(7),ch);
} else {
if((state_val_25932 === (6))){
var inst_25926 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25938_25956 = state_25931__$1;
(statearr_25938_25956[(2)] = inst_25926);

(statearr_25938_25956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (3))){
var inst_25928 = (state_25931[(2)]);
var inst_25929 = cljs.core.async.close_BANG_.call(null,out);
var state_25931__$1 = (function (){var statearr_25939 = state_25931;
(statearr_25939[(9)] = inst_25928);

return statearr_25939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25931__$1,inst_25929);
} else {
if((state_val_25932 === (2))){
var inst_25908 = (state_25931[(8)]);
var inst_25910 = (inst_25908 < n);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25910)){
var statearr_25940_25957 = state_25931__$1;
(statearr_25940_25957[(1)] = (4));

} else {
var statearr_25941_25958 = state_25931__$1;
(statearr_25941_25958[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (11))){
var inst_25908 = (state_25931[(8)]);
var inst_25918 = (state_25931[(2)]);
var inst_25919 = (inst_25908 + (1));
var inst_25908__$1 = inst_25919;
var state_25931__$1 = (function (){var statearr_25942 = state_25931;
(statearr_25942[(8)] = inst_25908__$1);

(statearr_25942[(10)] = inst_25918);

return statearr_25942;
})();
var statearr_25943_25959 = state_25931__$1;
(statearr_25943_25959[(2)] = null);

(statearr_25943_25959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (9))){
var state_25931__$1 = state_25931;
var statearr_25944_25960 = state_25931__$1;
(statearr_25944_25960[(2)] = null);

(statearr_25944_25960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (5))){
var state_25931__$1 = state_25931;
var statearr_25945_25961 = state_25931__$1;
(statearr_25945_25961[(2)] = null);

(statearr_25945_25961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (10))){
var inst_25923 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25946_25962 = state_25931__$1;
(statearr_25946_25962[(2)] = inst_25923);

(statearr_25946_25962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (8))){
var inst_25913 = (state_25931[(7)]);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25931__$1,(11),out,inst_25913);
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
});})(c__24480__auto___25952,out))
;
return ((function (switch__24385__auto__,c__24480__auto___25952,out){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_25947 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25947[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_25947[(1)] = (1));

return statearr_25947;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_25931){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_25931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e25948){if((e25948 instanceof Object)){
var ex__24389__auto__ = e25948;
var statearr_25949_25963 = state_25931;
(statearr_25949_25963[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25964 = state_25931;
state_25931 = G__25964;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_25931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_25931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___25952,out))
})();
var state__24482__auto__ = (function (){var statearr_25950 = f__24481__auto__.call(null);
(statearr_25950[(6)] = c__24480__auto___25952);

return statearr_25950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___25952,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25966 = (function (f,ch,meta25967){
this.f = f;
this.ch = ch;
this.meta25967 = meta25967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25968,meta25967__$1){
var self__ = this;
var _25968__$1 = this;
return (new cljs.core.async.t_cljs$core$async25966(self__.f,self__.ch,meta25967__$1));
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25968){
var self__ = this;
var _25968__$1 = this;
return self__.meta25967;
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25969 = (function (f,ch,meta25967,_,fn1,meta25970){
this.f = f;
this.ch = ch;
this.meta25967 = meta25967;
this._ = _;
this.fn1 = fn1;
this.meta25970 = meta25970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25971,meta25970__$1){
var self__ = this;
var _25971__$1 = this;
return (new cljs.core.async.t_cljs$core$async25969(self__.f,self__.ch,self__.meta25967,self__._,self__.fn1,meta25970__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25971){
var self__ = this;
var _25971__$1 = this;
return self__.meta25970;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25969.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25969.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25965_SHARP_){
return f1.call(null,(((p1__25965_SHARP_ == null))?null:self__.f.call(null,p1__25965_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25969.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25967","meta25967",-996129918,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25966","cljs.core.async/t_cljs$core$async25966",-1999781800,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25970","meta25970",2077635742,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25969";

cljs.core.async.t_cljs$core$async25969.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25969");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25969.
 */
cljs.core.async.__GT_t_cljs$core$async25969 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25969(f__$1,ch__$1,meta25967__$1,___$2,fn1__$1,meta25970){
return (new cljs.core.async.t_cljs$core$async25969(f__$1,ch__$1,meta25967__$1,___$2,fn1__$1,meta25970));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25969(self__.f,self__.ch,self__.meta25967,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25967","meta25967",-996129918,null)], null);
});

cljs.core.async.t_cljs$core$async25966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25966";

cljs.core.async.t_cljs$core$async25966.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25966");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25966.
 */
cljs.core.async.__GT_t_cljs$core$async25966 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25966(f__$1,ch__$1,meta25967){
return (new cljs.core.async.t_cljs$core$async25966(f__$1,ch__$1,meta25967));
});

}

return (new cljs.core.async.t_cljs$core$async25966(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25972 = (function (f,ch,meta25973){
this.f = f;
this.ch = ch;
this.meta25973 = meta25973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25974,meta25973__$1){
var self__ = this;
var _25974__$1 = this;
return (new cljs.core.async.t_cljs$core$async25972(self__.f,self__.ch,meta25973__$1));
});

cljs.core.async.t_cljs$core$async25972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25974){
var self__ = this;
var _25974__$1 = this;
return self__.meta25973;
});

cljs.core.async.t_cljs$core$async25972.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25972.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25972.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25973","meta25973",-86105250,null)], null);
});

cljs.core.async.t_cljs$core$async25972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25972";

cljs.core.async.t_cljs$core$async25972.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25972");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25972.
 */
cljs.core.async.__GT_t_cljs$core$async25972 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25972(f__$1,ch__$1,meta25973){
return (new cljs.core.async.t_cljs$core$async25972(f__$1,ch__$1,meta25973));
});

}

return (new cljs.core.async.t_cljs$core$async25972(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25975 = (function (p,ch,meta25976){
this.p = p;
this.ch = ch;
this.meta25976 = meta25976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25977,meta25976__$1){
var self__ = this;
var _25977__$1 = this;
return (new cljs.core.async.t_cljs$core$async25975(self__.p,self__.ch,meta25976__$1));
});

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25977){
var self__ = this;
var _25977__$1 = this;
return self__.meta25976;
});

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25976","meta25976",753003520,null)], null);
});

cljs.core.async.t_cljs$core$async25975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25975";

cljs.core.async.t_cljs$core$async25975.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25975");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25975.
 */
cljs.core.async.__GT_t_cljs$core$async25975 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25975(p__$1,ch__$1,meta25976){
return (new cljs.core.async.t_cljs$core$async25975(p__$1,ch__$1,meta25976));
});

}

return (new cljs.core.async.t_cljs$core$async25975(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25979 = arguments.length;
switch (G__25979) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24480__auto___26019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___26019,out){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___26019,out){
return (function (state_26000){
var state_val_26001 = (state_26000[(1)]);
if((state_val_26001 === (7))){
var inst_25996 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26002_26020 = state_26000__$1;
(statearr_26002_26020[(2)] = inst_25996);

(statearr_26002_26020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (1))){
var state_26000__$1 = state_26000;
var statearr_26003_26021 = state_26000__$1;
(statearr_26003_26021[(2)] = null);

(statearr_26003_26021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (4))){
var inst_25982 = (state_26000[(7)]);
var inst_25982__$1 = (state_26000[(2)]);
var inst_25983 = (inst_25982__$1 == null);
var state_26000__$1 = (function (){var statearr_26004 = state_26000;
(statearr_26004[(7)] = inst_25982__$1);

return statearr_26004;
})();
if(cljs.core.truth_(inst_25983)){
var statearr_26005_26022 = state_26000__$1;
(statearr_26005_26022[(1)] = (5));

} else {
var statearr_26006_26023 = state_26000__$1;
(statearr_26006_26023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (6))){
var inst_25982 = (state_26000[(7)]);
var inst_25987 = p.call(null,inst_25982);
var state_26000__$1 = state_26000;
if(cljs.core.truth_(inst_25987)){
var statearr_26007_26024 = state_26000__$1;
(statearr_26007_26024[(1)] = (8));

} else {
var statearr_26008_26025 = state_26000__$1;
(statearr_26008_26025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (3))){
var inst_25998 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26000__$1,inst_25998);
} else {
if((state_val_26001 === (2))){
var state_26000__$1 = state_26000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26000__$1,(4),ch);
} else {
if((state_val_26001 === (11))){
var inst_25990 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26009_26026 = state_26000__$1;
(statearr_26009_26026[(2)] = inst_25990);

(statearr_26009_26026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (9))){
var state_26000__$1 = state_26000;
var statearr_26010_26027 = state_26000__$1;
(statearr_26010_26027[(2)] = null);

(statearr_26010_26027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (5))){
var inst_25985 = cljs.core.async.close_BANG_.call(null,out);
var state_26000__$1 = state_26000;
var statearr_26011_26028 = state_26000__$1;
(statearr_26011_26028[(2)] = inst_25985);

(statearr_26011_26028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (10))){
var inst_25993 = (state_26000[(2)]);
var state_26000__$1 = (function (){var statearr_26012 = state_26000;
(statearr_26012[(8)] = inst_25993);

return statearr_26012;
})();
var statearr_26013_26029 = state_26000__$1;
(statearr_26013_26029[(2)] = null);

(statearr_26013_26029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (8))){
var inst_25982 = (state_26000[(7)]);
var state_26000__$1 = state_26000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26000__$1,(11),out,inst_25982);
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
});})(c__24480__auto___26019,out))
;
return ((function (switch__24385__auto__,c__24480__auto___26019,out){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_26014 = [null,null,null,null,null,null,null,null,null];
(statearr_26014[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_26014[(1)] = (1));

return statearr_26014;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_26000){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_26000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e26015){if((e26015 instanceof Object)){
var ex__24389__auto__ = e26015;
var statearr_26016_26030 = state_26000;
(statearr_26016_26030[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26031 = state_26000;
state_26000 = G__26031;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_26000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_26000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___26019,out))
})();
var state__24482__auto__ = (function (){var statearr_26017 = f__24481__auto__.call(null);
(statearr_26017[(6)] = c__24480__auto___26019);

return statearr_26017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___26019,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26033 = arguments.length;
switch (G__26033) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto__){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto__){
return (function (state_26096){
var state_val_26097 = (state_26096[(1)]);
if((state_val_26097 === (7))){
var inst_26092 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
var statearr_26098_26136 = state_26096__$1;
(statearr_26098_26136[(2)] = inst_26092);

(statearr_26098_26136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (20))){
var inst_26062 = (state_26096[(7)]);
var inst_26073 = (state_26096[(2)]);
var inst_26074 = cljs.core.next.call(null,inst_26062);
var inst_26048 = inst_26074;
var inst_26049 = null;
var inst_26050 = (0);
var inst_26051 = (0);
var state_26096__$1 = (function (){var statearr_26099 = state_26096;
(statearr_26099[(8)] = inst_26049);

(statearr_26099[(9)] = inst_26073);

(statearr_26099[(10)] = inst_26051);

(statearr_26099[(11)] = inst_26048);

(statearr_26099[(12)] = inst_26050);

return statearr_26099;
})();
var statearr_26100_26137 = state_26096__$1;
(statearr_26100_26137[(2)] = null);

(statearr_26100_26137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (1))){
var state_26096__$1 = state_26096;
var statearr_26101_26138 = state_26096__$1;
(statearr_26101_26138[(2)] = null);

(statearr_26101_26138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (4))){
var inst_26037 = (state_26096[(13)]);
var inst_26037__$1 = (state_26096[(2)]);
var inst_26038 = (inst_26037__$1 == null);
var state_26096__$1 = (function (){var statearr_26102 = state_26096;
(statearr_26102[(13)] = inst_26037__$1);

return statearr_26102;
})();
if(cljs.core.truth_(inst_26038)){
var statearr_26103_26139 = state_26096__$1;
(statearr_26103_26139[(1)] = (5));

} else {
var statearr_26104_26140 = state_26096__$1;
(statearr_26104_26140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (15))){
var state_26096__$1 = state_26096;
var statearr_26108_26141 = state_26096__$1;
(statearr_26108_26141[(2)] = null);

(statearr_26108_26141[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (21))){
var state_26096__$1 = state_26096;
var statearr_26109_26142 = state_26096__$1;
(statearr_26109_26142[(2)] = null);

(statearr_26109_26142[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (13))){
var inst_26049 = (state_26096[(8)]);
var inst_26051 = (state_26096[(10)]);
var inst_26048 = (state_26096[(11)]);
var inst_26050 = (state_26096[(12)]);
var inst_26058 = (state_26096[(2)]);
var inst_26059 = (inst_26051 + (1));
var tmp26105 = inst_26049;
var tmp26106 = inst_26048;
var tmp26107 = inst_26050;
var inst_26048__$1 = tmp26106;
var inst_26049__$1 = tmp26105;
var inst_26050__$1 = tmp26107;
var inst_26051__$1 = inst_26059;
var state_26096__$1 = (function (){var statearr_26110 = state_26096;
(statearr_26110[(14)] = inst_26058);

(statearr_26110[(8)] = inst_26049__$1);

(statearr_26110[(10)] = inst_26051__$1);

(statearr_26110[(11)] = inst_26048__$1);

(statearr_26110[(12)] = inst_26050__$1);

return statearr_26110;
})();
var statearr_26111_26143 = state_26096__$1;
(statearr_26111_26143[(2)] = null);

(statearr_26111_26143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (22))){
var state_26096__$1 = state_26096;
var statearr_26112_26144 = state_26096__$1;
(statearr_26112_26144[(2)] = null);

(statearr_26112_26144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (6))){
var inst_26037 = (state_26096[(13)]);
var inst_26046 = f.call(null,inst_26037);
var inst_26047 = cljs.core.seq.call(null,inst_26046);
var inst_26048 = inst_26047;
var inst_26049 = null;
var inst_26050 = (0);
var inst_26051 = (0);
var state_26096__$1 = (function (){var statearr_26113 = state_26096;
(statearr_26113[(8)] = inst_26049);

(statearr_26113[(10)] = inst_26051);

(statearr_26113[(11)] = inst_26048);

(statearr_26113[(12)] = inst_26050);

return statearr_26113;
})();
var statearr_26114_26145 = state_26096__$1;
(statearr_26114_26145[(2)] = null);

(statearr_26114_26145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (17))){
var inst_26062 = (state_26096[(7)]);
var inst_26066 = cljs.core.chunk_first.call(null,inst_26062);
var inst_26067 = cljs.core.chunk_rest.call(null,inst_26062);
var inst_26068 = cljs.core.count.call(null,inst_26066);
var inst_26048 = inst_26067;
var inst_26049 = inst_26066;
var inst_26050 = inst_26068;
var inst_26051 = (0);
var state_26096__$1 = (function (){var statearr_26115 = state_26096;
(statearr_26115[(8)] = inst_26049);

(statearr_26115[(10)] = inst_26051);

(statearr_26115[(11)] = inst_26048);

(statearr_26115[(12)] = inst_26050);

return statearr_26115;
})();
var statearr_26116_26146 = state_26096__$1;
(statearr_26116_26146[(2)] = null);

(statearr_26116_26146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (3))){
var inst_26094 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26096__$1,inst_26094);
} else {
if((state_val_26097 === (12))){
var inst_26082 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
var statearr_26117_26147 = state_26096__$1;
(statearr_26117_26147[(2)] = inst_26082);

(statearr_26117_26147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (2))){
var state_26096__$1 = state_26096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26096__$1,(4),in$);
} else {
if((state_val_26097 === (23))){
var inst_26090 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
var statearr_26118_26148 = state_26096__$1;
(statearr_26118_26148[(2)] = inst_26090);

(statearr_26118_26148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (19))){
var inst_26077 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
var statearr_26119_26149 = state_26096__$1;
(statearr_26119_26149[(2)] = inst_26077);

(statearr_26119_26149[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (11))){
var inst_26048 = (state_26096[(11)]);
var inst_26062 = (state_26096[(7)]);
var inst_26062__$1 = cljs.core.seq.call(null,inst_26048);
var state_26096__$1 = (function (){var statearr_26120 = state_26096;
(statearr_26120[(7)] = inst_26062__$1);

return statearr_26120;
})();
if(inst_26062__$1){
var statearr_26121_26150 = state_26096__$1;
(statearr_26121_26150[(1)] = (14));

} else {
var statearr_26122_26151 = state_26096__$1;
(statearr_26122_26151[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (9))){
var inst_26084 = (state_26096[(2)]);
var inst_26085 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26096__$1 = (function (){var statearr_26123 = state_26096;
(statearr_26123[(15)] = inst_26084);

return statearr_26123;
})();
if(cljs.core.truth_(inst_26085)){
var statearr_26124_26152 = state_26096__$1;
(statearr_26124_26152[(1)] = (21));

} else {
var statearr_26125_26153 = state_26096__$1;
(statearr_26125_26153[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (5))){
var inst_26040 = cljs.core.async.close_BANG_.call(null,out);
var state_26096__$1 = state_26096;
var statearr_26126_26154 = state_26096__$1;
(statearr_26126_26154[(2)] = inst_26040);

(statearr_26126_26154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (14))){
var inst_26062 = (state_26096[(7)]);
var inst_26064 = cljs.core.chunked_seq_QMARK_.call(null,inst_26062);
var state_26096__$1 = state_26096;
if(inst_26064){
var statearr_26127_26155 = state_26096__$1;
(statearr_26127_26155[(1)] = (17));

} else {
var statearr_26128_26156 = state_26096__$1;
(statearr_26128_26156[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (16))){
var inst_26080 = (state_26096[(2)]);
var state_26096__$1 = state_26096;
var statearr_26129_26157 = state_26096__$1;
(statearr_26129_26157[(2)] = inst_26080);

(statearr_26129_26157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26097 === (10))){
var inst_26049 = (state_26096[(8)]);
var inst_26051 = (state_26096[(10)]);
var inst_26056 = cljs.core._nth.call(null,inst_26049,inst_26051);
var state_26096__$1 = state_26096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26096__$1,(13),out,inst_26056);
} else {
if((state_val_26097 === (18))){
var inst_26062 = (state_26096[(7)]);
var inst_26071 = cljs.core.first.call(null,inst_26062);
var state_26096__$1 = state_26096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26096__$1,(20),out,inst_26071);
} else {
if((state_val_26097 === (8))){
var inst_26051 = (state_26096[(10)]);
var inst_26050 = (state_26096[(12)]);
var inst_26053 = (inst_26051 < inst_26050);
var inst_26054 = inst_26053;
var state_26096__$1 = state_26096;
if(cljs.core.truth_(inst_26054)){
var statearr_26130_26158 = state_26096__$1;
(statearr_26130_26158[(1)] = (10));

} else {
var statearr_26131_26159 = state_26096__$1;
(statearr_26131_26159[(1)] = (11));

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
});})(c__24480__auto__))
;
return ((function (switch__24385__auto__,c__24480__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24386__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24386__auto____0 = (function (){
var statearr_26132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26132[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24386__auto__);

(statearr_26132[(1)] = (1));

return statearr_26132;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24386__auto____1 = (function (state_26096){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_26096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e26133){if((e26133 instanceof Object)){
var ex__24389__auto__ = e26133;
var statearr_26134_26160 = state_26096;
(statearr_26134_26160[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26161 = state_26096;
state_26096 = G__26161;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24386__auto__ = function(state_26096){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24386__auto____1.call(this,state_26096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24386__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24386__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto__))
})();
var state__24482__auto__ = (function (){var statearr_26135 = f__24481__auto__.call(null);
(statearr_26135[(6)] = c__24480__auto__);

return statearr_26135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto__))
);

return c__24480__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26163 = arguments.length;
switch (G__26163) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26166 = arguments.length;
switch (G__26166) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26169 = arguments.length;
switch (G__26169) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24480__auto___26216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___26216,out){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___26216,out){
return (function (state_26193){
var state_val_26194 = (state_26193[(1)]);
if((state_val_26194 === (7))){
var inst_26188 = (state_26193[(2)]);
var state_26193__$1 = state_26193;
var statearr_26195_26217 = state_26193__$1;
(statearr_26195_26217[(2)] = inst_26188);

(statearr_26195_26217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26194 === (1))){
var inst_26170 = null;
var state_26193__$1 = (function (){var statearr_26196 = state_26193;
(statearr_26196[(7)] = inst_26170);

return statearr_26196;
})();
var statearr_26197_26218 = state_26193__$1;
(statearr_26197_26218[(2)] = null);

(statearr_26197_26218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26194 === (4))){
var inst_26173 = (state_26193[(8)]);
var inst_26173__$1 = (state_26193[(2)]);
var inst_26174 = (inst_26173__$1 == null);
var inst_26175 = cljs.core.not.call(null,inst_26174);
var state_26193__$1 = (function (){var statearr_26198 = state_26193;
(statearr_26198[(8)] = inst_26173__$1);

return statearr_26198;
})();
if(inst_26175){
var statearr_26199_26219 = state_26193__$1;
(statearr_26199_26219[(1)] = (5));

} else {
var statearr_26200_26220 = state_26193__$1;
(statearr_26200_26220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26194 === (6))){
var state_26193__$1 = state_26193;
var statearr_26201_26221 = state_26193__$1;
(statearr_26201_26221[(2)] = null);

(statearr_26201_26221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26194 === (3))){
var inst_26190 = (state_26193[(2)]);
var inst_26191 = cljs.core.async.close_BANG_.call(null,out);
var state_26193__$1 = (function (){var statearr_26202 = state_26193;
(statearr_26202[(9)] = inst_26190);

return statearr_26202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26193__$1,inst_26191);
} else {
if((state_val_26194 === (2))){
var state_26193__$1 = state_26193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26193__$1,(4),ch);
} else {
if((state_val_26194 === (11))){
var inst_26173 = (state_26193[(8)]);
var inst_26182 = (state_26193[(2)]);
var inst_26170 = inst_26173;
var state_26193__$1 = (function (){var statearr_26203 = state_26193;
(statearr_26203[(7)] = inst_26170);

(statearr_26203[(10)] = inst_26182);

return statearr_26203;
})();
var statearr_26204_26222 = state_26193__$1;
(statearr_26204_26222[(2)] = null);

(statearr_26204_26222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26194 === (9))){
var inst_26173 = (state_26193[(8)]);
var state_26193__$1 = state_26193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26193__$1,(11),out,inst_26173);
} else {
if((state_val_26194 === (5))){
var inst_26173 = (state_26193[(8)]);
var inst_26170 = (state_26193[(7)]);
var inst_26177 = cljs.core._EQ_.call(null,inst_26173,inst_26170);
var state_26193__$1 = state_26193;
if(inst_26177){
var statearr_26206_26223 = state_26193__$1;
(statearr_26206_26223[(1)] = (8));

} else {
var statearr_26207_26224 = state_26193__$1;
(statearr_26207_26224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26194 === (10))){
var inst_26185 = (state_26193[(2)]);
var state_26193__$1 = state_26193;
var statearr_26208_26225 = state_26193__$1;
(statearr_26208_26225[(2)] = inst_26185);

(statearr_26208_26225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26194 === (8))){
var inst_26170 = (state_26193[(7)]);
var tmp26205 = inst_26170;
var inst_26170__$1 = tmp26205;
var state_26193__$1 = (function (){var statearr_26209 = state_26193;
(statearr_26209[(7)] = inst_26170__$1);

return statearr_26209;
})();
var statearr_26210_26226 = state_26193__$1;
(statearr_26210_26226[(2)] = null);

(statearr_26210_26226[(1)] = (2));


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
});})(c__24480__auto___26216,out))
;
return ((function (switch__24385__auto__,c__24480__auto___26216,out){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_26211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26211[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_26211[(1)] = (1));

return statearr_26211;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_26193){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_26193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e26212){if((e26212 instanceof Object)){
var ex__24389__auto__ = e26212;
var statearr_26213_26227 = state_26193;
(statearr_26213_26227[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26228 = state_26193;
state_26193 = G__26228;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_26193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_26193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___26216,out))
})();
var state__24482__auto__ = (function (){var statearr_26214 = f__24481__auto__.call(null);
(statearr_26214[(6)] = c__24480__auto___26216);

return statearr_26214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___26216,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26230 = arguments.length;
switch (G__26230) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24480__auto___26296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___26296,out){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___26296,out){
return (function (state_26268){
var state_val_26269 = (state_26268[(1)]);
if((state_val_26269 === (7))){
var inst_26264 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26270_26297 = state_26268__$1;
(statearr_26270_26297[(2)] = inst_26264);

(statearr_26270_26297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (1))){
var inst_26231 = (new Array(n));
var inst_26232 = inst_26231;
var inst_26233 = (0);
var state_26268__$1 = (function (){var statearr_26271 = state_26268;
(statearr_26271[(7)] = inst_26232);

(statearr_26271[(8)] = inst_26233);

return statearr_26271;
})();
var statearr_26272_26298 = state_26268__$1;
(statearr_26272_26298[(2)] = null);

(statearr_26272_26298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (4))){
var inst_26236 = (state_26268[(9)]);
var inst_26236__$1 = (state_26268[(2)]);
var inst_26237 = (inst_26236__$1 == null);
var inst_26238 = cljs.core.not.call(null,inst_26237);
var state_26268__$1 = (function (){var statearr_26273 = state_26268;
(statearr_26273[(9)] = inst_26236__$1);

return statearr_26273;
})();
if(inst_26238){
var statearr_26274_26299 = state_26268__$1;
(statearr_26274_26299[(1)] = (5));

} else {
var statearr_26275_26300 = state_26268__$1;
(statearr_26275_26300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (15))){
var inst_26258 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26276_26301 = state_26268__$1;
(statearr_26276_26301[(2)] = inst_26258);

(statearr_26276_26301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (13))){
var state_26268__$1 = state_26268;
var statearr_26277_26302 = state_26268__$1;
(statearr_26277_26302[(2)] = null);

(statearr_26277_26302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (6))){
var inst_26233 = (state_26268[(8)]);
var inst_26254 = (inst_26233 > (0));
var state_26268__$1 = state_26268;
if(cljs.core.truth_(inst_26254)){
var statearr_26278_26303 = state_26268__$1;
(statearr_26278_26303[(1)] = (12));

} else {
var statearr_26279_26304 = state_26268__$1;
(statearr_26279_26304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (3))){
var inst_26266 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26268__$1,inst_26266);
} else {
if((state_val_26269 === (12))){
var inst_26232 = (state_26268[(7)]);
var inst_26256 = cljs.core.vec.call(null,inst_26232);
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26268__$1,(15),out,inst_26256);
} else {
if((state_val_26269 === (2))){
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26268__$1,(4),ch);
} else {
if((state_val_26269 === (11))){
var inst_26248 = (state_26268[(2)]);
var inst_26249 = (new Array(n));
var inst_26232 = inst_26249;
var inst_26233 = (0);
var state_26268__$1 = (function (){var statearr_26280 = state_26268;
(statearr_26280[(10)] = inst_26248);

(statearr_26280[(7)] = inst_26232);

(statearr_26280[(8)] = inst_26233);

return statearr_26280;
})();
var statearr_26281_26305 = state_26268__$1;
(statearr_26281_26305[(2)] = null);

(statearr_26281_26305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (9))){
var inst_26232 = (state_26268[(7)]);
var inst_26246 = cljs.core.vec.call(null,inst_26232);
var state_26268__$1 = state_26268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26268__$1,(11),out,inst_26246);
} else {
if((state_val_26269 === (5))){
var inst_26236 = (state_26268[(9)]);
var inst_26232 = (state_26268[(7)]);
var inst_26241 = (state_26268[(11)]);
var inst_26233 = (state_26268[(8)]);
var inst_26240 = (inst_26232[inst_26233] = inst_26236);
var inst_26241__$1 = (inst_26233 + (1));
var inst_26242 = (inst_26241__$1 < n);
var state_26268__$1 = (function (){var statearr_26282 = state_26268;
(statearr_26282[(12)] = inst_26240);

(statearr_26282[(11)] = inst_26241__$1);

return statearr_26282;
})();
if(cljs.core.truth_(inst_26242)){
var statearr_26283_26306 = state_26268__$1;
(statearr_26283_26306[(1)] = (8));

} else {
var statearr_26284_26307 = state_26268__$1;
(statearr_26284_26307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (14))){
var inst_26261 = (state_26268[(2)]);
var inst_26262 = cljs.core.async.close_BANG_.call(null,out);
var state_26268__$1 = (function (){var statearr_26286 = state_26268;
(statearr_26286[(13)] = inst_26261);

return statearr_26286;
})();
var statearr_26287_26308 = state_26268__$1;
(statearr_26287_26308[(2)] = inst_26262);

(statearr_26287_26308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (10))){
var inst_26252 = (state_26268[(2)]);
var state_26268__$1 = state_26268;
var statearr_26288_26309 = state_26268__$1;
(statearr_26288_26309[(2)] = inst_26252);

(statearr_26288_26309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26269 === (8))){
var inst_26232 = (state_26268[(7)]);
var inst_26241 = (state_26268[(11)]);
var tmp26285 = inst_26232;
var inst_26232__$1 = tmp26285;
var inst_26233 = inst_26241;
var state_26268__$1 = (function (){var statearr_26289 = state_26268;
(statearr_26289[(7)] = inst_26232__$1);

(statearr_26289[(8)] = inst_26233);

return statearr_26289;
})();
var statearr_26290_26310 = state_26268__$1;
(statearr_26290_26310[(2)] = null);

(statearr_26290_26310[(1)] = (2));


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
});})(c__24480__auto___26296,out))
;
return ((function (switch__24385__auto__,c__24480__auto___26296,out){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_26291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26291[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_26291[(1)] = (1));

return statearr_26291;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_26268){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_26268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e26292){if((e26292 instanceof Object)){
var ex__24389__auto__ = e26292;
var statearr_26293_26311 = state_26268;
(statearr_26293_26311[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26312 = state_26268;
state_26268 = G__26312;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_26268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_26268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___26296,out))
})();
var state__24482__auto__ = (function (){var statearr_26294 = f__24481__auto__.call(null);
(statearr_26294[(6)] = c__24480__auto___26296);

return statearr_26294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___26296,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26314 = arguments.length;
switch (G__26314) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24480__auto___26384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24480__auto___26384,out){
return (function (){
var f__24481__auto__ = (function (){var switch__24385__auto__ = ((function (c__24480__auto___26384,out){
return (function (state_26356){
var state_val_26357 = (state_26356[(1)]);
if((state_val_26357 === (7))){
var inst_26352 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26358_26385 = state_26356__$1;
(statearr_26358_26385[(2)] = inst_26352);

(statearr_26358_26385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (1))){
var inst_26315 = [];
var inst_26316 = inst_26315;
var inst_26317 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26356__$1 = (function (){var statearr_26359 = state_26356;
(statearr_26359[(7)] = inst_26316);

(statearr_26359[(8)] = inst_26317);

return statearr_26359;
})();
var statearr_26360_26386 = state_26356__$1;
(statearr_26360_26386[(2)] = null);

(statearr_26360_26386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (4))){
var inst_26320 = (state_26356[(9)]);
var inst_26320__$1 = (state_26356[(2)]);
var inst_26321 = (inst_26320__$1 == null);
var inst_26322 = cljs.core.not.call(null,inst_26321);
var state_26356__$1 = (function (){var statearr_26361 = state_26356;
(statearr_26361[(9)] = inst_26320__$1);

return statearr_26361;
})();
if(inst_26322){
var statearr_26362_26387 = state_26356__$1;
(statearr_26362_26387[(1)] = (5));

} else {
var statearr_26363_26388 = state_26356__$1;
(statearr_26363_26388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (15))){
var inst_26346 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26364_26389 = state_26356__$1;
(statearr_26364_26389[(2)] = inst_26346);

(statearr_26364_26389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (13))){
var state_26356__$1 = state_26356;
var statearr_26365_26390 = state_26356__$1;
(statearr_26365_26390[(2)] = null);

(statearr_26365_26390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (6))){
var inst_26316 = (state_26356[(7)]);
var inst_26341 = inst_26316.length;
var inst_26342 = (inst_26341 > (0));
var state_26356__$1 = state_26356;
if(cljs.core.truth_(inst_26342)){
var statearr_26366_26391 = state_26356__$1;
(statearr_26366_26391[(1)] = (12));

} else {
var statearr_26367_26392 = state_26356__$1;
(statearr_26367_26392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (3))){
var inst_26354 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26356__$1,inst_26354);
} else {
if((state_val_26357 === (12))){
var inst_26316 = (state_26356[(7)]);
var inst_26344 = cljs.core.vec.call(null,inst_26316);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26356__$1,(15),out,inst_26344);
} else {
if((state_val_26357 === (2))){
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26356__$1,(4),ch);
} else {
if((state_val_26357 === (11))){
var inst_26324 = (state_26356[(10)]);
var inst_26320 = (state_26356[(9)]);
var inst_26334 = (state_26356[(2)]);
var inst_26335 = [];
var inst_26336 = inst_26335.push(inst_26320);
var inst_26316 = inst_26335;
var inst_26317 = inst_26324;
var state_26356__$1 = (function (){var statearr_26368 = state_26356;
(statearr_26368[(11)] = inst_26334);

(statearr_26368[(7)] = inst_26316);

(statearr_26368[(8)] = inst_26317);

(statearr_26368[(12)] = inst_26336);

return statearr_26368;
})();
var statearr_26369_26393 = state_26356__$1;
(statearr_26369_26393[(2)] = null);

(statearr_26369_26393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (9))){
var inst_26316 = (state_26356[(7)]);
var inst_26332 = cljs.core.vec.call(null,inst_26316);
var state_26356__$1 = state_26356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26356__$1,(11),out,inst_26332);
} else {
if((state_val_26357 === (5))){
var inst_26324 = (state_26356[(10)]);
var inst_26317 = (state_26356[(8)]);
var inst_26320 = (state_26356[(9)]);
var inst_26324__$1 = f.call(null,inst_26320);
var inst_26325 = cljs.core._EQ_.call(null,inst_26324__$1,inst_26317);
var inst_26326 = cljs.core.keyword_identical_QMARK_.call(null,inst_26317,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26327 = ((inst_26325) || (inst_26326));
var state_26356__$1 = (function (){var statearr_26370 = state_26356;
(statearr_26370[(10)] = inst_26324__$1);

return statearr_26370;
})();
if(cljs.core.truth_(inst_26327)){
var statearr_26371_26394 = state_26356__$1;
(statearr_26371_26394[(1)] = (8));

} else {
var statearr_26372_26395 = state_26356__$1;
(statearr_26372_26395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (14))){
var inst_26349 = (state_26356[(2)]);
var inst_26350 = cljs.core.async.close_BANG_.call(null,out);
var state_26356__$1 = (function (){var statearr_26374 = state_26356;
(statearr_26374[(13)] = inst_26349);

return statearr_26374;
})();
var statearr_26375_26396 = state_26356__$1;
(statearr_26375_26396[(2)] = inst_26350);

(statearr_26375_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (10))){
var inst_26339 = (state_26356[(2)]);
var state_26356__$1 = state_26356;
var statearr_26376_26397 = state_26356__$1;
(statearr_26376_26397[(2)] = inst_26339);

(statearr_26376_26397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26357 === (8))){
var inst_26324 = (state_26356[(10)]);
var inst_26316 = (state_26356[(7)]);
var inst_26320 = (state_26356[(9)]);
var inst_26329 = inst_26316.push(inst_26320);
var tmp26373 = inst_26316;
var inst_26316__$1 = tmp26373;
var inst_26317 = inst_26324;
var state_26356__$1 = (function (){var statearr_26377 = state_26356;
(statearr_26377[(7)] = inst_26316__$1);

(statearr_26377[(8)] = inst_26317);

(statearr_26377[(14)] = inst_26329);

return statearr_26377;
})();
var statearr_26378_26398 = state_26356__$1;
(statearr_26378_26398[(2)] = null);

(statearr_26378_26398[(1)] = (2));


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
});})(c__24480__auto___26384,out))
;
return ((function (switch__24385__auto__,c__24480__auto___26384,out){
return (function() {
var cljs$core$async$state_machine__24386__auto__ = null;
var cljs$core$async$state_machine__24386__auto____0 = (function (){
var statearr_26379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26379[(0)] = cljs$core$async$state_machine__24386__auto__);

(statearr_26379[(1)] = (1));

return statearr_26379;
});
var cljs$core$async$state_machine__24386__auto____1 = (function (state_26356){
while(true){
var ret_value__24387__auto__ = (function (){try{while(true){
var result__24388__auto__ = switch__24385__auto__.call(null,state_26356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24388__auto__;
}
break;
}
}catch (e26380){if((e26380 instanceof Object)){
var ex__24389__auto__ = e26380;
var statearr_26381_26399 = state_26356;
(statearr_26381_26399[(5)] = ex__24389__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26400 = state_26356;
state_26356 = G__26400;
continue;
} else {
return ret_value__24387__auto__;
}
break;
}
});
cljs$core$async$state_machine__24386__auto__ = function(state_26356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24386__auto____1.call(this,state_26356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24386__auto____0;
cljs$core$async$state_machine__24386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24386__auto____1;
return cljs$core$async$state_machine__24386__auto__;
})()
;})(switch__24385__auto__,c__24480__auto___26384,out))
})();
var state__24482__auto__ = (function (){var statearr_26382 = f__24481__auto__.call(null);
(statearr_26382[(6)] = c__24480__auto___26384);

return statearr_26382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24482__auto__);
});})(c__24480__auto___26384,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1541536475012
