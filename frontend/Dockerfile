FROM node:12.19.0
RUN mkdir my-portfolio
WORKDIR /my-portfolio
COPY ["package*.json", "yarn.lock" ,"./"]
RUN yarn install --production --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["yarn","start"]
