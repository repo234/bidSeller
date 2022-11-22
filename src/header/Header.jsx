import React from "react"
import "./Header.css"
import Head from "./Head"
import Navbar from "./Navbar"
import Search from "./Search"
import { useSelector } from "react-redux"

const Header = () => {
  const auth =useSelector(state=>state.user.auth)
  return (
    <>
      <Head />
      <Navbar />
     
    </>
  )
}

export default Header