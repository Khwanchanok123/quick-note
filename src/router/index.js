import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { ref } from "vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        requireAuth: true
      },
      component: HomeView
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue")
    },
    {
      path: "/add",
      name: "add",
      meta: {
        requireAuth: true
      },
      component: () => import("../views/AddNote.vue")
    }
  ]
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  const userData = ref();
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if ((userData.value = await getCurrentUser())) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
