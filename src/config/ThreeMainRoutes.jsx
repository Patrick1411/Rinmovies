import { Routes, Route } from 'react-router-dom'

import { Home, Catalogue } from '../pages' 
import Details from '../pages/detail/Details'
import { PrivacyPolicy, TermsOfUse, ContactUs } from '../information'

function ThreeMainRoutes() {
  return (
    <Routes>
        <Route 
            path='/:category/search/:keyword'
            element={<Catalogue />}    
        />

        <Route 
            path='/:category/:id'
            element={<Details />}    
        />

        <Route 
            path='/:category'
            element={<Catalogue />}    
        />

        <Route 
            path='/'
            exact
            element={<Home />}    
        />

        <Route path="/terms-of-use" element={<TermsOfUse/>} />
        <Route path="/privacy-policy" element={ <PrivacyPolicy />} />
        <Route path="/contact-us" element={ <ContactUs />} />
        {/* <Route path="/about-us" element={} />
        <Route path="/FAQ" element={} />
        <Route path="/premium" element={} />
        <Route path="/account" element={} />
        <Route path="/you-must-watch" element={} />
        <Route path="/recent-released" element={} />
        <Route path="/top-IMDB" element={} />
        <Route path="/help-center" element={} /> */}
        
    </Routes>
  )
}

export default ThreeMainRoutes
