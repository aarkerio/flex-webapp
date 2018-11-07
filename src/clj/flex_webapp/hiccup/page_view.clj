(ns flex-webapp.hiccup.page-view
  (:require [hiccup.form :as f]
            [hiccup.element :refer [link-to]]))

(defn vision []
  [:div {:id "content"}
   [:h1 {:class "text-success"} "Vision"]
   [:p {:class "text-paragraph"} "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."]
   [:p {:class "text-paragraph"} [:img {:src "/img/pfrr.jpeg" :title "PPFR" :alt "PPFR"}]]])

(defn scramble-form []
  [:div {:class "form-box"} [:br]
    [:div
    [:form {:id "post-form" }
      [:div {:class "login-form-group"}
        (f/text-field { :maxlength 100 :size 80 :placeholder "First String"} "First String")][:br]
      [:div {:class "login-form-group"}
        (f/text-field { :maxlength 100 :size 80 :placeholder "Second String"} "First String")][:br]
      [:div {:class "login-form-group"}
       (f/submit-button {:name "submit" :id "button-chk"} "Check")]]]
   [:div {:id "display-message" :class "response"}]])
