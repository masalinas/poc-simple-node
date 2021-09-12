# Description 
A simple nodeJS PoC

# Generate project
npm init
npm install express --save

# execute
node .

# Compile image
docker build -t poc-simple-node .

# run image
docker run -it --rm --name poc-simple-node -p 3000:3000 poc-simple-node

# Test api