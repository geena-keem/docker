<div align="center"><h1>๐ณ DOCKER</h1></div>

**[DOCKER]**
```
1.Dockerfile 
 - Image๋ฅผ ์์ฑํ๊ธฐ ์ํ ์ค์  ํ์ผ
 - ์ดํ๋ฆฌ์ผ์ด์์ ๊ตฌ๋ํ๊ธฐ ์ํด ํ์ํ ํ์ผ
 - ํ๋ ์์ํฌ ๋ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น
 - ํ์ํ ํ๊ฒฝ ๋ณ์ ์ค์ 
 - ์คํ ์ค์  ์คํฌ๋ฆฝํธ

2.Image
 - dockerfiile(๋ฐํ์ ํ๊ฒฝ ์์คํ ํด, ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ฑ)์ ํตํด ์คํ๋๊ณ  ์๋ ์ดํ๋ฆฌ์ผ์ด์์ ์ํ๋ฅผ Image๋ก ๋ง๋ ๋ค.
 - Image๋ ๋ณ๊ฒฝ์ด ๋ถ๊ฐ๋ฅํ ๋ถ๋ณ์ ์ํ
 - ๋ ์ด์ด ์ ์ฅ ๋ฐฉ์ (image๊ฐ ๋ณํ  ๋๋ง๋ค ๋ค์ ๋ค์ด๋ฐ๊ฒ ๋๋ฉด image์ ์ฉ๋์ด ํฌ๊ธฐ ๋๋ฌธ์ ๋นํจ์จ์ ์ด๋ค. ์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด ๋ ์ด์ด ๋ฐฉ์์ ์ฌ์ฉ)

3.Container
 - ์ดํ๋ฆฌ์ผ์ด์์ image๋ฅผ ๋๋ฆฝ์ ์ผ๋ก ์ด์ฉํ  ์ ์๋๋ก ๋ค๋ฅธ ์คํ ํ๊ฒฝ๊ณผ์ ๊ฐ์ญ์ ๋ง๊ณ  ๊ฐ๋ณ์ ์ธ ํ์ผ ์์คํ ์์์ ์คํํ  ์ ์๊ฒ ํด์ค๋ค.
```

**[Dockerfile]**
```javascript
FROM node:16-alpine
// FROM baseImage
// docker image๋ฅผ ๋ง๋ค ๋ baseImage๋ฅผ ํตํด ๋ง๋ ๋ค.
// ๊ธฐ๋ณธ์ ์ผ๋ก ๋ฆฌ๋์ค ์ด๋ฏธ์ง๋ฅผ ๋ง๋๋ ๊ฒฝ์ฐ๋ ์๊ณ  node๊ฐ์ ๊ฒฝ์ฐ ๋ง๋ค์ด์ ธ ์๋ node image๋ฅผ ์ ๊ณตํ๋ค.
// 16์ node version, alpine์ ๋ฆฌ๋์ค์ ์ต์ ๋จ์์ version

WORKDIR /app
// baseImage์์ ์ด๋ค ๊ฒฝ๋ก์์ ์คํํ  ๊ฑด์ง ๋ช์ํด์ค๋ค.

COPY package.json package-lock.json ./
// package.json package-lock.json ํ์ผ๋ค์ ํ์ฌ ๊ฒฝ๋ก์ธ app์ผ๋ก copyํ๋ค.

RUN npm ci
// dependencies๋ฅผ ๋ช์ํ๊ณ  ์๋ package json์ ์นดํผํด ์จ ๋ค์์ ๋ช๋ น์ด RUN์ ์ด์ฉํด npm install์ ์คํํ์ฌ ๋ชจ๋  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ค์นํ๋ค.
// npm ci๋ก ํ๋ ๊ฒ์ ๊ถ์ฅํ๋ค. ๋ด๊ฐ ์ค์นํ ๋ฒ์ ์ด๋ ๋์ผํ๊ฒ ์ ์ฉ๋ ์ํ์์ ๋ค์ด์ ํ๊ธฐ ๋๋ฌธ (๋ฒ์ ์ด ๋ฌ๋ผ์ง๋ ๋ฌธ์ ์ ์ ํด๊ฒฐํ  ์ ์๋ค.)

COPY index.js .

ENTRYPOINT [ "node", "index.js" ]
// ENTRYPOINT ๋ช๋ น์ด๋ฅผ ์ฌ์ฉํด์ node์ index.js๋ฅผ ์คํ
```

**[๋ฐฐํฌ]**
<br />

<img src="image/1.png">

<br />

```javascript
// docker ๋น๋
docker build -f Dockerfile -t learn-docker .
```

<img src="image/2.png">

```javascript
//docker ์ด๋ฏธ์ง ๋ชฉ๋ก ํ์ธ
docker images
```

<img src="image/3.png">

```javascript
// docker ์คํํ๊ธฐ
docker run -d -p 8080:8080 learn-docker
```

<img src="image/4.png">

```javascript
// ์ปจํ์ด๋ ๋ชฉ๋ก ํ์ธ
docker ps
```

<img src="image/5.png">

```javascript
// ์ปจํ์ด๋ ๋ก๊ทธ ํ์ธ (์ ์์ ์ผ๋ก ๋์ํ๋์ง ํ์ธ)
docker logs CONTAINER ID
```

<br />

**[Image push]**

```
docker hub์ ๋ก๊ทธ์ธ ํ repository ์์ฑ
```
<img src="image/6.png">

```
image ์ด๋ฆ์ด repository์ ๊ฐ์์ผ ํ๊ธฐ ๋๋ฌธ์ ๋ณ๊ฒฝํด์ค์ผ ํ๋ค.
```

<img src="image/8.png">

```javascript
// docker tag ๋ช๋ น์ด๋ฅผ ํตํด ์ด๋ฏธ์ง ์ด๋ฆ์ ๋ณ๊ฒฝํด์ค๋ค.
docker tag learn-docker:latest geenagamm/docekr-example:latest
```

<img src="image/9.png">

```javascript
// push ํ๊ธฐ ์  ๋ก๊ทธ์ธ์ ํด์ค์ผ ํ๋ค.
docker login
```

<img src="image/10.png">

```javascript
// docker push
docker push geenagamm/docker-example:latest
```

**[REFERNCE]**
```
docker compose ๋ฐ ๋ช๋ น์ด ๋ฑ๋ฑ ๋ ์์๋ณด๊ณ  ์ถ์ผ๋ฉด ํ๋จ ๋งํฌ ์ฐธ๊ณ ํ๊ธฐ!
https://docs.docker.com/engine/reference/builder/
https://cultivo-hy.github.io/docker/image/usage/2019/03/14/Docker์ ๋ฆฌ/
```