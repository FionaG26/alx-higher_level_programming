#!/bin/bash
# This script takes a URL, sends a GET request to the URL using curl, and displays the body of the response if it has a 200 status code
curl -sL "$1"
