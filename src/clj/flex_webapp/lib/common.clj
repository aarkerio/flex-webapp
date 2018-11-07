(ns flex-webapp.lib.common)

(defn scramble? [str1 str2]
  "true if any substring from str1 can be reordered to match str2"
  (let [freq1 (frequencies str1)
        freq2 (frequencies str2)]
    (every? true? (for [i freq2]
                    (if (get freq1 (key i))  ;; character exists in str1
                      (>=
                       (get freq1 (key i))   ;; there are enough characters in the string
                       (val i))
                      false
                    )
            ))))
