---
layout: ../../layouts/BlogLayout.astro
title: "Azure Cheatsheet"
---

Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. It provides software as a service (SaaS), platform as a service (PaaS) and infrastructure as a service (IaaS) and supports many different programming languages, tools and frameworks, including both Microsoft-specific and third-party software and systems.

**[🔼Back to Top](#table-of-contents)**

## Azure CLI

| Command                                                                     | Description                   |
| --------------------------------------------------------------------------- | ----------------------------- |
| `az login`                                                                  | Login to Azure                |
| `az logout`                                                                 | Logout from Azure             |
| `az account list`                                                           | List all Azure accounts       |
| `az account set --subscription "SUBSCRIPTION_ID"`                           | Set the active subscription   |
| `az account show`                                                           | Show the active subscription  |
| `az account clear`                                                          | Clear the active subscription |
| `az account list-locations`                                                 | List all Azure locations      |
| `az account list-locations --query "[?displayName=='East US'].name"`        | List all Azure locations      |
| `az account list-locations --query "[?displayName=='East US'].name" -o tsv` | List all Azure locations      |

**[🔼Back to Top](#table-of-contents)**

## Azure Cloud Shell

Azure Cloud Shell is a browser-based shell for managing Azure resources. It is available in the Azure portal and can be accessed from any browser. It is a fully configured, authenticated, and managed environment that you can use to run the Azure CLI, PowerShell, or Bash commands.

**[🔼Back to Top](#table-of-contents)**

## Azure Portal

| Command                    | Description  |
| -------------------------- | ------------ |
| `https://portal.azure.com` | Azure Portal |

**[🔼Back to Top](#table-of-contents)**

## Azure Resource Manager

Azure Resource Manager is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure subscription. You can use the Azure portal, Azure PowerShell, Azure CLI, or Azure Resource Manager templates to manage your resources.

**[🔼Back to Top](#table-of-contents)**

## Azure Resource Manager Templates

Azure Resource Manager templates are JSON files that define the infrastructure and configuration of your cloud resources. You can use templates to deploy resources in a resource group or subscription. You can also use templates to create nested deployments, which are deployments that are deployed to a resource group that is a child of the resource group that contains the parent deployment.

**[🔼Back to Top](#table-of-contents)**

## Azure Resource Manager Template Functions

| Function              | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `concat()`            | Concatenates two or more strings.                     |
| `copyIndex()`         | Returns the index of the current copy loop iteration. |
| `createArray()`       | Creates an array.                                     |
| `createObject()`      | Creates an object.                                    |
| `deployment()`        | Returns a deployment object.                          |
| `deploymentOutputs()` | Returns the outputs of a deployment.                  |

**[🔼Back to Top](#table-of-contents)**

## Azure Resource Manager Template Parameters

| Parameter                                                            | Description                                        |
| -------------------------------------------------------------------- | -------------------------------------------------- |
| `parameters`                                                         | Parameters are used to customize the deployment.   |
| `parameters.location`                                                | The location of the resource.                      |
| `parameters.storageAccountName`                                      | The name of the storage account.                   |
| `parameters.storageAccountType`                                      | The type of the storage account.                   |
| `parameters.storageAccountSku`                                       | The SKU of the storage account.                    |
| `parameters.storageAccountKind`                                      | The kind of the storage account.                   |
| `parameters.storageAccountAccessTier`                                | The access tier of the storage account.            |
| `parameters.storageAccountEnableHttpsTrafficOnly`                    | The enableHttpsTrafficOnly of the storage account. |
| `parameters.storageAccountAllowBlobPublicAccess`                     | The allowBlobPublicAccess of the storage account.  |
| `parameters.storageAccountMinimumTlsVersion`                         | The minimumTlsVersion of the storage account.      |
| `parameters.storageAccountNetworkRuleSet`                            | The networkRuleSet of the storage account.         |
| `parameters.storageAccountNetworkRuleSet.bypass`                     | The bypass of the storage account.                 |
| `parameters.storageAccountNetworkRuleSet.defaultAction`              | The defaultAction of the storage account.          |
| `parameters.storageAccountNetworkRuleSet.ipRules`                    | The ipRules of the storage account.                |
| `parameters.storageAccountNetworkRuleSet.virtualNetworkRules`        | The virtualNetworkRules of the storage account.    |
| `parameters.storageAccountNetworkRuleSet.virtualNetworkRules.id`     | The id of the storage account.                     |
| `parameters.storageAccountNetworkRuleSet.virtualNetworkRules.action` | The action of the storage account.                 |
| `parameters.storageAccountNetworkRuleSet.virtualNetworkRules.state`  | The state of the storage account.                  |

**[🔼Back to Top](#table-of-contents)**

## Azure Resource Manager Template Variables

| Variable                                         | Description                                                      |
| ------------------------------------------------ | ---------------------------------------------------------------- |
| `variables`                                      | Variables are used to store values that are used multiple times. |
| `variables.storageAccountName`                   | The name of the storage account.                                 |
| `variables.storageAccountType`                   | The type of the storage account.                                 |
| `variables.storageAccountSku`                    | The SKU of the storage account.                                  |
| `variables.storageAccountKind`                   | The kind of the storage account.                                 |
| `variables.storageAccountAccessTier`             | The access tier of the storage account.                          |
| `variables.storageAccountEnableHttpsTrafficOnly` | The enableHttpsTrafficOnly of the storage account.               |
| `variables.storageAccountAllowBlobPublicAccess`  | The allowBlobPublicAccess of the storage account.                |

**[🔼Back to Top](#table-of-contents)**

## Azure Resource Manager Template Resources

| Resource                                      | Description                                                          |
| --------------------------------------------- | -------------------------------------------------------------------- |
| `resources`                                   | Resources are the components of your solution that will be deployed. |
| `resources.type`                              | The type of the resource.                                            |
| `resources.apiVersion`                        | The API version of the resource.                                     |
| `resources.name`                              | The name of the resource.                                            |
| `resources.location`                          | The location of the resource.                                        |
| `resources.tags`                              | The tags of the resource.                                            |
| `resources.properties`                        | The properties of the resource.                                      |
| `resources.properties.accountType`            | The accountType of the resource.                                     |
| `resources.properties.accessTier`             | The accessTier of the resource.                                      |
| `resources.properties.enableHttpsTrafficOnly` | The enableHttpsTrafficOnly of the resource.                          |
| `resources.properties.allowBlobPublicAccess`  | The allowBlobPublicAccess of the resource.                           |

**[🔼Back to Top](#table-of-contents)**

## Azure Resource Manager Template Outputs

| Output                                         | Description                                            |
| ---------------------------------------------- | ------------------------------------------------------ |
| `outputs`                                      | Outputs are used to return values from the deployment. |
| `outputs.storageAccountName`                   | The name of the storage account.                       |
| `outputs.storageAccountType`                   | The type of the storage account.                       |
| `outputs.storageAccountSku`                    | The SKU of the storage account.                        |
| `outputs.storageAccountKind`                   | The kind of the storage account.                       |
| `outputs.storageAccountAccessTier`             | The access tier of the storage account.                |
| `outputs.storageAccountEnableHttpsTrafficOnly` | The enableHttpsTrafficOnly of the storage account.     |

**[🔼Back to Top](#table-of-contents)**
