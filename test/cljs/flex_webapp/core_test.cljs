(ns flex-webapp.core-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [pjstadig.humane-test-output]
            [flex-webapp.core :as rc]))

(deftest test-home
  (is (= true true)))

