---
layout: ../../layouts/CheatSheet.astro
title: "Redis Cheatsheet"
---

## Synopsis

Redis (“REmote DIctionary Service”) is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries.

## Redis Data Types

| Data Type          | Description                                                                                                                                                                                    | Example                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| String             | String is the most basic data type used in Redis. Strings are binary safe, this means that a Redis string can contain any kind of data, for instance a JPEG image or a serialized Ruby object. | `SET key value`                               |
| List               | Lists are simply lists of strings, sorted by insertion order. You can add elements to a Redis List pushing new elements on the head (on the left) or on the tail (on the right) of the list.   | `LPUSH mylist "Hello"`                        |
| Set                | Sets are an unordered collection of Strings.                                                                                                                                                   | `SADD myset "Hello"`                          |
| Sorted Set         | Sorted sets are similar to Redis Sets but they are sorted.                                                                                                                                     | `ZADD myzset 1 "one"`                         |
| Hash               | Hashes are maps between string fields and string values, so they are the perfect data type to represent objects (eg. A User with a number of fields like name, surname, age, and so forth).    | `HSET myhash field "Hello"`                   |
| Bitmaps            | Redis bitmaps are special strings that can hold bits.                                                                                                                                          | `SETBIT mykey 7 1`                            |
| HyperLogLog        | HyperLogLog is a probabilistic data structure used in order to estimate the cardinality of a set.                                                                                              | `PFADD my-hll "Hello"`                        |
| Streams            | Redis Streams are an append-only data structure that can be used to implement log-like data structures.                                                                                        | `XADD mystream * name "Hello"`                |
| Geospacial Indexes | Redis geospatial indexes are used in order to index items using a longitude and latitude.                                                                                                      | `GEOADD Sicily 13.361389 38.115556 "Palermo"` |

```
## Various Keys:

____________________________
|     "just add abcd"      |  -> String
|__________________________|

____________________________
| 011011010110111101101101 |  -> Bitmap
|__________________________|

____________________________
|  {23334}{6634728}{916}   |  -> BitField
|__________________________|

____________________________
|  {a: "hello", b:"world"} |  -> Hash
|__________________________|

____________________________
|    [A -> B -> C -> D]    |  -> List
|__________________________|

____________________________
|       { A < B < C }      |  -> Set
|__________________________|

____________________________
|    {A:1, B:2, C:3}       |  -> Sorted Set
|__________________________|

____________________________
|     {A:(50.1,0,5)}       |  -> Geospatial
|__________________________|

____________________________
|     01101101 01101101    |  -> Hyperlog
|__________________________|

_______________________________________
| {id1=time1.seq((a:"foo",b:"bar"))}  |  -> Streams
|_____________________________________|

```

## Why is Redis Useful

Redis uses a design where the data is always read and modified from the random access memory (RAM) on a computer. It can also be stored on a disk-- in an inappropriate format for random data access-- but only to reconstruct the data in memory after the system restarts.

his is why Redis can be considered both a store and a cache. We can use it to decrease data access latency, increase throughput, and ease the load off our relational or NoSQL database and application.

Other benefits of Redis include simple authentication: designed to be only accessed by trusted clients, and can be restricted to certain interfaces.

<!-- <img src="https://architecturenotes.co/content/images/size/w1600/2022/07/Redis-v2-separate-05.jpg" alt="https://architecturenotes.co/redis/"></img> -->

## Redis Use Cases

### Redis as a cache instance

```
____________________________________________________
|                                                   |
|            ____________                           |
|            |   Redis  |                           |
|            |__________|                           |
|          / ↗️          ↖️ \                      |
| < 1-5   / /              \ \                      |
|  secs  / /                \ \                     |
|       ↙️ /                \ ↘️                   |
|  ____________             ____________ Postgres   |
|  |  Web App |  -------➡️ | Database |  MySQL      |
|  |__________| ⬅️-------- |__________|  Microsoft  |
|              30 or 60 secs             SQL Server |
|___________________________________________________|

```

Let's say we have a web application that takes too long too retrieve data from a database server. Suppose iit takes from 30 to 60 seconds to perform that operation.

This waiting time is a terrible experience for the user. To fix this problem we can leverage a Redis instance. Now, instead of directly querying the database and waiting 30 to 60 seconds, we can store data in a Redis cache instance and just query that instance running in the system memory (RAM).

