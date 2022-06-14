FROM node:17-alpine

EXPOSE 4000
EXPOSE 8080

RUN apk --no-cache add openjdk11-jre bash && \
    yarn global add firebase-tools@10.6.0 && \
    yarn cache clean && \
    firebase -V && \
    java -version && \
    chown -R node:node $HOME

WORKDIR /firebase/

CMD ["firebase", "emulators:start", "--debug", "--project", "demo-react-todo", "--export-on-exit", "--import", "/firebase-data/data"]