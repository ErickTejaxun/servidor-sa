FROM ubuntu:19.04
FROM openjdk:8

#Definiendo variables de entorno
# /home/g2616501300304/repositorio/servidor-sa/esb/esb-grupo14/target/esb-grupo14-1.0.0-SNAPSHOT-mule-application.jar
#http://s3.amazonaws.com/new-mule-artifacts/mule-ee-distribution-standalone-4.3.0.zip
ENV BUIL_DATE=12282020
ENV MULE_HOME=/opt/mule
ENV MULE_VERSION=4.2.1 

RUN mkdir mulezip 
RUN ls -la 
COPY mule-ee-distribution-standalone-4.3.0.zip /mulezip 
RUN cd /mulezip && ls -la 

RUN cd ../opt && unzip /mulezip/mule-ee-distribution-standalone-4.3.0.zip && ls -la 
RUN ln -s /opt/mule-enterprise-standalone-4.3.0 ${MULE_HOME}

RUN chmod 777 $MULE_HOME/bin/mule 
RUN chmod 777 $MULE_HOME/bin/launcher

CMD ["/opt/mule/bin/mule"]

EXPOSE 8080

COPY ./esb-grupo14/target/esb-grupo14-1.0.0-SNAPSHOT-mule-application.jar ${MULE_HOME}/apps



