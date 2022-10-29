---
layout: ../../layouts/BlogLayout.astro
title: "DOTNET Cheatsheet"
---

The .NET command-line interface (CLI) is a cross-platform toolchain for developing, building, running, and publishing .NET applications.

The .NET CLI is included with the .NET SDK. For more information about how to install the .NET SDK, see Install .NET Core.

## CLI commands

The following commands are installed by default:

## Basic commands

| Command | Description |
| --- | --- |
| `new` | Initializes a sample .NET Core project in the current directory. |
| `restore` | Restores the dependencies and tools of a project. |
| `build` | Builds a project and all of its dependencies. |
| `publish` | Publishes a .NET Core project for deployment (including the runtime). |
| `run` | Compiles and immediately executes a .NET Core project. |
| `test` | Runs unit tests using the test runner specified in a project. |
| `vstest` | Runs unit tests using the test runner specified in a project. |
| `pack` | Creates a NuGet package. |
| `migrate` | Migrates a project.json based project to a msbuild based project. |
| `clean` | Cleans the output of a .NET Core project. |
| `sln` | Modifies a .sln file. |
| `help` | Displays help for a command. |
| `store` | Stores the specified assemblies in the runtime package store. |


**[🔼Back to Top](#table-of-contents)**

## Project modification commands

| Command | Description |
| --- | --- |
| `add package` | Adds a NuGet package reference to a project file. |
| `add reference` | Adds a project-to-project reference to a project file. |
| `remove package` | Removes a NuGet package reference from a project file. |
| `remove reference` | Removes a project-to-project reference from a project file. |
| `list reference` | Lists all project-to-project references in a project. |

**[🔼Back to Top](#table-of-contents)**

## Advanced commands

| Command | Description |
| --- | --- |
| `nuget delete` | Deletes a package from a NuGet package source. |
| `nuget locals` | Lists and manages local NuGet resources. |
| `nuget push` | Pushes a package to a NuGet package source. |
| `msbuild` | Runs Microsoft Build Engine (MSBuild) commands. |
| `dotnet install script` | Installs the .NET CLI tools and adds them to the PATH environment variable. |

**[🔼Back to Top](#table-of-contents)**

## Tool management commands

| Command | Description |
| --- | --- |
| `tool install` | Installs a global tool. |
| `tool list` | Lists the installed global tools. |
| `tool update` | Updates a global tool. |
| `tool restore` | Restores the tools and dependencies of a project. |
| `tool run` | Runs a global tool. |
| `tool uninstall` | Uninstalls a global tool. |


Tools are console applications that are installed from NuGet packages and are invoked from the command prompt. You can write tools yourself or install tools written by third parties. Tools are also known as global tools, tool-path tools, and local tools.

**[🔼Back to Top](#table-of-contents)**

## Command structure

CLI command structure consists of [the driver ("dotnet")](#driver), [the command](#command), and possibly command [arguments](#arguments) and [options](#options). You see this pattern in most CLI operations, such as creating a new console app, and running it from the command line. The following commands show when the console app was run from a directory named *my_app*:

```dotnetcli
dotnet new console
dotnet build --output ./build_output
dotnet ./build_output/my_app.dll
```

## Driver

The driver is named [dotnet](dotnet.md) and has two responsibilities, either running a [framework-dependent app](../deploying/index.md) or executing a command.

To run a framework-dependent app, specify the app after the driver, for example, `dotnet /path/to/my_app.dll`. When executing the command from the folder where the app's DLL resides, just execute `dotnet my_app.dll`. If you want to use a specific version of the .NET runtime, use the `--fx-version <VERSION>` option. For more information, see the [dotnet command](dotnet.md).

When you supply a command to the driver, `dotnet.exe` starts the CLI command execution process. For example:

```dotnetcli
dotnet build
```

First, the driver determines the version of the SDK to use. If there's no [global.json](global-json.md) file, the latest version of the SDK available is used. Depending on what is latest on the machine, the SDK's version might be either a preview or stable version. After the SDK version is determined, it executes the command.

### Command

The command performs an action. For example, `dotnet build` builds code. `dotnet publish` publishes code. The commands are implemented as a console application using a `dotnet {command}` convention.

### Arguments

The arguments you pass on the command line are the arguments to the command invoked. For example, when you execute `dotnet publish my_app.csproj`, the `my_app.csproj` argument indicates the project to publish and is passed to the `publish` command.

### Options

The options you pass on the command line are the options to the command invoked. For example, when you execute `dotnet publish --output /build_output`, the `--output` option and its value are passed to the `publish` command.

**[🔼Back to Top](#table-of-contents)**
