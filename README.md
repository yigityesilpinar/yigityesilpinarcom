# DONE

- setup webpack typescript babel react and styled components
- assets compresssion and optimization
- heroku deploy
- ssr
- lint, stylelint
- DockerFile
- Ci/cd (gitlab ci)
- dockerhub push
- Sentry

# TODOS

- formidable
- md editor
- retry react-hot-loader or react-fast-refresh
- unit integration e2e
- cv generator
- sentry
- analytics

# HOW TO

## DOCKER

```bash
#!/bin/bash

docker build -t ${PROJECT_NAME}:local .
```


```bash
#!/bin/bash

# -d option for deamon mode
# -p is host:container
docker run -p 8080:8080 --name yigityesilpinarcomcontainer yigityesilpinarcom:local
# docker run  -p 8080:8080 --name yigityesilpinarcomcontainer yigityesilpinar/yigityesilpinarcom:latest
```

