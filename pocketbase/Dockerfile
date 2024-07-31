FROM alpine:latest

WORKDIR /pocketbase

COPY . /pocketbase
RUN chmod +x /pocketbase/pocketbase

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]