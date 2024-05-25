FROM node:18 As development

RUN mkdir -p /home/app
WORKDIR /home/app
COPY ../app /home/app/

RUN chmod 1777 /tmp

RUN apt-get update \
    && apt-get install -y chromium \
    fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
    --no-install-recommends

ENV NODE_ENV=development

RUN npm install -g nodemon
RUN npm install -g @babel/node

RUN npm install

CMD [ "npm", "run", "start:dev" ]