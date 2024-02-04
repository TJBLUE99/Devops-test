# Jenkins-Sonarqube-Docker CI/CD Pipeline

1. Repo contains a sample Nodejs project for testing purposes.
2. sonarqube-postgres-compose contains docker compose file for sonarqube and PostgresSQL.
# Steps to setup Jenkins: 
   1. Run the Jenkins server using war file with command:
      java -jar Jenkins.war
   2. Copy the admin credentials from terminal to setup username and password.
      
# Steps to setup Sonarqube:
   1. Run the docker-compose file using command:
      docker-compose up
   2. setup credentials
   3. Create a local project of type local project with name, key, branch, and global settings.
   4. Select the project analysis method as Jenkins.
   5. Select the project analysis repository as Github.
   6. Create a Jenkins file.
   7. Copy the project key
   8. From settings generate token.
      
# Steps for creating a pipeline:
   
