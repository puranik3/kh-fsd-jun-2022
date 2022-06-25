## Installing VirtualBox (Videos)
- Mac OS X (Intel machine)
    - https://www.youtube.com/watch?v=hd0Lbtly41Y&t=8s
    - https://www.youtube.com/watch?v=NFRzHQZSJvU
- Windows
    - https://www.youtube.com/watch?v=QbmRXJJKsvs&list=PLS1QulWo1RIb9WVQGJ_vh-RQusbZgO_As&index=75

## Some recommended settings
- Select Virtual machine -> Settings -> General -> Advanced
    - Shared clipboard: Bi-directional
    - Drag n drop: Bi-directional
- Select Virtual machine -> Settings -> Display
    - Video memory - 50 MB

- After boot up of Ubuntu
    - Right click on desktop -> Display Settings -> Choose a resolution which works -> Apply it


## Installation on Host OS (Ubuntu)
sudo apt install build-essential dkms linux-headers-$(uname -r)

## Downloads and references
- VirtualBox - https://www.virtualbox.org/wiki/Downloads
- Ubuntu Desktop - https://ubuntu.com/#download

## Tips
- If Virtual box captures your keyboard input, do this to release it
    - On Mac OS - Ctrl + Command
    - On Windows - Ctrl + Alt
- Once the VM is running, in order to resize the screen, click on Video memory in bottom right -> Virtual Screen 1 -> Scale to 300%