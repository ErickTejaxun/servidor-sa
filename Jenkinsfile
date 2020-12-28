// http://34.106.105.246/


pipeline
{
    agent any  
    stages
    {
        stage("Prueba de ejecución")
        {               
            /*4/1AY0e-g7Wj5fXxa5NDwhREhYFjWdxN3UfxMFLMK6hDoar7swHY52-owguWS4*/
            steps
            {       
                //sh 'gcloud auth login 2616501300304@ingenieria.usac.edu.gt'                 
                //sh 'gcloud auth configure-docker'   
                echo 'Estableciendo variables de entorno para pruebas'               
                sh 'export PORTCLIENTE=9000'                
                sh 'export PORTRESTAURANTE=9100'
                sh 'export PORTREPARTIDOR=9200'
                sh 'export PORTEBS=9300'  

                echo 'Pruebas de construcción de servicio cliente'
                dir("microservicio-usuario") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }

                /*dir("microservicio-producto") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }                

                dir("microservicio-carrito") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }

                dir("microservicio-compra") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }

                dir("microservicio-facturacion") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }

                dir("microservicio-subasta") 
                {                    
                    sh 'npm install'                
                    sh 'npm start'
                }*/              

            }                                    
        }

        stage("Realización de pruebas unitarias")
        {
            steps
            {
                echo 'Realizando pruebas unitarias servicio '
                
                dir("microservicio-usuario")
                {
                    sh 'npm test'
                }

                /*dir("microservicio-producto")
                {
                    sh 'npm test'
                }

                dir("microservicio-carrito")
                {
                    sh 'npm test'
                }

                dir("microservicio-compra")
                {
                    sh 'npm test'
                }

                dir("microservicio-facturacion")
                {
                    sh 'npm test'
                }*/

                sh 'forever stopall'
            }
        }

        stage("Creación de artefactos")
        {
            steps
            {
                echo 'Creando la imagen docker de microservicio usuario'
                dir("microservicio-usuario")
                {

                    sh 'docker build -t image-microservicio-usuario .'                                        
                }                             

                /*echo 'Creando la imagen docker de microservicio producto'
                dir("microservicio-producto")
                {

                    sh 'docker build -t image-microservicio-producto .'
                }      

                echo 'Creando la imagen docker de microservicio carrito'
                dir("microservicio-carrito")
                {

                    sh 'docker build -t image-microservicio-carrito .'
                }                                                         

                echo 'Creando la imagen docker de microservicio compra'
                dir("microservicio-compra")
                {

                    sh 'docker build -t image-microservicio-compra .'
                }  

                echo 'Creando la imagen docker de microservicio facturacion'
                dir("microservicio-facturacion")
                {

                    sh 'docker build -t image-microservicio-facturacion .'
                } 

                echo 'Creando la imagen docker de microservicio subasta'
                dir("microservicio-subasta")
                {

                    sh 'docker build -t image-microservicio-subasta .'
                }
                */ 

                echo 'Creación de artefactos correcta'
            }
        }



        stage("Registro de artefactos")
        {
            steps
            {                
                dir("microservicio-usuario")
                {                    
                    //echo 'Borrando ultima version del contenedor'
                    //sh 'gcloud container images delete gcr.io/practica3-sa/microservicio-usuario-image:v1 --force-delete-tags'
                    //gcloud container clusters get-credentials cluster-grupo14 --ZONE us-west3-b
                    sh 'export PROJECT_ID=practica3-sa'

                    echo 'Etiquetando contenedor usuario'
                    sh 'docker tag image-microservicio-usuario:latest gcr.io/practica3-sa/microservicio-usuario-image:latest'

                    /*echo 'Etiquetando contenedor producto'
                    sh 'docker tag image-microservicio-producto:latest gcr.io/practica3-sa/microservicio-producto-image:latest'                    

                    echo 'Etiquetando contenedor carrito'
                    sh 'docker tag image-microservicio-carrito:latest gcr.io/practica3-sa/microservicio-carrito-image:latest'      

                    echo 'Etiquetando contenedor compra'
                    sh 'docker tag image-microservicio-compra:latest gcr.io/practica3-sa/microservicio-compra-image:latest'    

                    echo 'Etiquetando contenedor facturacion'
                    sh 'docker tag image-microservicio-facturacion:latest gcr.io/practica3-sa/microservicio-facturacion-image:latest'   

                    echo 'Etiquetando contenedor subasta'
                    sh 'docker tag image-microservicio-subasta:latest gcr.io/practica3-sa/microservicio-subasta-image:latest'                                                                       
                    */
                    echo 'Nos logeamos para poder enviar nuestros contenedores en container register'
                    sh 'docker login -u _json_key -p "$(cat /home/g2616501300304/keyfile.json)" https://gcr.io'
                    //sh 'docker login -u 1013130968812-compute@developer.gserviceaccount.com-p "$(cat /home/g2616501300304/keyfile.json)" https://gcr.io'

                    sh 'docker push gcr.io/practica3-sa/microservicio-usuario-image:latest'   
                    /*sh 'docker push gcr.io/practica3-sa/microservicio-producto-image:latest' 
                    sh 'docker push gcr.io/practica3-sa/microservicio-carrito-image:latest' 
                    sh 'docker push gcr.io/practica3-sa/microservicio-compra-image:latest' 
                    sh 'docker push gcr.io/practica3-sa/microservicio-facturacion-image:latest' 
                    sh 'docker push gcr.io/practica3-sa/microservicio-subasta-image:latest' 
                    */
                                  
                    echo 'Registro realizado con éxito. '
                }                                                            
            }
        }
        

        stage("Aprobación de despliegue")
        {
            steps
            {
                echo 'Despliegue aprobado.'
            }
        }
        

        stage("Gestión de la configuración a través de ansible")
        {   
            steps
            {
                echo 'Configurando los servidores a través de ansible'
                echo 'Configurando kluster en kubernetes'

                sh 'export PROJECT_ID=practica3-sa'
                sh 'gcloud config set project practica3-sa'
                sh 'gcloud config set compute/zone us-west3-a'


                //sh 'ansible-playbook -i /home/jenkins/ansible_hosts /home/jenkins/deploy_cluster_kubernetes_gcp.yaml'
                sh 'ansible-playbook -i /home/jenkins/kubernetes/ansible_hosts /home/jenkins/kubernetes/deploy_system.yaml'

                //sh 'ansible-playbook -i /home/jenkins/ansible_hosts /home/jenkins/deploy_system.yaml'
                //sh 'gcloud container clusters create cluster-grupo14  --machine-type=g1-small --disk-size=20G'
                
                //sh 'kubectl delete deployment app-grupo14'
                //sh 'kubectl create deployment app-grupo14 --image=gcr.io/practica3-sa/microservicio-usuario-image:latest'
                //sh 'kubectl create deployment app-grupo14 --image=microservicio-usuario-image:latest'
                //sh 'kubectl scale deployment app-grupo14 --replicas=3'
                //sh 'kubectl autoscale deployment app-grupo14 --cpu-percent=80 --min=1 --max=4'
                //sh 'kubectl expose deployment app-grupo14 --name=app-grupo14-service --type=LoadBalancer --port 80 --target-port 3000'   
                //sh 'kubectl get service'             

            }
        }   

        stage("Despliegue del sistema ")
        {
            steps
            {
                echo 'Desplegando nueva versión'                
                sh 'ansible-playbook -i /home/jenkins/kubernetes/ansible_hosts /home/jenkins/kubernetes/update_system.yaml'
                echo 'Se ha desplegado un nueva versión.'
            }
        }

    }
}