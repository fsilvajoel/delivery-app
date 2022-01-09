#!/bin/bash

# Font Colors
RED="31"
GREEN="32"
NORMALRED="\e[31m"
NORMALGREEN="\e[32m"
BOLDGREEN="\e[1;${GREEN}m"
BOLDRED="\e[1;${RED}m"
ENDCOLOR="\e[0m"

# Vars
DOCKERHUB_USERNAME="growtechnologies"
DOCKER_IMAGE_NAME="zeferino-frontend"
DOCKER_IMAGE_TAG="latest"
SERVER_USER="makemake"
SERVER_HOST="growtechnologies.com.br"
COMPOSE_FILE_PATH="~/delivery-app/docker-compose.yml"

# Build the Docker image
build () {
    echo -e "${BOLDGREEN}Building the Docker image...${ENDCOLOR}"
    docker build -t ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} . --no-cache    

}

# Push the Docker image to Registry
image_push() {
    echo -e "${BOLDGREEN}Pushing the Docker image...${ENDCOLOR}"
    # logged_user=$(docker system info | grep Username | cut -d":" -f 2 | sed -e 's/^[[:space:]]*//')

    # if [ "$logged_user" == "$DOCKERHUB_USERNAME" ]; then
        # echo -e "${NORMALGREEN}User $DOCKERHUB_USERNAME logged!${ENDCOLOR}"
    docker push ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}

    echo -e "${NORMALGREEN}Pause 30s${ENDCOLOR}"
    sleep 30 
    # else
    #     echo -e "${BOLDRED}The user $DOCKERHUB_USERNAME is not logged, please login!${ENDCOLOR}"
    #     echo -e "${NORMALRED}Exiting...${ENDCOLOR}"
    # fi

}

# Deploy the Docker stack to Stage Server
deploy () {
    echo -e "${BOLDGREEN}Running deploy...${ENDCOLOR}"

    echo -e "${BOLDGREEN}Down the Stage docker-compose stack${ENDCOLOR}"
    ssh ${SERVER_USER}@${SERVER_HOST} "docker-compose -f ${COMPOSE_FILE_PATH} down -v"

    echo -e "${BOLDGREEN}Remove the Docker image from the Stage Server${ENDCOLOR}"
    ssh ${SERVER_USER}@${SERVER_HOST} "docker image rm ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"

    echo -e "${BOLDGREEN}Up the docker stack${ENDCOLOR}"
    ssh ${SERVER_USER}@${SERVER_HOST} "docker-compose -f ${COMPOSE_FILE_PATH} up -d" 

}

case $1 in
    build) "$@";;
    deploy) "$@";;
    image_push) "$@";;
    *) echo -e "${NORMALRED}Unrecognized function: ${ENDCOLOR}$1"
esac

echo -e "${NORMALGREEN}Finished!${ENDCOLOR}"
