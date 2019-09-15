import React from 'react'
import EditSong from './components/editSong/editSong'
import NotFoundPage from './pages/notFoundPage/notFoundPath'
import HomePage from './pages/homePage/homePage'
const routes = [
    {
        path:'/songs',
        axect: false,
        main : ()=> <HomePage></HomePage>
    },
    {
        path:'/song/add',
        axect: false,
        main: ()=> <EditSong></EditSong>
    },

    {
        path: '/song/edit/:id',
        exact: false,
        main: ({match})=><EditSong match = {match}></EditSong>
    },
    {
        path: '',
        axect: false,
        main:()=><NotFoundPage></NotFoundPage>
    }
]

export default routes;