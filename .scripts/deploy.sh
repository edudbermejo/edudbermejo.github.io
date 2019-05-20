#!/bin/bash
set -e

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

#NEW_VERSION=$(npm version minor --commit-hooks=false)
#git commit -am "chore: updated versION ${NEW_VERSION} [skip ci]"
#git push 
#git push --tags

rm -rf .scripts
rm .travis.yml package.json package-lock.json .gitignore

git add . 
git commit -m "chore: clean and ready for prod"

git push -f -u "https://${GITHUB_TOKEN}@github.com/edudbermejo/edudbermejo.github.io.git" master