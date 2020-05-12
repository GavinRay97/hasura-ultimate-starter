# 5. Installs Microk8s through the Snap store and enables the dns and registry addons for it.
sudo snap install microk8s --classic && \
sudo microk8s.enable dns && \
sudo microk8s.enable registry

