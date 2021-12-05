import Main from '@/components/main'
import Info from '@/components/info'


export const routes = [

  {
    name: 'inicio',
    path: '/inicio',
    component: Main
  }, {
    path: '/info',
    name: 'info',
    component: Info,

  }
]