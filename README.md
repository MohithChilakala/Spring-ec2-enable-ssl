# Securing the Connection: Configuring HTTPS for Spring Project and Deployment on EC2

This project serves as a testing environment for full-stack projects without the need to purchase a domain. It addresses the challenge of testing when calling HTTP APIs from HTTPS clients is restricted by using a self-signed certificate.

The provided README offers a comprehensive guide on how to enable SSL in spring boot and deploy in ec2 instance.

This is not recommended for production, for production use proper ssl certificates from certicate authorities like [Certbot](https://certbot.eff.org/), [Let's Encrypt](https://letsencrypt.org/) etc..

Since it's self-signed, for your api call to be accepted you need to tell your browser that ec2 server is safe.

## Table of Contents

- [Spring Boot Backend](#spring-boot-backend)
  - [Project Creation](#project-creation)
  - [Security and CORS Configuration](#security-and-cors-configuration)
  - [SSL Certificate Generation](#ssl-certificate-generation)
  - [Enabling HTTPS](#enabling-https)
- [AWS Setup](#aws-setup)
  - [EC2 Instance Creation](#ec2-instance-creation)
  - [Self-Signed Certificate Generation](#self-signed-certificate-generation)
- [Deploying Spring Boot Application on EC2](#deploying-spring-boot-application-on-ec2)
  - [Jar File Generation](#jar-file-generation)
  - [Run Jar file](#run-jar)
- [React Frontend](#react-frontend)

## Spring Boot Backend

### Project Creation

Create a spring boot project and expose an API endpoint to handle a simple a GET request. I created a simple method that responds with a "Hello" message.

### Security and CORS Configuration

1. Add `spring-boot-starter-security` dependency in `pom.xml`
2. Configure Security, Refer to [oficial documentation](https://docs.spring.io/spring-security/reference/reactive/integrations/cors.html). 
3. Make sure you add allowed origins for testing in local and also url of client hosting.
4. Before going further test your api's, ensure that there are no cors errors.

### SSL Certificate Generation

1. Open terminal and execute the following command. 
`keytool -genkeypair -alias your-alias -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore your-keystore -validity 3650`
2. Enter your-password and other fields.
3. Make a note of alias, username and password.
4. Copy the file generated and paste in your spring-boot project directory

### Enabling HTTPS

Add the below to application.yml
```
server:
  ssl:
    key-alias: "your-alias"
    key-store: "classpath:your-username"
    key-store-password: "your-password"
    key-store-type: "PKCS12"
```

## AWS Setup

### EC2 Instance Creation

1. Log in to AWS Console
2. Navigate to EC2
3. Launch an Instance
4. Download Key-Pair in putty
5. **Configure Security Group:**
   - In the "Configure Security Group" step, add rules for necessary ports:
      - HTTPS (443)
      - HTTP (80)
      - SSH (22)
      - TCP (8080)
6. Open Putty on your local machine and connect to ec2

### Self-Signed Certificate Generation

Install apache on ec2 and generate self-signed certificate.

Refer this [documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-ami.html) till step1.

## Deploying Spring Boot Application on EC2

### Jar File Generation
1. Run this maven command in spring boot project
`mvn package spring-boot:repackage`
2. copy the jar file in target folder and paste it in a seperate folder.
3. use puttygen and convert key-pair putty file to pem file and store in the same folder.
4. Open the folder in git bash(or any other) and execute below command.

`scp -i mykey.pem yout-jar-file.jar ec2-user@your-ec2-ipv4-dns:/`

### Run Jar File

1. check if jar file is in ec2
2. Install java on ec2 from putty
3. Create new screen in ec2
4. Run your jar file

## React Frontend

Create your react app and deploy using netlify, vercel, etc...
Your hosting site url should match with the url added for cors in backend

Check out the [Live Demo](https://spring-ssl.netlify.app/) to see the deployed site in action!