(ns flex-webapp.test.handler
  (:require [cheshire.core :as cheshire]
            [clojure.test :refer :all]
            [ring.mock.request :refer :all]
            [flex-webapp.handler :refer :all]
            [flex-webapp.middleware.formats :as formats]
            [muuntaja.core :as m]
            [mount.core :as mount]))

(defn parse-json [body]
  (m/decode formats/instance "application/json" body))

(use-fixtures
  :once
  (fn [f]
    (mount/start #'flex-webapp.config/env
                 #'flex-webapp.handler/app)
    (f)))

(deftest test-app
  (testing "main route"
    (let [response (app (request :get "/"))]
      (is (= 200 (:status response)))))

  (testing "not-found route"
    (let [response (app (request :get "/invalid"))]
      (is (= 404 (:status response))))))

(defn parse-body [body]
  (cheshire/parse-string (slurp body) true))

(deftest a-test
  (testing "Test POST request to /api/v1/check returns expected response"
    (let [response (app (-> (mock/request :post  "/api/v1/check?str1=1&str2=2")))
          body     (parse-body (:body response))]
      (is (= (:status response) 200))
      (is (= (:result body) true)))))
