//https://drstearns.github.io/tutorials/goweb/

package main

import (
    "log"
    "net/http"
);

//HelloHandler handles requests for the '/hello' resource
func HelloHandler(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("Hello, Web!\n"))
}

func main() {
    //listen port 80 for requests addressed to any host
    addr := ":4000"

    //create a new mux (router)
    //the mux calls different functions for different resource paths
    mux := http.NewServeMux()

    //tell it to call the HelloHandler() function
    //when someone requests the resource path '/'
    mux.HandleFunc("/api/hello", HelloHandler)

    //start the web server using the mux as the root handler,
    //and report any errors that occur.
    //the ListenAndServe() function will block so
    //this program will continue to run until killed
    log.Printf("server is listening at %s...", addr)
    log.Fatal(http.ListenAndServe(addr, mux))
}