The web server will first check if Redis has the data that it requires. If it doesn't have the data, this will be considered a cache miss. The web server will then query the database and retrieve the data that it needs. After that it will populate the Redis instance with that data-- so that the next time it needs to retrieve that data, it will get it from the Redis instance. We call this a cache hit.

This way we will bring down the total wait time to less than 5 seconds or even less than 1 second.

### Redis as a multi-model database

Redis can also be used as a fully fledged multi-model database that can be used to store and and keep multiple data formats. Let's look at one case where we would make a lot of things simpler and easier by implementing a database with it.

We have a complex social media application that uses multiple microservices and different types of databases including Relational, Graph and Document type databases, and also a cache.

As we can see all these data services need to be maintained and deployed which means it takes a lot of work, energy and experience to keep them in a good and running state. Another thing which we will face in the future with this architecture is scaling: when scaled all of the mentioned data services will have different requirements which can be an additional challenge for our team.

A good workaround for these problems is to use cloud platforms which comes with a drawback: we will have to pay for each managed data service separately. On the backend, we also face a problem: the application code gets very complex because we have to talk to multiple data services, and for each we need a separate connector and logic. This causes quite a few difficulties like higher latency due to each connection step between the services. This will add some latency to our application, and because of this, testing our application becomes challenging as well.

To solve all of these issues we can Redis as multi-model database. We will have only one data service so our microservices will need to talk to only a single data store, we will have less latency, less complicated code in our backend, we will be able to store multiple type of databases into one. Redis can also additionally act as a cache to improve the performance of our web application.

## Redis Basic Commands

### Strings

Strings are the most basic data type in Redis. They are used to store simple data like numbers, strings, and so forth. They are also used to store the values of keys in Redis.

| Command                   | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| SET key value             | Set the string value of a key                                      |
| GET key                   | Get the value of a key                                             |
| GETRANGE key start end    | Get a substring of the string stored at a key                      |
| GETSET key value          | Set the string value of a key and return its old value             |
| MGET key [key ...]        | Get the values of all the given keys                               |
| SETBIT key offset value   | Sets or clears the bit at offset in the string value stored at key |
| SETEX key seconds value   | Set the value and expiration of a key                              |
| SETNX key value           | Set the value of a key, only if the key does not exist             |
| SETRANGE key offset value | Overwrite part of a string at key starting at the specified offset |
| STRLEN key                | Get the length of the value stored in a key                        |

### Lists

Lists are simply lists of strings, sorted by insertion order. You can add elements to a Redis list using LPUSH, RPUSH, or using the generic command PUSH. You can also add multiple elements to a list using LPUSHX, RPUSHX, or using the generic command PUSHX.

| Command                               | Description                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------- |
| BLPOP key [key ...] timeout           | Remove and get the first element in a list, or block until one is available                     |
| BRPOP key [key ...] timeout           | Remove and get the last element in a list, or block until one is available                      |
| BRPOPLPUSH source destination timeout | Pop a value from a list, push it to another list and return it; or block until one is available |
| LINDEX key index                      | Get an element from a list by its index                                                         |
| LINSERT key BEFORE                    | Insert an element before or after another element in a list AFTER pivot value                   |
| LLEN key                              | Get the length of a list                                                                        |
| LPOP key                              | Remove and get the first element in a list                                                      |
| LPUSH key value [value ...]           | Prepend one or multiple values to a list                                                        |
| LPUSHX key value                      | Prepend a value to a list, only if the list exists                                              |
| LRANGE key start stop                 | Get a range of elements from a list                                                             |
| LREM key count value                  | Remove elements from a list                                                                     |
| LSET key index value                  | Set the value of an element in a list by its index                                              |
| LTRIM key start stop                  | Trim a list to the specified range                                                              |
| RPOP key                              | Remove and get the last element in a list                                                       |
| RPOPLPUSH source destination          | Remove the last element in a list, prepend it to another list and return it                     |
| RPUSH key value [value ...]           | Append one or multiple values to a list                                                         |
| RPUSHX key value                      | Append a value to a list, only if the list exists                                               |

### Sets

Sets are an unordered collection of strings. Redis Sets are similar to Python Sets. You can add elements to a Redis set using SADD. You can also add multiple elements to a set using SADD. You can also remove elements from a set using SREM.

