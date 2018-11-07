(ns flex-webapp.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[flex-webapp started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[flex-webapp has shut down successfully]=-"))
   :middleware identity})
