(ns flex-webapp.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [flex-webapp.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[flex-webapp started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[flex-webapp has shut down successfully]=-"))
   :middleware wrap-dev})
