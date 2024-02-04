# Jenkins-Sonarqube-Docker CI/CD Pipeline

1. Repo contains a sample nodejs project for testing purpose.
2. sonarqube-postgres-compose contains docker compose file for sonarqube and postgres.
Steps to setup jenkins: 
   1. Run the jenkins server using war file with command:
      java -jar jenkins.war
   2. Copy the admin credentials from terminal to setup username and password.
      
Steps to setup Sonarqube:
   1. Run the docker compose file using command:
      docker-compose up
   2. setup credentials
   3. Create project of type local project.
   4. copy the project key
   5. From settings generate token.
      
Steps for creating pipeline:
   
