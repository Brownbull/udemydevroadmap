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
#### Paralel request
Keep in mind the capacity of [paralel request by browser](https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser)

## Network Optimizations
### Debug Network performance
#### Chrome
- Open **developer tools**, F12
- Select **Network** tab
- Configure with **Slow 3G and disable cache**
- reload page with **Ctrl + Shift + R**

### Minify
- [JS & CSS](https://www.minifier.org/)
- minimize images
- combine files to create fewer files

## Critical Render Path
![CRP](/readmeDeps/CRP.png)
### Path
1. **DOM**
    1. Html
2. **CSSOM**
    1. CSS
    2. Javascript : Try to put javascript at the end, they block css to load.
3. **Render Tree**
4. **Layout**
5. **Paint**
    1. Load

### Files considerations
#### HTML
- Load style tag in the \<head>
- Load script right before \</body>
#### CSS
- Only load whatever is needed
- Above the fold loading
- Media attributes
- less specificity
#### JS
- Load Scripts [asynchronously] or Defer loading of scripts(https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript)
![webPageLoad](/readmeDeps/webPageLoad.png)
  - **\<script async\>**: this will execute in low priority anytime during html parsing, uses like google analytics or tracking scripts(third party scripts).
  - **\<script defer\>**: this will execute after html parsing, uses like stuff that will read on DOM(third party scripts).
- minimize DOM manipulation
- Avoid long running javascript

## Measure Performance 
### Tools 
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [WebPageTest](https://www.webpagetest.org/)

### Other Resources:
- http://optimizilla.com/
- https://tools.pingdom.com/
- https://www.thinkwithgoogle.com/feature/mobile/
- https://developers.google.com/web/tools/lighthouse/
- http://websitespeedranker.com/
- https://pageweight.imgix.com/
- https://developers.google.com/speed/pagespeed/insights/
- https://passmarked.com/
- https://images.guide/
- https://www.crazyegg.com/blog/image-editing-tools/

### Additional image manipulation tools:
- [XNConvert](https://www.xnview.com/en/xnconvert/): This free, cross-platform tool can handle batched images, and performs resizing, optimization, and other transforms.
- [ImageOptim](https://imageoptim.com/mac): This free tool is available for Mac and as an online service, and is specifically aimed at optimizing images for speed, including metadata removal (discussed above).
- [ResizeIt](https://itunes.apple.com/us/app/resizeit/id416280139?mt=12): A Mac-only desktop product that lets you change the size of multiple images simultaneously, and can convert file formats at the same time.
- [PicResize](http://www.picresize.com/): One of several good browser-based tools that gives you lots of options for cropping, rotating, resizing, adding effects to, and converting images.
- [Gimp](https://www.gimp.org/): This ever-popular cross-platform tool just gets better with age. Powerful and flexible, Gimp lets you perform a wide variety of image manipulation tasks including, of course, resizing.

### React Performance
At the en of the url put **?react_perf** then go to developer tools, then record something with performance and looking deeper on javascript calls now you will see the components used
![ReactPerf](/readmeDeps/ReactPerf.png)


# HTTP/2
## Resource
https://developers.google.com/web/fundamentals/performance/http2/


