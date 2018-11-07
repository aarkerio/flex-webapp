(ns flex-webapp.lib.common)

(defn scramble?
  "true if any substring from str1 can be reordered to match str2"
  [str1 str2]
  (if (and str1 str2)
    (let [seq1 (seq (.toLowerCase str1))
          seq2 (seq (.toLowerCase str2))]
      (every? (set seq1) seq2))
    false))
