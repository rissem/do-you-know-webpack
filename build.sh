#! /bin/bash

set -x -e
./node_modules/.bin/webpack $1/entry.js $1/bundle.js
