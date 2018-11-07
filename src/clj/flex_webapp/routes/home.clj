(ns flex-webapp.routes.home
  (:require [flex-webapp.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [flex-webapp.api.v1.display :as api]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET  "/"             []      (home-page))
  (POST "/api/v1/check" request (api/check (:params request)))
  (GET  "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8"))))

