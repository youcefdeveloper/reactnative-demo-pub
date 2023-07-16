# README

```bash
# web dependencies
$ npx expo install react-dom react-native-web @expo/webpack-config

# create web build
$ npx expo export:web

# run web build
$ npx serve web-build

# add --ssl or -T flag for SSL
$ npx serve -T -p 19006 web-build
```

# Push image to docker hub

```bash
# build image
$ docker build -t rnw-demo-app .

# tag the image
$ docker tag rnw-demo-app youcefdeveloper/rnw-demo-app:tag

# login to docker hub
$ docker login

# push the image
$ docker push your-dockerhub-username/your-image-name:tag
```

# Continuous Deployment on Azure using Docker and Bitbucket Pipelines for .Net Core

https://medium.com/@BogdanDemeny/continuous-deployment-deploy-net-core-on-azure-using-docker-and-bitbucket-pipelines-dedac3b51c07

```bash
## Login to DockerHub or Azure
# docker login mywebapi.azurecr.io -u {azureUser} -p {azurePass}
$ docker login rnwdemoapp.azurecr.io -u rnwdemoapp -p OZALednmHT9b8LCd19jcKLiowlNvvKhtpiNpG0qEnR+ACRD6vfwd

## Build the container
# Azure
$ docker build -t mywebapi.azurecr.io/mywebapi/api .
# DockerHub
$ docker build -t mywebapi/api .
# If you want you can run the container locally
$ docker run --rm -it -p 8080:80 mywebapi.azurecr.io/mywebapi/api
# final
$ docker build -t rnwdemoapp.azurecr.io/rnwdemo .

## Push the container to Azure/DockerHub.
# Azure
$ docker push mywebapi.azurecr.io/mywebapi/api
# DockerHub
$ docker push mywebapi/api
# final
$ docker push rnwdemoapp.azurecr.io/rnwdemo

The push refers to repository [rnwdemoapp.azurecr.io/rnwdemo]
d3c8c3c62906: Pushed
0348644449af: Pushed
4b56765b6b5e: Pushed
65bc30a63225: Pushed
6be1b85707bc: Pushed
1eb3501d2fb4: Pushed
81d1bb17d85e: Pushed
5079ade1f5c9: Pushed
9386262d7a74: Pushed
latest: digest: sha256:f0fa250ba39a5004a2d454b538e6d8eea867b90b59176eb2038a33faad516486 size: 2199
```

docker login mywebapi.azurecr.io -u $AZURE_USER -p $AZURE_PASS

docker login rnwdemoapp.azurecr.io -u $AZURE_USER -p $AZURE_PASS

---

```bash
# build image
$ docker build -t expowebdemo.azurecr.io/expowebdemo .

# login
$ docker login expowebdemo.azurecr.io -u expowebdemo -p 5Vh2/NZize8/sIVNAk4JRYRlBP+8qIWtBXKn7Bh1Pb+ACRAgHj5H

# add tag
$ docker tag expowebdemo expowebdemo.azurecr.io/expowebdemo:latest

# push image to ACR
$ docker push expowebdemo.azurecr.io/expowebdemo:latest
```

---

```bash
- pipe: atlassian/azure-acr-push-image:0.1.0
  variables:
  AZURE_TOKEN_NAME: "<string>"
  AZURE_TOKEN_PWD: "<string>"
  AZURE_REGISTRY: "<string>"
  IMAGE_NAME: "<string>"
  TAGS: "<string>" # Optional
  # DEBUG: "<boolean>" # Optional
```

```bash
script:
  # build the image before push
  - docker build -t examples/my-acr-image .

  # use the pipe to push the image to Azure ACR
  - pipe: atlassian/azure-acr-push-image:0.1.0
    variables:
      AZURE_TOKEN_NAME: $AZURE_TOKEN_NAME
      AZURE_TOKEN_PWD: $AZURE_TOKEN_PWD
      AZURE_REGISTRY: "https://myregistryname.azurecr.io"
      IMAGE_NAME: "examples/my-acr-image"
```

https://portal.azure.com/#view/Microsoft_Azure_ContainerRegistries/TokenResourceBlade/id/%2Fsubscriptions%2F812e29d6-48b7-467f-abca-acd5d841bca1%2FresourceGroups%2Frnwdemoapp%2Fproviders%2FMicrosoft.ContainerRegistry%2Fregistries%2Frnwdemoapp%2Ftokens%2Frnwdemoapptoken

