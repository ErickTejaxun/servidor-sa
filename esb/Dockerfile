FROM ubuntu:19.04
FROM openjdk:8

#Definiendo variables de entorno
ENV BUIL_DATE=12282020
ENV MULE_HOME=/opt/mule
ENV MULE_VERSION=4.2.1 

RUN mkdir mulezip 
RUN ls -la 
COPY mule-ce-distribution-standalone-4.2.2.zip /mulezip 
RUN cd /mulezip && ls -la 

RUN cd ../opt && unzip /mulezip/mule-ce-distribution-standalone-4.2.2.zip && ls -la 
RUN ln -s /opt/mule-enterprise-standalone-4.2.2 ${MULE_HOME}

RUN chmod 777 $MULE_HOME/bin/mule 
RUN chmod 777 $MULE_HOME/bin/launcher

CMD ["/opt/mule/bin/mule"]

EXPOSE 9082

