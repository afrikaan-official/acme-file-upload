## Acme File Upload sample application for uploading files 

AcmeFileUpload is a simple web application for uploading certain files


## Project structure:

```
.
├── AcmeFileUpload
│   ├── AcmeFileUpload-API/
│   │   ├── appsettings.*.json
│   │   ├── Controllers/
│   │   ├── Program.cs
│   │   ├── uploads/
│   │   ├── ...
|   |   └── Dockerfile
│   ├── AcmeFileUpload-Web/
│   │   ├── src/ 
│   │   │    ├── main.ts
│   │   │    ├── ...
│   │   │    └── Dockerfile
│   │   └── ...
│   
└── docker-compose.yaml
```

[_docker-compose.yaml_](docker-compose.yaml)
```
version: "3.7"
services:
  api:
    build:
      dockerfile: Dockerfile
      context: AcmeFileUpload-API/.
    environment:
      ASPNETCORE_ENVIRONMENT: "Production"
    ports:
      - 5001:5001
    volumes:
    - "./uploads:/app/uploads:rw"
  web:
    build:
      dockerfile: Dockerfile
      context: AcmeFileUpload-Web/.
    ports:
      - 5000:80
```
The compose file defines an application with two services `web` and `api`.
When deploying the application, docker-compose maps the container port 5000 for `api` and port 5001 for `web`.



## Deploy with docker-compose

Go to root of the project and run this command:
```
$ docker-compose up -d

....
Docker Compose is now in the Docker CLI, try `docker compose up`

Building web
[+] Building 7.1s (8/13)
....
Building api
[+] Building 10s (8/1)
```


## Expected result

Listing containers must show two containers running and the port mapping as below:

```
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
833e452a9ad5   acmefileupload_api   "dotnet AcmeFileUplo…"   33 seconds ago   Up 27 seconds   0.0.0.0:5001->5001/tcp, :::5001->5001/tcp   acmefileupload_api_1
175d434cce7c   acmefileupload_web   "dotnet AcmeFileUplo…"   33 seconds ago   Up 26 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   acmefileupload_web_1
```

After the application starts, navigate to `http://localhost:5000` in your web browser to see web project and you have to see that it will create a folder called `uploads` in your file system.

That's where the files persisted. It is configured in `docker-compose.yml` via docker volumes.