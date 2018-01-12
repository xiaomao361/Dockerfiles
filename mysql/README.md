add
---

```
# change the localtime and TZ
RUN cp -r -f  /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ENV TZ="Asia/Shanghai"
```

or you can use the official image with `-e TZ=Asia/Shanghai`


