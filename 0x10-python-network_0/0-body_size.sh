#!/bin/bash
curl -s $1 | wc -c | xargs printf "Size of the body: %d bytes\n"

