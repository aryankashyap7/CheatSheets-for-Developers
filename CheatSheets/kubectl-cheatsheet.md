<h1>Table of Contents</h1>
- Kubectl Cluster Management Commands 

<h2>Kubectl Command Cheatsheet</h2>

<h5>Kubectl is the command line configuration tool for Kubernetes that communicates with a Kubernetes API server. 
Using Kubectl allows you to create, inspect, update, and delete Kubernetes objects.
This cheatsheet will serve as a quick reference to make commands on many common Kubernetes components and resources. </h5>
<br>
<br>
<p>

  <h1>Kubectl Cluster Management Commands </h1>

| Command                                           | Description                                                 |
| ------------------------------------------------- | ------------------------------------------------------------|
| kubectl get namespaces   | Generate a plain-text list of all namespaces                                              | 
| kubectl get pods         | Show a plain-text list of all pods                                                        | 
| kubectl get pods -o wide | Generate a detailed plain-text list of all pods, containing information such as node name | 
| kubectl get daemonset    | Show a plain-text list of all daemon sets                                                 | 
| kubectl create -f [filename] | Create a new service with the definition contained in a [service-name].yaml file      | 
| kubectl apply -f [directory-name]|Create the objects defined in any .yaml, .yml, or .json file in a directory        | 
| kubectl describe nodes [node-name] | view details about a particular node                                            | 
| kubectl describe -f pod.json | Display details about a pod whose name and type are listed in pod.json | 
| kubectl describe pods | show details about all the pods | 
 
