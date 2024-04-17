import Contact from '../Contact'
import About from '../About'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Header from './Header'

const Routing = () => {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    {/* <Route element={<Header />}> */}
                        <Route path="/" element={ <Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing
