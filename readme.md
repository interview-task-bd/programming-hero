# used Tool
## ExpressJs, Typescript, ReactJs, Redux , MongoDB, Aws, react-route-dom & Martial ui




download repo 
```git clone git@github.com:interview-task-bd/programming-hero.git```
run after download project
 ```yarn install or npm install``
 ```yarn start or npm start``

 This project made with typescript express,mongodb,mongoose,redux,redux-thunk also jwt authentication 


```schemas```
you can also view with draw 

https://drive.google.com/file/d/15NxUZ5ovraq1AjMRB2iBQy_gGpSI2-dp/view?usp=sharing
you can see here data schema for better graphical understand
```
userSchema.ts
import {model,Schema} from 'mongoose';

const UserSchema = new Schema({
   name:{
      type:String,
      required:true,
   },
   email:{
       type:String,
       required:true,
   },
   phone:{
       type:String,
       required:true,
   },
   password:{
       type:String,
       required:true
   },
   enrolls:[{
       type:Schema.Types.ObjectId,
       ref:"Enroll"
   }],
   status:{
       type:String,
       required:true,
       enum:['ACTIVE','INACTIVE'],
       default:'INACTIVE'
   }
})

export default model('User',UserSchema)
```





```
CourseSchema.ts

import mongoose, { Schema }  from 'mongoose';

const CourseSchema = new mongoose.Schema({
   title:{
       type: String,
       required:true,
   },
   price:{
       type: Number,
       required:true,
   },
   status:{
    type:String,
    enum:["PENDING","PROGRESS","COMPLETED"],
    required:true,
    default:"PENDING"
  },
   milestones:[
     {
         type: mongoose.Schema.Types.ObjectId,
         ref:'Milestone'
    }
   ],
   enrolls:[{
       type:Schema.Types.ObjectId,
       ref:'Enroll'
   }]
   
})


export default mongoose.model('Course',CourseSchema);
```

```
MilestoneSchema.ts

import {model,Schema} from 'mongoose';

const MilestoneSchema = new Schema({
     title:{
        type: String,
        required: true,
     },
     
     module_length:{
        type:Number,
        required:true
     },
     course:{
      type:Schema.Types.ObjectId,
      ref:'Course'
     },
     status:{
      type:String,
      enum:["PENDING","PROGRESS","COMPLETED"],
      required:true,
      default:"PENDING"
     },
     modules:[
        {
           type:Schema.Types.ObjectId,
           ref:'Module'
        }
     ]
     
})

export default model('Milestone',MilestoneSchema)
```


```
ModuleSchema.ts

import  {Schema,model} from 'mongoose';


const ModuleSchema = new Schema({
    title:{
      type:String,
      required:true,
    },
    milestone:{
       type:Schema.Types.ObjectId,
       ref:'Milestone'
    },
    status:{
      type:String,
      enum:["PENDING","PROGRESS","COMPLETED"],
      required:true,
      default:"PENDING"
    },
    course_contents:[{
        type:Schema.Types.ObjectId,
        ref:"CourseContent"
    }]
})

export default model('Module',ModuleSchema)

```


```
CourseContentSchema.ts


const  {model,Schema} =require('mongoose');

const CourseContentSchema = new Schema({
   title:{
       type:String,
       required:true
   },

   content_url:{
       type:String,
       required:true
   },
   status:{
    type:String,
    enum:["PENDING","PROGRESS","COMPLETED"],
    required:true,
    default:"PENDING"
  },
   module:{
         type:Schema.Types.ObjectId,
         ref:'Module'
       }
   
});


export default model('CourseContent',CourseContentSchema)

```


# Deployment Process in aws


## Create a new Ubuntu Server on AWS EC2

Before doing anything we need a server that we can work on, follow these steps to spin up a new Ubuntu 18.04 server instance on AWS EC2.

1. Sign into the AWS Management Console at https://aws.amazon.com/console/. If you don't have an account yet click the "Create a Free Account" button and follow the prompts.
2. Go to the EC2 Service section.

3. Click the "Launch Instance" button.

4. Choose AMI - Check the "Free tier only" checkbox, enter "Ubuntu" in search box and press enter, then select the "Ubuntu Server 18.04" Amazon Machine Image (AMI).

5. Choose Instance Type - Select the "t2.micro" (Free tier eligible) instance type and click "Configure Security Group" in the top menu.
6. Configure Security Group - Add a new rule to allow HTTP traffic then click "Review and Launch".
7. Review - Click Launch
8. Select "Create a new key pair", enter a name for the key pair (e.g. "my-aws-key") and click "Download Key Pair" to download the private key, you will use this to connect to the server via SSH.
10. Click "Launch Instances", then scroll to the bottom of the page and click "View Instances" to see details of the new Ubuntu EC2 instance that is launching.


