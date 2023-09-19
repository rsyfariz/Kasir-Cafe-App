import Vue from 'vue'
import VueRouter from 'vue-router'

// ADMIN
import HomeAdmin from '../views/admin/HomeAdmin.vue'
import MejaAdmin from '../views/admin/MejaAdmin.vue'
import MenuAdmin from '../views/admin/MenuAdmin.vue'
import UserAdmin from '../views/admin/UserAdmin.vue'

// KASIR
import HomeKasir from '../views/kasir/HomeKasir.vue'
import MenuKasir from '../views/kasir/MenuKasir.vue'
import KeranjangKasir from '../views/kasir/KeranjangKasir.vue'
import OngoingKasir from '../views/kasir/OngoingKasir.vue'
import PrintKasir from '../views/kasir/PrintKasir.vue'

// MANAJER
import HomeManajer from '../views/manajer/HomeManajer.vue'
import FilterManajer from '../views/manajer/FilterManajer.vue'
import ProfitManajer from '../views/manajer/ProfitManajer.vue'

//LOGIN
import LoginView from '../views/LoginView.vue'
import NotFound from '../views/NotFound.vue'
import SalahAkses from '../views/SalahAkses.vue'




Vue.use(VueRouter)

const routes = [
  // ADMIN
  {
    path: '/homeadmin',
    name: 'admin',
    component: HomeAdmin,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/mejaadmin',
    name: 'meja',
    component: MejaAdmin,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/menuadmin',
    name: 'menu',
    component: MenuAdmin,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/useradmin',
    name: 'user',
    component: UserAdmin,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  // KASIR
  {
    path: '/homekasir',
    name: 'kasir',
    component: HomeKasir,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/menukasir',
    name: 'menu',
    component: MenuKasir,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangKasir,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/ongoing',
    name: 'ongoing',
    component: OngoingKasir,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/print/:code',
    name: 'print',
    component: PrintKasir,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  //  MANAJER
  {
    path: '/homemanajer',
    name: 'manajer',
    component: HomeManajer,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/filter',
    name: 'filter',
    component: FilterManajer,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/profit',
    name: 'profit',
    component: ProfitManajer,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manajer']
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/salahakses',
    name: 'salahakases',
    component: SalahAkses
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, form, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    const userRole = localStorage.getItem("role")
    if (!userRole) {
      next({
        path: '/'
      })
    } else {
      if (to.meta.allowedRoles.includes(userRole)) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    }
  } else {
    next();
  }
})
