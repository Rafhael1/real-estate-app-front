# Real Estate Listing App
test

# Docker 
## Docker for development
There are 2 commands in your package.json that can make it easier for you to use
docker in development: 'docker:build' and 'docker:start'.
You can either run the commands above or you can use 'docker-compose up'(which I dont recommend unless you don't have an image already)
## Building for production 

### Creating an image
First things first, you need to create a Docker image, to do that you can either run do command down below in your terminal
```
docker build -f Dockerfile.prod -t real-estate-app-image-prod .
```

And to create and run a container you just need to run the following command in your terminal
```
docker run --env-file ./.env.production -d -p 8080:80 --name real-estate-app-prod real-estate-app-image-prod
```