## Connect to Ubuntu EC2 Instance via SSH

Once the EC2 instance reaches a running state you can connect to it via SSH using the private key downloaded in the previous step.
1. Open a terminal window and update the permissions of the private key file with the command chmod 400 <path-to-key-file> e.g. chmod 400 ~/Downloads/my-aws-key.pem, the key must not be publicly viewable for SSH to work.
2. Copy the "Public DNS (IPv4)" property from the instance description tab in the AWS Console, then connect to the instance from the terminal window with the command ssh -i <path-to-key-file> ubuntu@<domain name> e.g. ssh -i ~/Downloads/my-aws-key.pem ubuntu@ec2-52-221-185-40.ap-southeast-2.compute.amazonaws.com
3. Enter yes to the prompt "Are you sure you want to continue connecting (yes/no)?" to add the url to your list of known hosts.

### NOTE: If you're using Windows you can connect to your instance via SSH using the PuTTY SSH client, for instructions see Connect Using PuTTY in the AWS docs.


## Setup Web Server with Node.js + MongoDB + NGINX
 The below command executes a script to automatically setup and configure a production ready MERN Stack web server on Ubuntu that includes Node.js, MongoDB, PM2, NGINX and UFW.

Setup Node.js + MongoDB Production Server on Ubuntu 18.04 - Ubuntu 19.04 or 20.04

### The below scripts can be used to setup and configure a production Node.js + MongoDB Web Server from scratch on Ubuntu 18.04 - Ubuntu 19.04 with the following technologies:
1. Node.js 10.x & NPM
2. MongoDB 4.0 or upgrade -v
3. PM2
4. NGINX
5. UFW (Firewall)
### Whole Script for Ubuntu 18.04 - 19.04 Production Web Server Setup

Here's the whole script for setting up a production Ubuntu 18.04 - Ubuntu 19.04 web server with Node, NPM, Mongo, PM2, NGINX and UFW.


Each section is broken up with a big echo label so it's easy to find in the console, and each line has a small comment to describe what it's for.

The script is also available on GitHub Gist at https://gist.github.com/cornflourblue/f0abd30f47d96d6ff127fe8a9e5bbd9f.




You can copy the script to your server or run the gist directly with the following command: curl https://gist.githubusercontent.com/cornflourblue/f0abd30f47d96d6ff127fe8a9e5bbd9f/raw/e3047c9dc3ce8b796e7354c92d2c47ce61981d2f/setup-nodejs-mongodb-production-server-on-ubuntu-1804.sh | sudo bash

```
#!/usr/bin/env bash

echo "
----------------------
  NODE & NPM
----------------------
"

# add nodejs 10 ppa (personal package archive) from nodesource
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

# install nodejs and npm
sudo apt-get install -y nodejs


echo "
----------------------
  MONGODB
----------------------
"

# import mongodb 4.0 public gpg key
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

# create the /etc/apt/sources.list.d/mongodb-org-4.0.list file for mongodb
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

# reload local package database
sudo apt-get update

# install the latest version of mongodb
sudo apt-get install -y mongodb-org

# start mongodb
sudo systemctl start mongod

# set mongodb to start automatically on system startup
sudo systemctl enable mongod


echo "
----------------------
  PM2
----------------------
"

# install pm2 with npm
sudo npm install -g pm2

# set pm2 to start automatically on system startup
sudo pm2 startup systemd


echo "
----------------------
  NGINX
----------------------
"

# install nginx
sudo apt-get install -y nginx


echo "
----------------------
  UFW (FIREWALL)
----------------------
"

# allow ssh connections through firewall
sudo ufw allow OpenSSH

# allow http & https through firewall
sudo ufw allow 'Nginx Full'

# enable firewall
sudo ufw --force enable
```


<h1 style="color:red;">Separate Web Server Setup Scripts</h1>

Below are standalone scripts for installing each of the above pieces of the production web server separately.


Install Node 10.x & NPM on Ubuntu 18.04 - Ubuntu 19.4/ 20.04

This script adds Node.js 10.x to the local package database from NodeSource and then installs it with apt-get.


Available on GitHub Gist at https://gist.github.com/cornflourblue/b792ace8470d9b4c35fc72947cc32393.



