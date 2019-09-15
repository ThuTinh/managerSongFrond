import React from 'react'
import EditSong from './components/editSong/editSong'
import NotFoundPage from './pages/notFoundPage/notFoundPath'
import ManagerSongPage from './pages/managerSongPage/managerSongPage'
import HomePage from './pages/homePage/homePage'
const routes = [
    // {
    //     path:'/',
    //     axect: true,
    //     main : ()=> <HomePage></HomePage>
    // },
    {
        path:'/songs',
        axect: false,
        main : ()=> <ManagerSongPage></ManagerSongPage>
    },
    {
        path:'/song/add',
        axect: false,
        main: ({match, history})=> <EditSong match = {match} history = {history}></EditSong>
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