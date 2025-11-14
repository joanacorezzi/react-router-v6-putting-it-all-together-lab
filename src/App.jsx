import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import DirectorContainer from "./pages/DirectorContainer"
import DirectorList from "./pages/DirectorList"
import DirectorForm from "./pages/DirectorForm"
import DirectorCard from "./pages/DirectorCard"
import MovieForm from "./pages/MovieForm"
import MovieCard from "./pages/MovieCard"

const App = () => {
    return (
           <BrowserRouter>
      <NavBar />
       <Routes>
        {/* main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* parent route for all directors */}
        <Route path="/directors" element={<DirectorContainer />}>
          {/* list of directors */}
          <Route index element={<DirectorList />} />

          {/* new director form */}
          <Route path="new" element={<DirectorForm />} />

          {/* single director */}
          <Route path=":id" element={<DirectorCard />}>
            {/* new movie form */}
            <Route path="movies/new" element={<MovieForm />} />

            {/* movie detail */}
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App