Command to run gist directly: curl https://gist.githubusercontent.com/cornflourblue/b792ace8470d9b4c35fc72947cc32393/raw/c1a412e2e61f31d5edabc6accb3798e2548b845a/install-node-10x-npm-on-ubuntu-1804.sh | sudo bash



```#!/usr/bin/env bash

echo "
----------------------
  NODE & NPM
----------------------
"

# add nodejs 10 ppa (personal package archive) from nodesource
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

# install nodejs and npm
sudo apt-get install -y nodejs
```

<h1 style="color:green">Install MongoDB</h1>

This script installs MongoDB 4.0 and configures it to start automatically on system startup and reboot.

```#!/usr/bin/env bash

echo "
----------------------
  MONGODB
----------------------
"

# import mongodb 4.0 public gpg key
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

# create the /etc/apt/sources.list.d/mongodb-org-4.0.list file for mongodb
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

# reload local package database
sudo apt-get update

# install the latest version of mongodb
sudo apt-get install -y mongodb-org

# start mongodb
sudo systemctl start mongod

# set mongodb to start automatically on system startup
sudo systemctl enable mongod
```
# Install PM2

```
#!/usr/bin/env bash

echo "
----------------------
  PM2
----------------------
"

# install pm2 with npm
sudo npm install -g pm2

# set pm2 to start automatically on system startup
sudo pm2 startup systemd
```
# Install NGINX



```
#!/usr/bin/env bash

echo "
----------------------
  NGINX
----------------------
"

# install nginx
sudo apt-get install -y nginx
```


# Configure UFW (Firewall)

```
#!/usr/bin/env bash

echo "
----------------------
  UFW (FIREWALL)
----------------------
"

# allow ssh connections through firewall
sudo ufw allow OpenSSH

# allow http & https through firewall
sudo ufw allow 'Nginx Full'

# enable firewall
sudo ufw --force enable
```
# Deploy React + Redux Front-end app


1. Clone the React + Redux project into the /opt/front-end directory with the command `sudo git clone git@github.com:interview-task-bd/programming-hero.git /opt/front-end`
2. Navigate into the front-end directory and install all required npm packages with the command `cd /opt/front-end && sudo npm install`
3. Update the app to use real backend API:
    1. Run the command sudo nano /opt/front-end/src/index.jsx to open the main react entry file in the nano text editor.
    2. Delete the following lines from the file to remove the fake backend that the react app uses by default:
        ```// setup fake backend
        import { configureFakeBackend } from './_helpers';
        configureFakeBackend();
        ```
    3. Save the file by pressing ctrl + x and selecting Yes to save.
4. Configure the path to API:
    1. Run the command sudo nano /opt/front-end/webpack.config.js to open the webpack config file in the nano text editor.
    2. Change the apiUrl config property to '/api' like below so it points to the public path we configured in NGINX in the previous section:
        ```// global app config object
            config: JSON.stringify({
                apiUrl: '/api'
            })```

    3. Save the file by pressing ctrl + x and selecting Yes to save.

5. Build the front end app with the command sudo npm run build


The React app is now built and ready to be served from the /opt/front-end/dist directory, in the next step we'll configure our NGINX web server to enable access to it.

# Configure NGINX to serve the Node.js API and React front-end

Since our MERN Stack application is made up of two separate projects that both need to be accessed via the same port (HTTP on port 80), we're going to use NGINX as our public facing web server to receive requests for both the front-end and back-end, and decide where to send each request based on its path. Requests beginning with the path /api/* will be proxied through to the Node.js api running on port 4000, while other requests will serve the React front-end app and associated files (js/css/images).

Follow these steps to configure NGINX for the MERN stack app.

1. Delete the default NGINX site config file with the command sudo rm /etc/nginx/sites-available/default
2. Launch the nano text editor to create an new default site config file with sudo nano /etc/nginx/sites-available/default
3. Paste in the following config: 

```server {
  listen 80 default_server;
  server_name _;

  # react app & front-end files
  location / {
    root /opt/front-end/dist;
    try_files $uri /index.html;
  }

  # node api reverse proxy
  location /api/ {
    proxy_pass http://localhost:4000/;
  }
}
```
4. Save the file by pressing ctrl + x and selecting Yes to save.
5. Restart NGINX with the command sudo systemctl restart nginx

# Test your new MERN Stack application running on AWS
 Enter the hostname of your AWS EC2 instance in a browser to access and test your new MERN stack application.
 
 The hostname is the "Public DNS (IPv4)" property located on the instance description tab in the AWS Console.



