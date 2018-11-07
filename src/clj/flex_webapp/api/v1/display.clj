(ns flex-webapp.api.v1.display
  (:require [flex-webapp.lib.common :as c]
            [ring.util.http-response :as response]))

(defn check
  "POST api/v1/check"
  [params]
  (let [str1      (:str1 params)
        str2      (:str2 params)]
    (response/ok (c/scramble? str1 str2))))
