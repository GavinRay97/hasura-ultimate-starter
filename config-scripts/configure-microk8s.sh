# 6. Genereates a `KUBECONFIG` file for `kubectl` to use Microk8s and sets the `kubectl` context to `microk8s`
# Genereates a `KUBECONFIG` file for `kubectl` to use Microk8s and sets the `kubectl` context to `microk8s`
# This is required for things to function properly, and a reboot will be required for the usermod change to take effect.

sudo microk8s.kubectl config view --flatten > ~/.kube/microk8s-config && \
KUBECONFIG=~/.kube/microk8s-config:~/.kube/config kubectl config view --flatten > ~/.kube/temp-config && \
mv ~/.kube/temp-config ~/.kube/config && \
kubectl config use-context microk8s
sudo usermod -a -G microk8s $USER

