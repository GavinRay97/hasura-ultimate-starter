mkdir -p ~/.kube && microk8s.config -l  | sed "s/:8080/:$API_PORT/" | sudo tee /var/snap/microk8s/current/kubelet.config > ~/.kube/config