theme-gcwu-fegc
===============

A CNSC proof-of-concept implementation of the Government of Canada (GC) Web Usability theme for the Web Experience Toolkit

## Getting Started

To get started you need to follow three important steps:

1. Install the prerequistites
2. Clone this repo
3. Run the setup script

Each step is detailed below.

### 1. Installing Prerequisites

You must have the following installed on your system to make this project work:

* Git
* NodeJS
* Python 2.7
* C++ or node-sass

There are two ways to install these tools. 
You can either install them directly from the vendor or install them using
Visual Studio.

#### Visual Studio based install
If you already have Visual Studio installed, using the Visual Studio 
installer is the preffered method. Follow the instructions below.

1. Navigate to Control Panel
2. Go to Programs
3. Click on Programs and Features
4. Find Microsoft Visual Studio in the list of programs.
5. Right click on Microsoft Visual Studio
6. Select Change
7. Select Modify
8. Choose the packages you want (Git, Node, Python, C++)
10. Select Next

#### Direct from the Vendor install

##### Git
Navigate to: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git and follow the installation instructions for your OS. Use the default settings when installing (Next, Next, Next....)

##### NodeJS
Navigate to: https://nodejs.org and download and install the latest "LTS" version of Node.

##### Python
Navigate to: https://www.python.org/downloads/ and download and install Python 2.7.x 

##### node-sass
After installing Node, open a command prompt and type
```bash
npm i -g node-sass
```
If you get an error about SELF_SIGNED SSL CERTS run 
```bash
npm config set strict-ssl false
npm config set registry="http://registry.npmjs.org/"
```
and then try installing node-sass again via
```bash
npm i -g node-sass
```

### 2. Cloning this repo
At the comand prompt type:
```bash
git -c http.sslVerify=false clone https://github.com/arcdev1/theme-cnsc-fepoc.git
```

### 3. Run the setup script
Run the setup script from /script folder in the project directory:
```bash 
cd theme-cnsc-fepoc
cd script
setup
```

*Note:* Mac users should use `sh setup` instead.

## Building the Site
From the project's root folder `/theme-cnsc-fepoc` run the following command:
```bash
grunt 
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
