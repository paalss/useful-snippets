---
title: Finne prog med port
date: 2021-03-26T14:47:12.117Z
tags:
  - cli
---
Eksempel

## Scenario

Port er opptatt:

**Git bash**
```sh
$ docker-compose up -d
Creating network "lamp_default" with the default driver
Creating lamp_adminer_1 ...
Creating lamp-redis     ...
Creating lamp-database  ... error
Creating lamp_adminer_1 ... done
Creating lamp-redis     ... done
ccess a socket in a way forbidden by its access permissions.

ERROR: for database  Cannot start service database: Ports are not available: listen tcp 127.0.0.1:3306: bind: An attempt was made to access a socket in a way forbidden by its access permissions.
ERROR: Encountered errors while bringing up the project.
```

## Finne hvillket program som bruker det

```sh
$ netstat -ano | findstr '3306'
  TCP    0.0.0.0:3306           0.0.0.0:0              LISTENING       5028
  TCP    [::]:3306              [::]:0                 LISTENING       5028

$ tasklist | findstr '5028'
mysqld.exe                    5028 Services                   0      4,144 K
```

# Resultat
```
mysqld.exe
```

https://veerasundar.com/blog/2009/10/how-to-check-which-application-is-using-which-port/
