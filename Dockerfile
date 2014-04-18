FROM stackbrew/ubuntu:13.10
RUN apt-get update -q
RUN apt-get install npm nodejs curl ca-certificates -y
#RUN curl https://www.npmjs.org/install.sh | sh
ADD . /opt/hackathon-starter/
WORKDIR /opt/hackathon-starter/
RUN npm config set registry http://registry.npmjs.org/
RUN npm install
ENTRYPOINT ["nodejs", "app.js"]