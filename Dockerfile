# # FROM labshare/docker-base-web

# # # Set the source folder
# # ARG SOURCE_FOLDER="./dist/polus-notebooks-hub-app"

# # # Bundle app source
# # COPY ${SOURCE_FOLDER} .

# # # start app
# # CMD ng serve --host 0.0.0.0

# # EXPOSE 8000

###########


FROM node:12.0.0
WORKDIR /labshare/polus-notebooks-hub-frontend

# add app
COPY . /labshare/polus-notebooks-hub-frontend

# install and cache app dependencies
COPY package.json /labshare/polus-notebooks-hub-frontend/package.json

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

RUN npm run build:lib
RUN npm install
RUN npm install -g @angular/cli@9.1.15
RUN npm i @labshare/lsc@2.16.0

RUN export PATH=$PATH:./node_modules/bin

RUN rm -f .npmrc

# start app
CMD ng serve --host 0.0.0.0 --port 4200 --disable-host-check
EXPOSE 4200
