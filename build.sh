#!/bin/sh

# set -x

#Build Step!
echo "Building Production Leve Code!!\n"

cd nanosoft-app

npm run build

cd ../

echo "Building is Done!!\n"

#Copying Step!
echo "Copying, and Zipping the Compiled Code\n"

echo "Deleting Any Previous compiled-prod-code"

rm -rf ./compiled-prod-code

cp -r ./nanosoft-app/out ./compiled-prod-code

tar -cf compiled-prod.tar ./compiled-prod-code

echo "Copying, and Zipping Done!!"

#CI CD Auto Deploment Step!
echo "Customizing CI CD\n"

cd ci-cd-automation

node custom-ci-cd.js

cd ..

echo "Customizing CI CD Done!! Push Your Code!\n"

#Cleaning Step!

echo "Cleaning Step\n"

rm -rf ./compiled-prod-code

echo "Cleaning Done!!\n"



