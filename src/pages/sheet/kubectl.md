---
layout: ../../layouts/BlogLayout.astro
title: "Kubectl Cheatsheet"
---

## Synopsis

<h5>Kubectl is the command line configuration tool for Kubernetes that communicates with a Kubernetes API server. 
Using Kubectl allows you to create, inspect, update, and delete Kubernetes objects.
This cheatsheet will serve as a quick reference to make commands on many common Kubernetes components and resources. </h5>



## Kubectl Cluster Management Commands

| Command                    | Description                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| kubectl create -f <file>   | Create a resource from a file or stdin.                                                                             |
| kubectl get -f <file>      | Display one or many resources.                                                                                      |
| kubectl describe -f <file> | Show details of a specific resource or group of resources.                                                          |
| kubectl delete -f <file>   | Delete resources either from a file, stdin, or specifying label selectors, names, resource selectors, or resources. |
| kubectl replace -f <file>  | Replace a resource from a file or stdin.                                                                            |
| kubectl apply -f <file>    | Apply a configuration to a resource by file or stdin.                                                               |
| kubectl patch -f <file>    | Update field(s) of a resource using strategic merge patch.                                                          |
| kubectl edit -f <file>     | Edit the definition of a resource on the server.                                                                    |
| kubectl label -f <file>    | Update the labels on a resource.                                                                                    |
| kubectl annotate -f <file> | Update the annotations on a resource.                                                                               |
| kubectl get namespaces     | List all namespaces in the current context.                                                                         |



## Kubectl Cluster Information Commands

| Command                         | Description                                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| kubectl cluster-info            | Display the address of the Kubernetes API server and the health status of the master and worker nodes |
| kubectl cluster-info dump       | Display cluster information in a human-readable format                                                |
| kubectl get componentstatuses   | Display the health status of the master and worker nodes                                              |
| kubectl get nodes               | Display a list of all nodes in the cluster                                                            |
| kubectl get nodes -o wide       | Display a list of all nodes in the cluster, with more details                                         |
| kubectl get pods                | Display a list of all pods in the cluster                                                             |
| kubectl get pods -o wide        | Display a list of all pods in the cluster, with more details                                          |
| kubectl get services            | Display a list of all services in the cluster                                                         |
| kubectl get services -o wide    | Display a list of all services in the cluster, with more details                                      |
| kubectl get deployments         | Display a list of all deployments in the cluster                                                      |
| kubectl get deployments -o wide | Display a list of all deployments in the cluster, with more details                                   |
| kubectl get daemonsets          | Display a list of all daemonsets in the cluster                                                       |
| kubectl get daemonsets -o wide  | Display a list of all daemonsets in the cluster, with more details                                    |



## Kubectl Cluster Configuration Commands

| Command                                                                                | Description                                           |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| kubectl config view                                                                    | Display the merged kubeconfig settings                |
| kubectl config view -o json                                                            | Display the merged kubeconfig settings in JSON format |
| kubectl config view -o yaml                                                            | Display the merged kubeconfig settings in YAML format |
| kubectl config current-context                                                         | Display the current-context                           |
| kubectl config use-context [context-name]                                              | Set the default context to [context-name]             |
| kubectl config set-context [context-name] --cluster=[cluster-name] --user=[user-name]  | Set a context using the specified cluster and user    |
| kubectl config unset users.[user-name]                                                 | Unset a user entry in kubeconfig                      |
| kubectl config unset contexts.[context-name]                                           | Unset a context entry in kubeconfig                   |
| kubectl config unset clusters.[cluster-name]                                           | Unset a cluster entry in kubeconfig                   |
| kubectl config set-cluster [cluster-name] --server=[server-address]                    | Set a cluster entry in kubeconfig                     |
| kubectl config set-credentials [user-name] --username=[username] --password=[password] | Set a user entry in kubeconfig                        |
| kubectl config set-credentials [user-name] --token=[token]                             | Set a user entry in kubeconfig                        |



## Kubectl Cluster Troubleshooting Commands

| Command                                                  | Description                                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------------------------- |
| kubectl get events                                       | Display a list of all events in the cluster                                     |
| kubectl get events --sort-by=.metadata.creationTimestamp | Display a list of all events sorted by creation timestamp                       |
| kubectl describe nodes [node-name]                       | Display details about a particular node                                         |
| kubectl describe pods [pod-name]                         | Display details about a particular pod                                          |
| kubectl describe services [service-name]                 | Display details about a particular service                                      |
| kubectl describe deployments [deployment-name]           | Display details about a particular deployment                                   |
| kubectl describe daemonsets [daemonset-name]             | Display details about a particular daemonset                                    |
| kubectl logs [pod-name]                                  | Display the logs for a particular pod                                           |
| kubectl logs -f [pod-name]                               | Display the logs for a particular pod, and follow the log stream                |
| kubectl logs [pod-name] -c [container-name]              | Display the logs for a particular container in a pod                            |
| kubectl logs -f [pod-name] -c [container-name]           | Display the logs for a particular container in a pod, and follow the log stream |
| kubectl exec [pod-name] -- [command]                     | Execute a command on a particular pod                                           |
| kubectl exec -it [pod-name] -- [command]                 | Execute a command on a particular pod, with an interactive terminal             |


