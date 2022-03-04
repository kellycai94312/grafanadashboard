#!/bin/bash
set -xe

# assign an input if this is not run in the build pipeline
[ -n "$CI_BUILD_TOKEN" ] && interactive="false" || interactive="true"

# run container as current user and pass in all host env vars (minus PATH)
docker run --interactive=$interactive --tty --rm \
    --mount type=bind,source=/tmp/.X11-unix,target=/tmp/.X11-unix \
    --mount type=bind,source="${HOME}",target="${HOME}" \
    --mount type=bind,source="${PWD}",target="${PWD}" \
    --mount type=bind,source=/etc/passwd,target=/etc/passwd,readonly \
    --mount type=bind,source=/etc/shadow,target=/etc/shadow,readonly \
    --mount type=bind,source=/etc/group,target=/etc/group,readonly \
    --workdir "${PWD}" \
    --env "DISPLAY=${DISPLAY}" --env 'QT_X11_NO_MITSHM=1' \
    --label vsch.quality=stable --label vsch.remote.devPort=0 --label vsch.local.folder="${PWD}" \
    --privileged --cap-add=SYS_PTRACE --security-opt seccomp=unconfined \
    --user "$(id -u):$(id -g)" \
    $@
