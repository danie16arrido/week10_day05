#! /bin/bash
echo "Creating node-mocha esqueleton";
echo "Create specs folder"
mkdir specs;
echo "npm init"
npm init -y;
echo "Installing mocha"
npm install --save-dev mocha;
echo "installing lodash"
npm install --save lodash;
echo "Setup mocha to be run with npm \"test\" command"
sed -i '' 's/echo \\\"Error: no test specified\\\" && exit 1/mocha test/g' ./package.json
echo "Github stuff"
echo "node_modules" >> .gitignore;
git init;
git add --all;
git commit -m "init";
