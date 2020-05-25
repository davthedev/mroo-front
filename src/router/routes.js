
const routes = [
  {
    path: '/',
    component: () => import('layouts/NoMenuLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SignIn.vue') },
    ]
  },

  {
    path: '/dashboard/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'main', component: () => import('pages/Dashboard.vue') },
      { path: 'students', component: () => import('pages/StudentsOverview.vue') },
      { path: 'instructors', component: () => import('pages/InstructorsOverview.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
