<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!--              <a class="nav-link active" aria-current="page" href="#">Home</a>-->
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <!--              <a class="nav-link" href="#">Link</a>-->
              <router-link to="/list" class="nav-link">List</router-link>
            </li>
            <!--            <li class="nav-item dropdown">-->
            <!--              <a-->
            <!--                class="nav-link dropdown-toggle"-->
            <!--                href="#"-->
            <!--                id="navbarDropdown"-->
            <!--                role="button"-->
            <!--                data-bs-toggle="dropdown"-->
            <!--                aria-expanded="false"-->
            <!--              >-->
            <!--                Dropdown-->
            <!--              </a>-->
            <!--              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
            <!--                <li><a class="dropdown-item" href="#">Action</a></li>-->
            <!--                <li><a class="dropdown-item" href="#">Another action</a></li>-->
            <!--                <li><hr class="dropdown-divider" /></li>-->
            <!--                <li>-->
            <!--                  <a class="dropdown-item" href="#">Something else here</a>-->
            <!--                </li>-->
            <!--              </ul>-->
            <!--            </li>-->
            <li class="nav-item">
              <!--              <a class="nav-link disabled">Disabled</a>-->
              <router-link to="/detail" class="nav-link">Detail</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>

  <!--  <div class="container mt-4">-->
  <!--    <h5>Vue test site</h5>-->
  <!--    <p>vue 3.0</p>-->
  <!--  </div>-->

  <div class="mt-4">
    <router-view :contents="contents" />
  </div>
  <!--  <List :contents="contents" />-->
</template>

<script>
import Blog from "@/assets/blog";
// import List from "@/components/List";

export default {
  name: "App",
  data: () => ({
    contents: Blog,
  }),
  components: {
    // List,
  },
};
</script>

<style>
#app {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
