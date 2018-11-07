(ns flex-webapp.core-test
  (:require [cheshire.core :as cheshire]
            [clojure.test :refer :all]
            [flex-webapp.core :refer :all]
            [ring.mock.request :as mock]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))

(defn parse-body [body]
  (cheshire/parse-string (slurp body) true))

(deftest a-test
  (testing "Test POST request to /api/v1/check returns expected response"
    (let [response (app (-> (mock/request :get  "/api/plus?x=1&y=2")))
          body     (parse-body (:body response))]
      (is (= (:status response) 200))
      (is (= (:result body) 3)))))
