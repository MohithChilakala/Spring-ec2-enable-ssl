# Securing the Connection: Configuring HTTPS for Spring Project and React Deployment on EC2

This project serves as a testing environment for full-stack projects without the need to purchase a domain. It addresses the challenge of testing when calling HTTP APIs from HTTPS clients is restricted by using a self-signed certificate.

The provided README offers a comprehensive guide on how to enable SSL in spring boot and deploy in ec2 instance.

## Table of Contents

- [Spring Boot Backend](#spring-boot-backend)
  - [Project Creation](#project-creation)
  - [Security and CORS Configuration](#security-and-cors-configuration)
  - [SSL Certificate Generation](#ssl-certificate-generation)
  - [Enabling HTTPS](#enabling-https)
- [AWS Setup](#aws-setup)
  - [EC2 Instance Creation](#ec2-instance-creation)
  - [Apache Installation](#apache-installation)
  - [Self-Signed Certificate Generation](#self-signed-certificate-generation)
- [Deploying Spring Boot Application on EC2](#deploying-spring-boot-application-on-ec2)
  - [Jar File Generation](#jar-file-generation)
  - [SCP to EC2 Instance](#scp-to-ec2-instance)
  - [Putty Configuration](#putty-configuration)
  - [Java Installation](#java-installation)
  - [Application Deployment](#application-deployment)
- [React Frontend](#react-frontend)
  - [Application Creation](#application-creation)
  - [Deployment using Netlify](#deployment-using-netlify)

## Spring Boot Backend

### Project Creation

Create a spring boot project and expose an API endpoint to handle a simple a GET request. I created a simple method that responds with a "Hello" message.

### Security and CORS Configuration

Add `spring-boot-starter-security` dependency in `pom.xml`

Configure Security, Refer to [oficial documentation](https://docs.spring.io/spring-security/reference/reactive/integrations/cors.html). 

Make sure you add allowed origins for testing in local and also url of client hosting.

Before going further test your api's, ensure that there are no cors errors

### SSL Certificate Generation

Open terminal and execute the following command.

`keytool -genkeypair -alias your-alias -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore your-keystore -validity 3650`

Enter your-password and other fields.

Make a note of alias, username and password.

Copy the file generated and paste in your spring-boot project directory

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

Detail the process of setting up an EC2 instance on AWS.

### Apache Installation

Explain how you installed Apache on the EC2 instance.

### Self-Signed Certificate Generation

Describe the generation of a self-signed certificate for securing communication.

## Deploying Spring Boot Application on EC2

### Jar File Generation

Explain how you generated the JAR file for the Spring Boot application.

### SCP to EC2 Instance

Detail the process of transferring the JAR file to the EC2 instance using SCP.

### Putty Configuration

Explain how you configured Putty for SSH access to the EC2 instance.

### Java Installation

Describe the installation of Java on the EC2 instance to support the Spring Boot application.

### Application Deployment

Explain how you initiated a screen session and ran the JAR file to deploy the Spring Boot application.

## React Frontend

### Application Creation

Describe the development of the React application that interacts with the API endpoint on the EC2 instance.

### Deployment using Netlify

Explain how you deployed the React application on Netlify for easy accessibility.

## Questions and Support

If you have any questions or need further assistance, feel free to reach out.

