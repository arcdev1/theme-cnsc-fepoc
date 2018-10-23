theme-gcwu-fegc
===============

A CNSC proof-of-concept implementation of the Government of Canada (GC) Web Usability theme for the Web Experience Toolkit

## Getting Started

To get started make sure you have Admin rights on your machine and follow these three important steps:

1. Install the prerequistites
2. Clone this repo
3. Run the setup script

Each step is detailed below.

### 1. Installing Prerequisites

You must have the following installed on your system to make this project work:

* Git
* NodeJS
* Python 2.7
* C++ runtime

The easiest way to install them is by using
the Visual Studio installer.

If you do not have a recent version of Visual Studio. You can get the community edition from:
https://visualstudio.microsoft.com/vs/

During the install phase for Visual Studio make sure to select:

* Git
* Node
* Python 2.7
* C++ Desktop Development

If you already have Visual Studio installed, follow the instructions below.

1. Navigate to Control Panel
2. Go to Programs
3. Click on Programs and Features
4. Find Microsoft Visual Studio in the list of programs.
5. Right click on Microsoft Visual Studio
6. Select Change
7. Select Modify
8. Choose the packages you want (Git, Node, Python, C++)
10. Select Next

After everything is installed. Reboot.

When your machine comes back make sure to add the NPM folder to your System's PATH. 

1. From the desktop, right-click My Computer and click Properties.
2. In the System Properties window, click on the Advanced tab.
3. In the Advanced section, click the Environment Variables button.
4. in the Environment Variables window, highlight the Path variable in the Systems Variable section and click the Edit button. Make sure the following path appears at the end of the PATH string: `c:\Users\<username>\AppData\Roaming\npm;`

Don't forget to replace `<username>` with your actual Windows username.

### 2. Cloning this repo
Open a command prompy and run:
```bash
git -c http.sslVerify=false clone https://github.com/arcdev1/theme-cnsc-fepoc.git
```

Alternatively, to start fresh, you can download the GCWU theme directly from:
https://github.com/wet-boew/theme-gcwu-fegc/archive/v4.0.27.zip

### 3. Run the setup script
At the command prompt, run the following commands:
```bash
npm config set strict-ssl false
npm config set registry="http://registry.npmjs.org/"
cd theme-cnsc-fepoc
cd script
setup
```
*Note:* Mac users should use `sh setup` instead.

If you see errors relating to `postinstall` run the following command from the project root `/theme-cnsc-fepoc`
```bash
npm run postinstall
```

*Note:* Every time you open a new Command Prompt, you will need to run the following to avoid SELF_SIGNED_CERT errors:
```bash
npm config set strict-ssl false
npm config set registry="http://registry.npmjs.org/"
```

## Building the Site
From the project's root folder `/theme-cnsc-fepoc` run the following command:
```bash
grunt 
```

## Serving the Site from Localhost
Install `httpster` with the following command:
```bash
npm i -g httpster
```
Then from the site root:
```bash
cd dist
httpster
```

## Editing .hbs files in Dreamweaver Design View
To enable editing `.hbs` files in Dreamweaver Design view you need to add
the HBS extension as an HTML type to the `Extensions.txt` file and to the 
`MMDocumentTypes.xml` file.

Follow [these instructions from Adobe](https://helpx.adobe.com/dreamweaver/kb/change-add-recognized-file-extensions.html) for how to find and edit these files.

Here's a snippet from a modified `Extensions.txt`
```
HBS,HTM,HTML,SHTM,SHTML,XHTML,STM,SSI,JS,JSON,APPCACHE,XML,XSL,XSD,DTD,RSS,RDF,LBI,DWT,ASP,ASA,ASPX,ASCX,ASMX,CONFIG,CS,CSS,SCSS,LESS,SASS,CFM,CFML,CFC,TLD,TXT,PHP,PHP3,PHP4,PHP5,PHP-DIST,PHTML,TPL,VB,INC,SQL,MASTER,SVG:All Documents
HBS,HTM,HTML,HTA,HTC,XHTML:HTML Documents
```

Here's a snippet from a modified `MMDocumentTypes.xml`
```
<documenttype id="HTML" internaltype="HTML" winfileextension="hbs,html,htm,shtml,shtm,stm,tpl,lasso,xhtml" macfileextension="hbs,html,htm,shtml,shtm,tpl,lasso,xhtml,ssi" file="Default.html" writebyteordermark="false" mimetype="text/html">
```

Note the addition of `HBS` and `hbs` 
