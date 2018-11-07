(ns flex-webapp.app
  (:require [flex-webapp.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
