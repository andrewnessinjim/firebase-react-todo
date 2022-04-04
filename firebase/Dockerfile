FROM node:17-alpine

EXPOSE 4000
EXPOSE 8080

RUN apk --no-cache add openjdk11-jre bash && \
    yarn global add firebase-tools@${VERSION} && \
    yarn cache clean && \
    firebase -V && \
    java -version && \
    chown -R node:node $HOME

CMD [ "firebase", "emulators:start", "--project", "demo-react-todo" ]