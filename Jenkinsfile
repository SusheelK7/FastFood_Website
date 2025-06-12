pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                echo 'Using local workspace files or Git repo'
                // If from Git, Jenkins will do this automatically.
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t fastfood-website .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop fastfood-container || echo "No container to stop"
                docker rm fastfood-container || echo "No container to remove"
                '''
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d -p 8081:80 --name fastfood-container fastfood-website'
            }
        }
    }
}