| Command                               | Description                                                  |
| ------------------------------------- | ------------------------------------------------------------ |
| SADD key member [member ...]          | Add one or more members to a set                             |
| SCARD key                             | Get the number of members in a set                           |
| SDIFF key [key ...]                   | Subtract multiple sets                                       |
| SDIFFSTORE destination key [key ...]  | Subtract multiple sets and store the resulting set in a key  |
| SINTER key [key ...]                  | Intersect multiple sets                                      |
| SINTERSTORE destination key [key ...] | Intersect multiple sets and store the resulting set in a key |
| SISMEMBER key member                  | Determine if a given value is a member of a set              |
| SMEMBERS key                          | Get all the members in a set                                 |
| SMOVE source destination member       | Move a member from one set to another                        |
| SPOP key                              | Remove and return one or multiple random members from a set  |
| SRANDMEMBER key [count]               | Get one or multiple random members from a set                |
| SREM key member [member ...]          | Remove one or more members from a set                        |
| SUNION key [key ...]                  | Add multiple sets                                            |
| SUNIONSTORE destination key [key ...] | Add multiple sets and store the resulting set in a key       |

### Sorted Sets

Sorted sets are similar to regular sets with the addition of a score, which is used to sort the elements in the set. You can add elements to a Redis sorted set using ZADD. You can also add multiple elements to a sorted set using ZADD. You can also remove elements from a sorted set using ZREM.

| Command                                                     | Description                                                                       |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------- |
| ZADD key [NXXX] [CH] [INCR] score member [score member ...] | Add one or more members to a sorted set, or update its score if it already exists |
| ZCARD key                                                   | Get the number of members in a sorted set                                         |
| ZCOUNT key min max                                          | Count the members in a sorted set with scores within the given values             |
| ZINCRBY key increment member                                | Increment the score of a member in a sorted set                                   |

### Hashes

Hashes are maps between string fields and string values, so they are the perfect data type to represent objects (eg. A User with a number of fields like name, surname, age, and so forth). You can add elements to a Redis hash using HSET. You can also add multiple elements to a hash using HMSET. You can also remove elements from a hash using HDEL.

| Command                    | Description                             |
| -------------------------- | --------------------------------------- |
| HDEL key field [field ...] | Delete one or more hash fields          |
| HEXISTS key field          | Determine if a hash field exists        |
| HGET key field             | Get the value of a hash field           |
| HGETALL key                | Get all the fields and values in a hash |

### HyperLogLog

HyperLogLog is a probabilistic data structure used to estimate the cardinality of a set. It is very useful when you need to count the number of unique elements in a very large set. You can add elements to a Redis HyperLogLog using PFADD. You can also count the number of unique elements in a HyperLogLog using PFCOUNT.

| Command                         | Description                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| PFADD key element [element ...] | Adds the specified elements to the specified HyperLogLog.                                |
| PFCOUNT key [key ...]           | Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s). |

### Transactions

Transactions are a way to bundle multiple commands together and execute them atomically. If any command fails, the whole transaction is aborted and the connection is reset to its initial state. You can use MULTI to start a transaction, and then use EXEC to execute all the commands issued after MULTI. You can also use DISCARD to discard all the commands issued after MULTI.

| Command | Description                             |
| ------- | --------------------------------------- |
| DISCARD | Discard all commands issued after MULTI |
| EXEC    | Execute all commands issued after MULTI |
| MULTI   | Mark the start of a transaction block   |

### Pub/Sub

Publish/Subscribe is a pattern where senders (publishers) send messages to a channel, without knowing who the receivers (subscribers) are. Receivers can subscribe to a channel and receive messages sent to it. You can use PUBLISH to publish a message to a channel, and use SUBSCRIBE to subscribe to a channel.

| Command                             | Description                                              |
| ----------------------------------- | -------------------------------------------------------- |
| PUBLISH channel message             | Post a message to a channel                              |
| SUBSCRIBE channel [channel ...]     | Listen for messages published to the given channels      |
| UNSUBSCRIBE [channel [channel ...]] | Stop listening for messages posted to the given channels |

### Scripting

Scripts are Lua programs that are executed by the Redis server. You can use EVAL to evaluate a Lua script server side. You can also use EVALSHA to evaluate a Lua script server side using its SHA1 digest.

| Command                                          | Description                                         |
| ------------------------------------------------ | --------------------------------------------------- |
| EVAL script numkeys key [key ...] arg [arg ...]  | Execute a Lua script server side                    |
| EVALSHA sha1 numkeys key [key ...] arg [arg ...] | Execute a Lua script server side                    |
| SCRIPT EXISTS script [script ...]                | Check existence of scripts in the script cache      |
| SCRIPT FLUSH                                     | Remove all the scripts from the script cache        |
| SCRIPT KILL                                      | Kill the script currently in execution              |
| SCRIPT LOAD script                               | Load the specified Lua script into the script cache |

