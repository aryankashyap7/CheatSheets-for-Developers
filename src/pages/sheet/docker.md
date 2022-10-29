---
layout: ../../layouts/BlogLayout.astro
title: "Docker Cheatsheet"
---

## Run a new Container

Container is a running instance of an image. You can run a container from an image using the `docker run` command.

```bash
# Run a container from an image
docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]

# Run a container from an image and attach to it
docker run -it [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```

| Command                                        | Description                              |
| ---------------------------------------------- | ---------------------------------------- |
| `docker run IMAGE`                             | Start A New Container from an image      |
| `docker run --name CONTAINER IMAGE`            | Assign a name                            |
| `docker run -p HOSTPORT:CONTAINERPORT IMAGE`   | Map a Port                               |
| `docker run -P IMAGE`                          | Map All ports                            |
| `docker run -d IMAGE`                          | Start Container in Background            |
| `docker run --hostname HOSTNAME IMAGE`         | Assign a Hostname                        |
| `docker run --add-host HOSTNAME:IP IMAGE`      | Add a dns entry                          |
| `docker run -v HOSTDIR:TARGETDIR IMAGE`        | Map a local Directory into the Container |
| `docker run -it --entrypoint EXECUTABLE IMAGE` | Change the Entrypoint                    |



## Manage Containers

| Command                                | Description                              |
| -------------------------------------- | ---------------------------------------- |
| `docker ps`                            | Show a list of running containers        |
| `docker ps -a`                         | Show a list of all containers            |
| `docker rm CONTAINER`                  | Delete a container                       |
| `docker rm -f CONTAINER`               | Delete a running container               |
| `docker CONTAINER prune`               | Delete stopped containers                |
| `docker stop CONTAINER`                | Stop a running container                 |
| `docker start CONTAINER`               | Start a stopped container                |
| `docker cp CONTAINER:SOURCE TARGET`    | Copy a file from a container to the host |
| `docker cp TARGET CONTAINER:SOURCE`    | Copy a file from the host to a container |
| `docker exec -it CONTAINER EXECUTABLE` | Start a shell inside a running container |
| `docker rename OLD_NAME NEW_NAME`      | Rename a container                       |
| `docker commit CONTAINER`              | Create an image out of a container       |



## Manage Images

Images are the building blocks of containers. You can manage images using the `docker image` command.

| Command                           | Description                              |
| --------------------------------- | ---------------------------------------- |
| `docker pull IMAGE[:TAG]`         | Download an image                        |
| `docker push IMAGE`               | Upload an image to a repository          |
| `docker rmi IMAGE`                | Delete an image                          |
| `docker images`                   | Show list of all images                  |
| `docker image prune`              | Delete dangling images                   |
| `docker image prune -a`           | Delete all unused images                 |
| `docker build DIRECTORY`          | Build an image from a Dockerfile         |
| `docker tag IMAGE NEWIMAGE`       | Tag an image                             |
| `docker build -t IMAGE DIRECTORY` | Build and tag an image from a Dockerfile |
| `docker save IMAGE > FILE`        | Save an image to a .tar file             |
| `docker load -i TARFILE`          | Load an image from a .tar file           |



## Info and Stats

| Command                 | Description                            |
| ----------------------- | -------------------------------------- |
| `docker logs CONTAINER` | Show the logs of a container           |
| `docker stats`          | Show stats of a running container      |
| `docker top CONTAINER`  | Show processes of a container          |
| `docker version`        | Show installed docker version          |
| `docker inspect NAME`   | Get detailed info about an object      |
| `docker diff CONTAINER` | Show all modified files in a container |
| `docker port CONTAINER` | Show mapped ports of a container       |



## Docker compose

Docker compose is a tool for defining and running multi-container Docker applications. You can use it to run a single container or a complex application with multiple containers.

```bash
# Run a container from a docker-compose.yml file
docker-compose up

# Run a container in the background
docker-compose up -d

# Run a container with a custom docker-compose.yml file

docker-compose -f FILENAME.yml up

# Run a container with a custom docker-compose.yml file and a custom .env file
docker-compose -f FILENAME.yml --env-file .env up
```

