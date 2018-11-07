(ns flex-webapp.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [flex-webapp.core-test]))

(doo-tests 'flex-webapp.core-test)