### Connection

Connection commands allow you to inspect the state of the connection. You can use AUTH to authenticate to the server. You can also use ECHO to echo the given string. You can also use PING to ping the server. You can also use QUIT to close the connection.

| Command       | Description                |
| ------------- | -------------------------- |
| AUTH password | Authenticate to the server |
| ECHO message  | Echo the given string      |
| PING          | Ping the server            |
| QUIT          | Close the connection       |

### Server

Server commands allow you to inspect and modify the Redis server’s configuration.

| Command      | Description                                 |
| ------------ | ------------------------------------------- |
| BGREWRITEAOF | Asynchronously rewrite the append-only file |
| BGSAVE       | Asynchronously save the dataset to disk     |

### Cluster

Cluster is a way to group multiple Redis instances together to form a single logical Redis server. Cluster commands allow you to inspect and modify the Redis cluster’s configuration.

| Command                               | Description                                                  |
| ------------------------------------- | ------------------------------------------------------------ |
| CLUSTER ADDSLOTS slot [slot ...]      | Assign new hash slots to receiving node                      |
| CLUSTER COUNT-FAILURE-REPORTS node-id | Return the number of failure reports active for a given node |
| CLUSTER COUNTKEYSINSLOT slot          | Return the number of local keys in the specified hash slot   |
| CLUSTER DELSLOTS slot [slot ...]      | Set hash slots as unbound in receiving node                  |
| CLUSTER FAILOVER [FORCE TAKEOVER]     | Forces a slave to perform a manual failover of its master.   |
| CLUSTER FORGET node-id                | Remove a node from the nodes table                           |
| CLUSTER GETKEYSINSLOT slot count      | Return local key names in the specified hash slot            |
| CLUSTER INFO                          | Provides info about Redis Cluster node state                 |
| CLUSTER KEYSLOT key                   | Returns the hash slot of the specified key                   |
| CLUSTER MEET ip port                  | Force a node cluster to handshake with another node          |
| CLUSTER NODES                         | Get Cluster config for the node                              |
| CLUSTER REPLICATE node-id             | Reconfigure a node as a slave of the specified master node   |
| CLUSTER RESET [HARD SOFT]             | Reset a Redis Cluster node                                   |
| CLUSTER SAVECONFIG                    | Forces the node to save cluster state on disk                |
| CLUSTER SET-CONFIG-EPOCH config-epoch | Set the configuration epoch in a new node                    |
| CLUSTER SETSLOT slot IMPORTING        | STABLE MIGRATING                                             |
| NODE [node-id]                        | Bind a hash slot to a specific node                          |
| CLUSTER SLAVES node-id                | List slave nodes of the specified master node                |
| CLUSTER SLOTS                         | Get array of Cluster slot to node mappings                   |

### Sentinel

Sentinel is a system for monitoring and failover of Redis instances. Sentinel is a distributed system composed of multiple independent processes that monitor multiple Redis instances.

| Command                                      | Description                                                        |
| -------------------------------------------- | ------------------------------------------------------------------ |
| SENTINEL get-master-addr-by-name master-name | Return the ip and port number of the master with that name         |
| SENTINEL MASTER master-name                  | Show a list of monitored masters and their state                   |
| SENTINEL MASTERS                             | Show a list of monitored masters and their state                   |
| SENTINEL MONITOR name ip port quorum         | This command will fail if the master name already exists.          |
| SENTINEL REMOVE name                         | Remove the specified master                                        |
| SENTINEL SENTINELS master-name               | Show a list of sentinel instances for this master, and their state |
| SENTINEL SET name option value               | Set the configuration of a master by name                          |
| SENTINEL SLAVES master-name                  | Show a list of slaves for this master, and their state             |

### Client

Client is a special category of commands that are not related to Redis per se, but are used to inspect and control the client connection.

| Command                        | Description                                         |
| ------------------------------ | --------------------------------------------------- |
| CLIENT GETNAME                 | Get the current connection name                     |
| CLIENT LIST                    | Get the list of client connections                  |
| CLIENT PAUSE timeout           | Stop processing commands from clients for some time |
| CLIENT SETNAME connection-name | Set the current connection name                     |
