<template>
  <div id="nav">
    <div id="nav-items">
      <router-link class="nav-item" to="/">Все котики</router-link> 
      <router-link class="nav-item" to="/liked">Любимые котики</router-link>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#nav {
  background-color: #2196F3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
}

#nav-items {
  margin-left: 62px;
}

#nav a {
  padding: 23px;
  display: inline-block;
  height: 18px;
  top: calc(50% - 18px/2);

  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.25px; 

  color: white; 
}

#nav a.router-link-exact-active {
  background-color: #1E88E5;
}

@media only screen and (max-width: 576px) {
  #nav-items {
  margin-left: 31px;
}
}

@media only screen and (max-width: 375px) {
  #nav-items {
  margin-left: 0px;
}
}
</style>
