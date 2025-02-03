import React from 'react'
import SearchBar from './SearchBar'
import Footer from './Footer/main'
import ResultsPage from './Results/Main'
export default function Main() {
  return (
    <div className='container-fluid mt-2'>
     <SearchBar/>
     <ResultsPage/>
     <Footer/>
    </div>
  )
}
