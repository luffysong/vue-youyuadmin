#!/bin/bash

npm run build:$2;

pathstr="/data/docker/$2/work/frontend/prod/36jr/youyuadmin/dist";

ssh ali-rong-$1 "mkdir -p $pathstr";

rsync -rvltOD ./dist/* "www@ali-rong-$1:$pathstr";
