
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<h1>About</h1>} />
        </Routes>
    </BrowserRouter>
  )
}