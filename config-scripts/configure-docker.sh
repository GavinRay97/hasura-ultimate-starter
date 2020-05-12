# 2. Configures Docker so that it can run as a non-root user.
# This is required for compatibility with Garden and Microk8s.
# After running this script, a reboot will be required for the usermod change to take effect.

sudo groupadd docker
sudo usermod -aG docker $USER