| Command                           | Description                                       |
| --------------------------------- | ------------------------------------------------- |
| `docker compose build`            | Build all services from a docker-compose.yml file |
| `docker compose up`               | Start all services                                |
| `docker compose up NAME`          | Start named service and all dependencies          |
| `docker compose run NAME COMMAND` | Run COMMAND in the service NAME                   |
| `docker compose down`             | Stop all services                                 |
| `docker compose logs -f`          | see all logs for the services, following them     |



## Docker Swarm

Docker Swarm is a native clustering tool for Docker. It turns a pool of Docker hosts into a single, virtual Docker host.

| Command                   | Description                         |
| ------------------------- | ----------------------------------- |
| `docker swarm init`       | Initialize a swarm                  |
| `docker swarm join`       | Join a swarm                        |
| `docker swarm leave`      | Leave a swarm                       |
| `docker swarm join-token` | Manage join tokens                  |
| `docker node ls`          | List nodes                          |
| `docker node inspect`     | Inspect a node                      |
| `docker node promote`     | Promote a node                      |
| `docker node demote`      | Demote a node                       |
| `docker node update`      | Update a node                       |
| `docker node rm`          | Remove a node                       |
| `docker service ls`       | List services                       |
| `docker service create`   | Create a new service                |
| `docker service inspect`  | Inspect a service                   |
| `docker service logs`     | Fetch the logs of a service or task |
| `docker service ps`       | List the tasks of a service         |
| `docker service rm`       | Remove a service                    |
| `docker service scale`    | Scale a service                     |
| `docker service update`   | Update a service                    |



## Docker Machine

Docker Machine is a tool for provisioning Docker hosts on your computer, on cloud providers, and inside your own data center. It creates servers, installs Docker on them, then configures the Docker client to talk to them.

| Command                           | Description                                                          |
| --------------------------------- | -------------------------------------------------------------------- |
| `docker-machine create`           | Create a machine                                                     |
| `docker-machine ls`               | List machines                                                        |
| `docker-machine ssh`              | Log into or run a command on a machine with SSH                      |
| `docker-machine start`            | Start a machine                                                      |
| `docker-machine stop`             | Stop a machine                                                       |
| `docker-machine restart`          | Restart a machine                                                    |
| `docker-machine regenerate-certs` | Regenerate TLS Certificates for a machine                            |
| `docker-machine env`              | Display the commands to set up the environment for the Docker client |
| `docker-machine inspect`          | Inspect information about a machine                                  |
| `docker-machine ip`               | Get the IP address of a machine                                      |
| `docker-machine provision`        | Re-provision existing machines                                       |
| `docker-machine rm`               | Remove a machine                                                     |
| `docker-machine scp`              | Copy files between machines                                          |
| `docker-machine ssh`              | Log into or run a command on a machine with SSH                      |
| `docker-machine status`           | Get the status of a machine                                          |
| `docker-machine upgrade`          | Upgrade a machine to the latest version of Docker                    |
| `docker-machine url`              | Get the URL of a machine                                             |
| `docker-machine help`             | Shows a list of commands or help for one command                     |



## Docker Registry

Dockers Registry is a tool to store and distribute Docker images. It is the default registry for Docker Hub.

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `docker login`  | Log in to a Docker registry                           |
| `docker logout` | Log out from a Docker registry                        |
| `docker pull`   | Pull an image or a repository from a registry         |
| `docker push`   | Push an image or a repository to a registry           |
| `docker search` | Search the Docker Hub for images                      |
| `docker tag`    | Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE |



## Dockerfile

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.

