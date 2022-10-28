---
layout: ../../layouts/BlogLayout.astro
title: "Minikube Cheatsheet"
---

## Synopsis

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

**[🔼Back to Top](#table-of-contents)**

##basic-commands

| name                                         | Command                                                          |
| -------------------------------------------- | ---------------------------------------------------------------- |
| `minikube lifecycle`                         | minikube delete, minikube start, minikube status, Link: minikube |
| `Get minikube version`                       | minikube version                                                 |
| `Get dashboard`                              | minikube dashboard                                               |
| `start minikube`                             | minikube start                                                   |
| `Your local docker to use minikube dockerd`  | eval $(minikube docker-env), Then no need for docker push        |
| `Start minikube with a specific k8s version` | minikube start --kubernetes-version v1.11.0                      |
| `Get IP`                                     | minkube ip                                                       |
| `Get status`                                 | minikube status                                                  |
| `Stop minikube`                              | minikube stop                                                    |
| `Delete minikube`                            | minikube delete                                                  |
| `SSH into minikube`                          | minikube ssh                                                     |
| `Get IP`                                     | minikube ip                                                      |
| `Get service`                                | It will give you the service of the minikube                     |
| `Get logs`                                   | minikube logs                                                    |
| `Update context`                             | minikube update-context                                          |
| `Get version`                                | minikube version                                                 |
| `Get config view`                            | minikube config view                                             |
| `Get config set`                             | minikube config set                                              |

**[🔼Back to Top](#table-of-contents)**
