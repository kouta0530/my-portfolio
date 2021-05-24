FROM node:lts-alpine
RUN npm install -g create-react-app
RUN mkdir my-portfolio
WORKDIR /my-portfolio
COPY . .
RUN yarn install 
EXPOSE 3000
CMD ["yarn","start"]
