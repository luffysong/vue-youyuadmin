#!/bin/bash

npm run build

####### CDN
cdnstr="/data/work/asset/youyuadmin"

#site1
rsync -rvltOD ./dist/* ali-rong-proxy-03:$cdnstr
rsync -rvltOD ./dist/* ali-rong-api-01:$cdnstr

#site2
rsync -rvltOD ./dist/* ali-rong-proxy-04:$cdnstr
rsync -rvltOD ./dist/* ali-rong-api-02:$cdnstr

###### 业务逻辑
pathstr="/data/work/frontend/prod/youyuadmin/dist"
if [ $1 = 'site3' ]; then
    ssh ali-rong-proxy-03 "mkdir -p $pathstr"
    rsync -rvltOD ./dist/* ali-rong-proxy-03:$pathstr
elif [ $1 = 'site4' ]; then
    ssh ali-rong-proxy-04 "mkdir -p $pathstr"
    rsync -rvltOD ./dist/* ali-rong-proxy-04:$pathstr
elif [ $1 = 'sim' ]; then
    ssh ali-rong-sim-01 "mkdir -p $pathstr"
    rsync -rvltOD ./dist/* ali-rong-sim-01:$pathstr
elif [ $1 = 'all' ]; then
    ssh ali-rong-proxy-03 "mkdir -p $pathstr"
    ssh ali-rong-proxy-04 "mkdir -p $pathstr"
    ssh ali-rong-sim-01 "mkdir -p $pathstr"
    rsync -rvltOD ./dist/* ali-rong-proxy-03:$pathstr
    rsync -rvltOD ./dist/* ali-rong-proxy-04:$pathstr
    rsync -rvltOD ./dist/* ali-rong-sim-01:$pathstr
fi
