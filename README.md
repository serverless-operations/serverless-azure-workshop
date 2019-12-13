# Azure Functions with Serverless Framework workshop

## インストール

### Install npm modules

```
$ npm install
```

### Azure Functions Core Tools

```
$ brew tap azure/functions
$ brew install azure-functions-core-tools
```

### Azure CLI

```
$ brew update && brew install azure-cli
```

### .NET Core SDK

https://dotnet.microsoft.com/download よりダウンロード。

### .NET SDK CosmosDB extension

```
$ func extensions install -p Microsoft.Azure.WebJobs.Extensions.CosmosDB -v 3.0.5
```

## デプロイ

```
$ serverless deploy
```

## ARM Template のデプロイ

```
$ az group deployment create --resource-group <リソースグループ名> --template-file template.json
```
