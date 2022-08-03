import Loadable from '@/components/Loadable'
import MainLayout from '@/layouts/MainLayout'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const HomePage = Loadable(lazy(() => import('@/pages/Home')))
const BlogPage = Loadable(lazy(() => import('@/pages/Blog')))

const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: 'blog',
      element: <BlogPage />
    }
  ]
}

export default MainRoutes
