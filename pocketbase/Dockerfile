FROM alpine:latest

WORKDIR /pb

COPY pocketbase /pb
RUN chmod +x pocketbase

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
