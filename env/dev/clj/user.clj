(ns user
  (:require [flex-webapp.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [flex-webapp.figwheel :refer [start-fw stop-fw cljs]]
            [flex-webapp.core :refer [start-app]]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'flex-webapp.core/repl-server))

(defn stop []
  (mount/stop-except #'flex-webapp.core/repl-server))

(defn restart []
  (stop)
  (start))