| Command       | Description                                                                                                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FROM`        | Set the base image for subsequent instructions                                                                                                                                          |
| `RUN`         | Execute any commands in a new layer on top of the current image and commit the results                                                                                                  |
| `CMD`         | Provide defaults for an executing container                                                                                                                                             |
| `LABEL`       | Set metadata for an image                                                                                                                                                               |
| `EXPOSE`      | Inform Docker that the container listens on the specified network ports at runtime                                                                                                      |
| `ENV`         | Set environment variables                                                                                                                                                               |
| `ADD`         | Copy new files, directories or remote file URLs from SOURCE to the filesystem of the container at the path DEST                                                                         |
| `COPY`        | Copy new files or directories from SOURCE to the filesystem of the container at the path DEST                                                                                           |
| `ENTRYPOINT`  | Configure a container that will run as an executable                                                                                                                                    |
| `VOLUME`      | Create a mount point with the specified name and mark it as holding externally mounted volumes from native host or other containers                                                     |
| `USER`        | Set the user name (or UID) and optionally the user group (or GID) to use when running the image and for any `RUN`, `CMD` and `ENTRYPOINT` instructions that follow it in the Dockerfile |
| `WORKDIR`     | Set the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY` and `ADD` instructions that follow it in the Dockerfile                                                            |
| `ARG`         | Define a variable that users can pass at build-time to the builder with the docker build command using the `--build-arg <varname>=<value>` flag                                         |
| `ONBUILD`     | Add a trigger instruction to an image                                                                                                                                                   |
| `STOPSIGNAL`  | Set the system call signal that will be sent to the container to exit                                                                                                                   |
| `HEALTHCHECK` | Configure a test to perform to check that the container is still working                                                                                                                |
| `SHELL`       | Set the default shell for the shell-form of commands                                                                                                                                    |



## Docker Hub

Docker Hub is a cloud-based registry service which allows you to link code repositories to Docker images. It offers automated builds, webhooks, and team collaboration features.

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `docker login`  | Log in to a Docker registry                           |
| `docker logout` | Log out from a Docker registry                        |
| `docker pull`   | Pull an image or a repository from a registry         |
| `docker push`   | Push an image or a repository to a registry           |
| `docker search` | Search the Docker Hub for images                      |
| `docker tag`    | Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE |



## Docker Networking

Docker networking is a feature that allows you to connect containers to each other and to the outside world. It allows you to create a network of containers that can communicate with each other and the outside world.

| Command                     | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| `docker network create`     | Create a network                                     |
| `docker network connect`    | Connect a container to a network                     |
| `docker network disconnect` | Disconnect a container from a network                |
| `docker network inspect`    | Display detailed information on one or more networks |
| `docker network ls`         | List networks                                        |
| `docker network prune`      | Remove all unused networks                           |
| `docker network rm`         | Remove one or more networks                          |



## Docker Volumes

Docker volumes are the preferred mechanism for persisting data generated by and used by Docker containers. While bind mounts are dependent on the directory structure of the host machine, volumes are completely managed by Docker.

| Command                 | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `docker volume create`  | Create a volume                                     |
| `docker volume inspect` | Display detailed information on one or more volumes |
| `docker volume ls`      | List volumes                                        |
| `docker volume prune`   | Remove all unused local volumes                     |
| `docker volume rm`      | Remove one or more volumes                          |



## Docker Secrets

Docker secrets are sensitive data which you don’t want to store in a Dockerfile or in your application’s source code unencrypted. Docker secrets are encrypted during transit and at rest in a Docker swarm. A given secret is only accessible to those services which have been granted explicit access to it, and only while those service tasks are running.

| Command                 | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `docker secret create`  | Create a secret                                     |
| `docker secret inspect` | Display detailed information on one or more secrets |
| `docker secret ls`      | List secrets                                        |
| `docker secret rm`      | Remove one or more secrets                          |



## Docker Stack

Docker stack is a set of interrelated services that share dependencies, and can be orchestrated and scaled together. A stack is defined in a `docker-compose.yml` file.

| Command                 | Description                                  |
| ----------------------- | -------------------------------------------- |
| `docker stack deploy`   | Deploy a new stack or update an existing one |
| `docker stack ls`       | List stacks                                  |
| `docker stack ps`       | List the tasks in the stack                  |
| `docker stack rm`       | Remove one or more stacks                    |
| `docker stack services` | List the services in the stack               |



## Docker BuildKit

Docker BuildKit is a toolkit for converting source code to build artifacts in an efficient, expressive and repeatable manner. It provides a common set of operations for building container images and artifacts.

| Command         | Description                      |
| --------------- | -------------------------------- |
| `docker build`  | Build an image from a Dockerfile |
| `docker buildx` | Build with BuildKit              |



## Docker Security

Docker security is a set of features that allow you to secure your Docker containers and images.

| Command       | Description                        |
| ------------- | ---------------------------------- |
| `docker scan` | Scan the image for vulnerabilities |


