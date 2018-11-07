(ns flex-webapp.core
  (:require [ajax.core :refer [GET POST]]
            [cljs.loader :as loader]
            [clojure.string :as s]
            [goog.dom :as gdom]
            [goog.string :as gstr]
            [goog.events :as events]
            [goog.style :as style]
            [struct.core :as st])
  (:import [goog.events EventType]))

(enable-console-print!)

(println "I'm in the core file!")

;; Validate data in form
(def strings-schema
  [[:str1 st/required st/string
    {:message "First string must contain at least 3 characters"
     :validate #(> (count %) 2)}]
   [:str2 st/required st/string
    {:message "Second string must contain at least 3 characters"
     :validate #(> (count %) 2)}]])

(defn validate-strings [strings]
  (first
    (st/validate strings strings-schema)))

;; Ajax handlers
(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn set-message [response]
  (let [div-message (gdom/getElement "display-message")
        msg         (:msg response)]
    (set! (.-innerHTML div-message) msg)
    (style/showElement div-message true)))

(defn send-data []
  (let [str1    (.-value (gdom/getElement "str1"))
        str2    (.-value (gdom/getElement "str2"))
        errors  (-> {:str1 str1 :str2 str2} (validate-strings))]
    (if (= errors nil)
      (POST "/api/v1/check"
          {:params {:str1  str1
                    :str2  str2}
           :handler set-message
           :error-handler error-handler})
      (set-message {:msg (str "Bad formatted string " (vals errors))}))))

(defn- load-form []
  (when-let [bform (gdom/getElement "button-chk")]
    (events/listen bform EventType.CLICK send-data)))

(defn ^:export init! []
  (load-form))

