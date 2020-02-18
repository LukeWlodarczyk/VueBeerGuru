<template>
  <nav class="nav">
    <div class="navbar-header">
      <router-link to="/" exact class="brand"
        >Beer<span class="highlight">Guru</span></router-link
      >
    </div>

    <ul class="navbar-nav">
      <router-link to="/search" tag="li" class="nav-item">
        <a>Search</a>
      </router-link>
      <router-link to="/my-beers" tag="li" class="nav-item">
        <a>My beers</a>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active.brand,
li.router-link-active a {
  color: #65d6ad;
  font-weight: 700;
}

li a:hover {
  color: #65d6ad;
}

li a,
.brand {
  color: #727272;
  transition: 0.3;
}
.brand {
  font-size: 38px;
}

.highlight {
  color: #65d6ad;
}

.nav {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #65d6ad;
}

.navbar-header {
  display: flex;
  font-weight: 700;
  align-items: center;
  height: 100%;
}

.navbar-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav-item {
  margin-left: 16px;
  font-size: 18px;
}
</style>
