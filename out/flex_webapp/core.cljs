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

(println "I'm in the core aka home module!")

(defn export-json []
  (let [json       (.-value (gdom/getElement "json-field"))
        id         (.-value (gdom/getElement "upload-id"))
        csrf-field (.-value (gdom/getElement "__anti-forgery-token"))]
    (POST "/admin/uploads/export"
        {:params {:body  json
                  :id    id}
         :headers {"x-csrf-token" csrf-field}
         :handler set-message
         :error-handler error-handler})))
