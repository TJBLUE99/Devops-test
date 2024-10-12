# Jenkins-Sonarqube-Docker CI/CD Pipeline

![image](https://github.com/TJBLUE99/Jenkins-Sonarqube-Docker/assets/94433394/ed9a37d1-6746-47d5-bde3-92c0a8835100)

Steps to build CI/CD pipeline comprising of Jenkins Sonarqube and docker. The code is first pulled over Jenkins and is then passed to Sonarqube for analysis. The sonar runs the scans over the code base once the step is completed it is then converted into a docker image via a docker file present in the app folder. and then is deployed on the provided machine.

1. Repo contains a sample Nodejs project for testing purposes.
2. sonarqube-postgres-compose contains docker compose file for sonarqube and PostgresSQL.
   
# Steps to setup Jenkins: 
   1. Run the Jenkins server using war file with command: <br/>

       ```bash
       java -jar Jenkins.war
       
   2. Copy the admin credentials from terminal to setup username and password.
      
# Steps to setup Sonarqube:
   1. Run the docker-compose file using command: <br/>

      ```bash
      docker-compose up
   2. setup credentials
   3. Create a local project of type local project with name, key, branch, and global settings.
   4. Select the project analysis method as Jenkins.
   5. Select the project analysis repository as Github.
   6. Create a Jenkins file.
   7. Copy the project key
   8. From settings generate token.
      
# Steps for creating a pipeline:
  1. Create a pipeline project.
  2. configure git repo in source code management.
  3. Download SonarScanner plugin through manager plugins.
  4. In tools configure sonar scanner.
  5. In global settings set the sonarqube url and generated token in the previous steps.
  6. In the next build step select sonar scanner and provide the generated project key in analysis properties.
  7. Create a new step and run the command : <br/>
     ```bash 
     cd App
     docker build -t {{nameofcontainer}}
     docker run -p 5000:5000 {{nameofcontainer}}
   
