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
### Honey I shrunk the files
#### Minimize Text
- **Manual**: use [UglifyJS](https://skalman.github.io/UglifyJS-online/)
- **Auto**: Webpack
#### Minimize Images
- **Change file format**:  Depending on following uses:
    - JPG: complex images with lots of colors
    - GIF: animations, few colors
    - PNG: logos, transparency
    - SVG: simple icons, logos, illustrations
*More info in which one to use [here](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)*
- **Reduce**:
    - PNG: [TinyPNG](https://tinypng.com/)
    - JPG: [JPEG-Optimizer](http://jpeg-optimizer.com/)
- **Media Querys**: [cheatsheet](http://www.bsidestudios.com/blog/media-queries-common-sizes-cheat-sheet)
```css
@media screen and (min-width: 900px) {
body {
    background: yellow;
}
    body {
        background: url('./large-background.jpg') no-repeat center center fixed;
        background-size: cover;
    }
}
@media screen and (min-width: 500px) {
    body {
        background: url('./large-background.jpg') no-repeat center center fixed;
        background-size: ;
    }
}
```
- **Use CDN**: pages that make the job of handling images for you.
    - [imgix](https://www.imgix.com/)
- **Remove metadata**: remove not needed data from image. can perform that with following examples:
    - [verexif](http://www.verexif.com/)
### The traveling deliveryman



