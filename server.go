package main

import (
	"log"
	"net/http"
)

func indexHandler() http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "app/index.html")
	}

	return http.HandlerFunc(fn)
}

func main() {
	http.Handle("/", indexHandler())

	log.Println("listening on port 3000")
	http.ListenAndServe(":3000", nil)
}
