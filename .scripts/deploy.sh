#!/bin/bash
set -e

#npm version minor --commit-hooks=false
#git commit -am "chore: updated version [skip ci]"
#git push 
#git push --tags

rm -rf .scripts
rm .travis package.json package-lock.json

git add . 
git commit -m "chore: clean and ready for prod"

git push -f origin master