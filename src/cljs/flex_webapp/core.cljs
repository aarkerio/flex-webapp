(ns flex-webapp.core
  (:require [ajax.core :refer [GET POST]]
            [cljs.loader :as loader]
            [clojure.string :as s]
            [goog.dom :as gdom]
            [goog.string :as gstr]
            [goog.events :as events]
            [goog.style :as style])
  (:import [goog.events EventType]))

(enable-console-print!)

(println "I'm in the core file!")

;; (events/listen (gdom/getElement "button-chk") EventType.CLICK send-data)

;; Ajax handlers
(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn set-message [response]
  (.log js/console (str ">>> Set msg :::  #####  >>>>> " response))
  (let [div-message (gdom/getElement "display-message")
        msg         (:msg response)]
    (set! (.-innerHTML div-message) msg)
    (style/showElement div-message true)))

(defn send-data []
  (.log js/console (str ">>> Send Data :::  #####  >>>>> "))
  (let [str1    (.-value (gdom/getElement "str1"))
        str2    (.-value (gdom/getElement "str2"))]
    (POST "/api/v1/check"
        {:params {:str1  str1
                  :str2  str2}
         :handler set-message
         :error-handler error-handler})))

(defn- load-form []
  (when-let [bform (gdom/getElement "button-chk")]
    (events/listen bform EventType.CLICK send-data)))

(defn ^:export init! []
  (.log js/console (str ">>> VALUE      IIMMMMMM !!!!>>>>> " ))
  (load-form))

