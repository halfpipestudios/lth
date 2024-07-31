FROM node

WORKDIR /lth

COPY . /lth

RUN npm ci && npm cache clean --force
RUN npm run build

EXPOSE 3000

CMD ["node", "/lth/.output/server/index.mjs"] 