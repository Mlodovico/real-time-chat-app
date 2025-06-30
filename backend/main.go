package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	hub := NewHub()
	go hub.Run()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		ServeWs(hub, w, r)
	})

	fmt.Println("WebSocket server started on :8081")
	log.Fatal(http.ListenAndServe(":8081", nil))
}