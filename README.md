# Spotify DJ Set

> The goal of this application is to find create a 2 deck player Spotify DJ set. You need to be able to “mix” two tracks, by keeping two separate playlists. Use the Spotify Web API to do this: https://developer.spotify.com/web-api/ It supports cross-origin requests.     


I provided two micro services applications to handle back-end and front-end of this project. Back-end is just and express simple app due access and connect to spotify API's and assets.    



## Dependencies

<p><details>
  <summary><b>npm dependencies</b></summary>

| Dependency | Version |
| ---------- | ------- |
| vue        | ^2.5.13 |
| vue-router | ^3.0.1  |
| vuex       | ^3.0.1  |

</details></p>


### Run (Development)

<p><details>
  <summary><b>instructions</b></summary>

#### Using npm

```shell
npm install
npm run server
npm run dev
```

</details></p>

### Run (Production)

<p><details>
  <summary><b>instructions</b></summary>

#### Using npm

```shell
npm install 

npm run build
npm run server  
npm run deploy
```

Also Dockerfiles provided for deployment.

</details></p>

### Run (Test)

<p><details>
  <summary><b>Tests written by vue-jest</b></summary>

#### Using npm

```shell
npm run test
```


</details></p>

