import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'

import HeaderComponent from './components/Header/HeaderComp'
import FooterComponent from './components/Footer/FooterComp'
import CEOPage from './pages/CEOPage'
import COOPage from './pages/COOPage'
import Layout from './pages/Layout'
import BlogPage from './pages/BlogPAge'





// import FooterComponent from './components/Footer/FooterComp'
// import HeaderComponent from './components/Header/HeaderComp'
// import MainComponent from './components/Main/MainComp'
// import AboutPage from './pages/AboutPage';
// import BlogPage from './pages/BlogPage';
// import ContactPage from './pages/ContactPage';
// import HomePage from './pages/HomePage';
// import PortfolioPage from './pages/PortfolioPage';

// function App() {
// console.log(location);
//   return (
//     <>
//       <HeaderComponent/>
//       {/* <MainComponent/> */}
//     {/* impure component because it is loading or using the javascript feature*/}
//      {
//        location.pathname==='/Home' &&  <HomePage/>
//      }
//      {
//       location.pathname==='/about' && <AboutPage/>
//      }
     
//      {
//       location.pathname==='/contact' && <ContactPage/>
//      }
//      {
//       location.pathname==='/blog' &&  <BlogPage/>
//      }
//      {
//       location.pathname==='/portfolio' && <PortfolioPage/>
//      }
//       <FooterComponent/>
//     </>
//   )
// }

function App(){
  console.log(location)
  return(
    <>
    {/* <HeaderComponent/> */}
       <BrowserRouter>
       {/* <HeaderComponent/> */}

      {/* <HashRouter> */}
          <Routes>
            <Route path='/' element={<Layout/>}>
              {/* index means default page = loaded default */}
                <Route index element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/about/ceo' element={<CEOPage/>}/>
                <Route path='/about/coo' element={<COOPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/portfolio' element={<PortfolioPage/>}/>
            </Route>
          </Routes>
          {/* </HashRouter> */}

         {/* <FooterComponent/> */}
       </BrowserRouter>
       {/* <FooterComponent/> */}
    </>
  )
}

export default App
