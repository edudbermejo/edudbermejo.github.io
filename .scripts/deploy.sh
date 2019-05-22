#!/bin/bash
set -e

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

npm version minor -m "chore: updated version v%s [skip ci]"
git push 
git push --tags

rm -rf .scripts
rm .travis.yml package.json package-lock.json .gitignore

git add . 
git commit -m "chore: clean and ready for prod"

git remote add tokenized "https://${GITHUB_TOKEN}@github.com/edudbermejo/edudbermejo.github.io.git"
git checkout -b master
git push -f tokenized master