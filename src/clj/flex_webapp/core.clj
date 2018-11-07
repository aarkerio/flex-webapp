(ns flex-webapp.core
  (:require [clojure.tools.logging :as log]
            [compojure.route :refer [files not-found]]
            [compojure.handler :as handler] ; form, query params decode; cookie; session, etc
            [compojure.core :refer [defroutes GET POST DELETE ANY context]]
            [flex-webapp.api.v1.display :as api]
            [flex-webapp.hiccup.layout-view :as layout]
            [flex-webapp.hiccup.page-view :as page-view]
            [org.httpkit.server :as s]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.json :as middleware]
            [ring.middleware.reload :as reload])
  (:gen-class))

(defonce server (atom nil))

(defn index [req]
  (layout/application {:title "Index" :contents (page-view/scramble-form) }))

(defroutes all-routes
  (GET "/" [] index)
  (POST "/api/v1/check" request (api/check request))
  (files "/static/") ;; static file url prefix /static, in `public` folder
  (not-found "<p>Page not found.</p>")) ;; all other, return 404

(def app
  (-> (reload/wrap-reload (handler/site #'all-routes))
      (middleware/wrap-json-body {:keywords? true})
      middleware/wrap-json-response))

(defn -main [& args]
  ;; The #' is useful when you want to hot-reload code
  ;; You may want to take a look: https://github.com/clojure/tools.namespace
  ;; and http://http-kit.org/migration.html#reload
  (log/info " >>>>> Launching!!")
  (reset! server (s/run-server app {:port 8080})))