Token

3C9gDxKijXHSZO7JjEgTQBOLugYJK90xJA6w9mAtLC+ACRA9SR2P
docker login -u rnwdemoapptoken -p 3C9gDxKijXHSZO7JjEgTQBOLugYJK90xJA6w9mAtLC+ACRA9SR2P rnwdemoapp.azurecr.io

9kbMG1SEm/CK41kIJKpLOHVNRu1i8YRLnxCY7WQges+ACRDsR7eO
docker login -u rnwdemoapptoken -p 9kbMG1SEm/CK41kIJKpLOHVNRu1i8YRLnxCY7WQges+ACRDsR7eO rnwdemoapp.azurecr.io

---

## ACR:

Registry name: `expowebdemo`
Login server: `expowebdemo.azurecr.io`
Username: `expowebdemo`
password: `5Vh2/NZize8/sIVNAk4JRYRlBP+8qIWtBXKn7Bh1Pb+ACRAgHj5H`
password2: `DFrRv1G2zi4rXhDKuN4Dd3HeHNPcLckgxheasKN0se+ACRAKwfD7`

## Token

user: expowebdemotoken

password1: RIvacCRUQ5UIgwyzu1wc7wWmPlKPWEg5gL+FKKCN73+ACRDtVm7D
docker login -u expowebdemotoken -p RIvacCRUQ5UIgwyzu1wc7wWmPlKPWEg5gL+FKKCN73+ACRDtVm7D expowebdemo.azurecr.io

password2: kZ5+UI0+GJ8GF8Rcvzp8DrtCj360kVFnvj8hRJPmth+ACRBgNPTP
docker login -u expowebdemotoken -p kZ5+UI0+GJ8GF8Rcvzp8DrtCj360kVFnvj8hRJPmth+ACRBgNPTP expowebdemo.azurecr.io

script:

# Build the image before push

- docker build -t examples/my-acr-image .

# use the pipe to push the image to Azure ACR

- pipe: atlassian/azure-acr-push-image:0.1.0
  variables:
  AZURE_TOKEN_NAME: $AZURE_TOKEN_NAME
  AZURE_TOKEN_PWD: $AZURE_TOKEN_PWD
  AZURE_REGISTRY: "https://myregistryname.azurecr.io"
  IMAGE_NAME: "examples/my-acr-image"

---

# Deploy a React Application with Bitbucket Pipelines

https://developerjesse.com/2019/05/28/deploy-react-bitbucket-pipelines.html

- `package.json`

  ```json
  {
    "name": "expo-web-demo-static",
    "version": "1.0.0",
    "main": "node_modules/expo/AppEntry.js",
    "scripts": {
      "start": "expo start",
      "android": "expo start --android",
      "ios": "expo start --ios",
      "web": "expo start --web",
      "build": "npx expo export:web",
      "prod": "npx serve web-build"
    },
    "dependencies": {
      "expo": "~48.0.18",
      "expo-status-bar": "~1.4.4",
      "react": "18.2.0",
      "react-native": "0.71.8",
      "react-dom": "18.2.0",
      "react-native-web": "~0.18.10",
      "@expo/webpack-config": "^18.0.1"
    },
    "devDependencies": {
      "@babel/core": "^7.20.0"
    },
    "private": true,
    "homepage": "/"
  }
  ```

# How to publish artifact to Azure Static Web App using release pipeline

https://learn.microsoft.com/en-us/answers/questions/476632/how-to-publish-artifact-to-azure-static-web-app-us

## Building and Deploying a Static Web App

https://learn.microsoft.com/en-us/shows/docs-azure/building-and-deploying-a-static-web-app

- repo: https://github.com/burkeholland/my-first-static-site/tree/master/.github/workflows

---

# Tutorial: Deploy Bitbucket repositories on Azure Static Web Apps

https://learn.microsoft.com/en-us/azure/static-web-apps/bitbucket?tabs=react

https://github.com/staticwebdev/react-basic/blob/main/staticwebapp.config.json

# Tutorial: Publish Azure Static Web Apps using an ARM Template

https://learn.microsoft.com/en-us/azure/static-web-apps/publish-azure-resource-manager?tabs=azure-cli
