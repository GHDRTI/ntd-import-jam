#!/bin/bash

rm -rf dist/
ng build --base-href .
cd dist/ntd-import-jap
zip ntd-import-jap.zip -r *
mv ntd-import-jap.zip ../..
cd ..