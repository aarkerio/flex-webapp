(ns flex-webapp.hiccup.layout-view
  (:require [hiccup.form :as f]
            [hiccup.page :refer [html5 include-css include-js]]))

(defn application [content]
  (html5 [:head
          [:title (str ":: Flexiana :: " (:title content))]
          [:meta {:http-equiv "Content-Type" :content "text/html;charset=utf-8"}]
          (include-css "/css/styles.css")
          [:body
           [:div {:class "blog-header"}
            [:div {:class "blog-title" :id "blogtitle"} "Flexiana"]
            [:div {:class "blog-description"} "Scramblings"]]
           [:div {:class "container"}  (:contents content)]]
          [:footer {:class "blog-footer"}
             [:img {:src "/img/warning_clojure.png" :alt "Clojure!" :title "Clojure!" :width "5%"}]]
          ;; (include-js "/js/out/goog/base.js")
          (include-js "/js/compiled/main.js")
          [:div {:id "root-app"} ""]]))
