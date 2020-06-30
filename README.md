# DONE

- setup webpack typescript babel react and styled components
- assets compresssion and optimization
- heroku deploy
- SSR + Code Splitting (loadable/component)
- lint, stylelint
- DockerFile
- Ci/cd (gitlab ci)
- dockerhub push
- Sentry
- google cloud k8s configuration & deployment
- versioning (package and docker tag)
- jest setup

# TODOS

- e2e test setup
- git pre push/commit hooks
- Skills page dnd and small game related to skills, https://api.npmjs.org/downloads/range/2020-06-19:2020-06-19/react, https://github.com/npm/registry/blob/master/docs/download-counts.md
- cms
- blog, code highlight https://prismjs.com/
- security
- https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/, https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/
- https://prettier.io/docs/en/integrating-with-linters.html, https://www.npmjs.com/package/yaml-lint
- jenkins (optional/maybe)
- responsiveness
- caching (server-side)
- service worker/pwa
- staging
- formidable
- md editor
- retry react-hot-loader or react-fast-refresh
- cv generator
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
