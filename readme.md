# Course Readme
I will write on this file all the tips, techniques and workflows followed in the course by section, language, task or framework.
*note: this sign ` is alt + 96*
***
- [Course Readme](#course-readme)
- [SSH](#ssh)
    - [Setup SSH on GitHub Account](#setup-ssh-on-github-account)
        - [Procedure](#procedure)
        - [Requirements](#requirements)
        - [Create RSA](#create-rsa)
        - [Commands](#commands)
***
# SSH
## Setup SSH on GitHub Account

### Procedure
1. Install requirements.
2. Create RSA.
3. Copy public key from .shh folder.
4. Make/Goto .ssh directory on server.
5. Add public key into known_hosts file, this can be done on Settings on servers platforms too.
6. In case you have more than one key, connect on putty and add it with:
```shell
ssh-add path/to/your/id_rsa
```

### Requirements
- **Putty**: Software to use SSH. [download.](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
- *mPutty(Optional)*: Multisession for Putty. [download](http://ttyplus.com/downloads.html) 

### Create RSA
```shell
cd ~/.ssh
ssh-keygen -C "comment" # Linux
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" # Windows
# then just press enter twice to get the RSA
```

### Commands
```shell
ssh brownbull@localhost # Connect
# Once connected
ssh-add -l # see list of identities
ssh-add -D # Delete all your identities
```

***
# Performance
## Make a webapp faster



