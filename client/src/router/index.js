import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'

import OfficerIndex from '@/components/Officer/Index'
import OfficerCreate from '@/components/Officer/CreateOfficer'
import OfficerEdit from '@/components/Officer/EditOfficer'
import OfficerShow from '@/components/Officer/ShowOfficer'

import CommentIndex from '@/components/Comments/Index'

import Upload from '@/components/Utils/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/officer',
      name: 'officer',
      component: OfficerIndex
    },
    {
      path: '/officer/create',
      name: 'officer-create',
      component: OfficerCreate
    },{
      path: '/officer/edit/:officerId',
      name: 'officer-edit',
      component: OfficerEdit
    },
    {
      path: '/officer/:officerId',
      name: 'officer',
      component: OfficerShow
    },


    
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
