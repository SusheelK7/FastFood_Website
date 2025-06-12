pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t fastfood-website .

                docker stop fastfood-container || true
                docker rm fastfood-container || true

                docker run -d -p 8080:80 --name fastfood-container fastfood-website
                '''
            }
        }
    }
}
