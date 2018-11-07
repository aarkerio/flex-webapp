(defproject flex-webapp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[cljs-ajax "0.7.4"]
                 [compojure "1.6.1"]
                 [com.bhauman/figwheel-main "0.1.9"]
                 [hiccup "1.0.5"]
                 [http-kit "2.2.0"]
                 [metosin/ring-http-response "0.9.0"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.439" :scope "provided"]
                 [ring "1.7.1"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-json "0.4.0"]]
  :source-paths ["src/clj" "src/cljs"]
  :main ^:skip-aot flex-webapp.core
  :plugins [[lein-ring "0.12.1"]
            [lein-cljsbuild "1.1.7"]]
  :resource-path  "resources"
  :resource-paths ["resources"]
  :target-path "target/%s"
  :cljsbuild {
              :builds {
                       :app {
                             :id "dev"
                             :source-paths ["src/cljs"]
                             :figwheel {:on-jsload "flex-webapp.core/main"}
                             :compiler {:optimizations :none
                                        :verbose       true
                                        :source-map    true
                                        :output-to     "resources/public/js/main.js"
                                        :pretty-print  true}
                             }}}
  :profiles {:uberjar {:aot :all}})
