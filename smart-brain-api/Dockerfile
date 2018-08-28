## DockerSetup 1
## https://hub.docker.com/_/node/
FROM node:carbon

## DockerSetup 6
WORKDIR /usr/src/smart-brain-api

## DockerSetup 7
## copy files from running location into docker WORKDIR
COPY ./ ./

## DockerFile 8
RUN npm install

## DockerSetup 2
CMD [ "/bin/bash" ]








## ---------------- General Setup ---------------- ##
## DockerSetup 3 BUILD
## open docker terminal
# cd D:
# cd "path/where/this/file/is"
# docker build -t ${imageName} .
## press enter

## DockerSetup 4 RUN
# docker run -it ${imageName}
## -it is TTY which let us enter to running docker
# docker run -it -d ${imageName}
## -d is daemon run in background
# docker run -it -p 3000:3000 ${imageName}
## -p port, binding port 

## DockerSetup 5 MANAGE CONTAINERS
## https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/learn/v4/t/lecture/10459954?start=0
# docker ps
## see running containers
# docker exec -it ${id or hash} bash
## go into the container
# docker stop ${id or hash}
## stop docker container
