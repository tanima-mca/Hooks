import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import FormsubmituseReducer from './assessment folder/formsubmituseReducer'

//  import FormsubmissionuseState from './assessment folder/formsubmissionuseState'
//   import ForminputuseState from './assessment folder/forminputuseState'
// import Debounce from './assessment folder/debounce'
//  import Toggleboolean from './assessment folder/toggleboolean'
//   import Arraystateupdate from './assessment folder/arraystateupdate'

    // import Page1 from './hooks/useParams/page1'
    // import Page2 from './hooks/useParams/page2'
//  import FormuseState from './practiceproject/formuseState'
//  import FormuseReducer from './practiceproject/formuseReducer'
//  import CountryCapital from './practiceproject/countryCapital'
//  import Accordion from './practiceproject/accordion'
// import Practicereduce from './hooks/useReducer/Practicereduce'
// import Useinput from './hooks/useReducer/Useinput'
// import Colorchangereducer from './hooks/useReducerhook/Colorchangereducer'
// import Counterreducer from './hooks/useReducer/Counterreducer'
//  import Colorchange from './hooks/useReducer/Colorchange'
//  import Apihandle from './hooks/useEffects/Apihandle'
// import Apisearch from './hooks/useEffects/Apisearch'
// import Innput from './hooks/useState/input'
// import Increment from './hooks/useState/increment'
//  import ColorPickor from './hooks/useState/colorPickor'
//  import CountrySelector from './hooks/useState/CountrySelector'

// import Color from './Color'
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Parent from './hooks/useMemo/parent'
  //  import Child from './hooks/useContext/child'
  
  //  import Child2 from './hooks/useContext/child2'
  //  import Page from './hooks/useContext/page'
  //  import Child1 from './hooks/useContext/useContextApi/child1'
  //  import Parent from './hooks/useContext/useContextApi/parent'
  // import Child2 from './hooks/useContext/useContextApi/child2'
  //  import Child3 from './hooks/useContext/useContextApi/child3'
// import Parentprops from './hooks/props/parentprops'
//  import Functioalupdates from './assessment folder/functioalupdates'
//  import Page1 from './practiceproject/page1useParams'
//  import Page2 from './practiceproject/page2useParams'
//  import Page1useParams from './practiceproject/page1useParams'
//  import Page2useParams from './practiceproject/page2useParams'
// import Pageapi1 from './hooks/useParams/apifolder/pageapi1'
// import Pageapi2 from './hooks/useParams/apifolder/pageapi2'
function App() {

  return (
    <>
      {/* <Increment/> */}
      {/* <ColorPickor/>  */}
      {/* <CountrySelector/>  */}
      {/* <Color/> */}
      {/* <Innput/> */}
      {/* <Apihandle/>  */}
      {/* <Apisearch/>   */}
      {/* <Counterreducer/> */}
      {/* <Colorchange/>  */}
      {/* <Colorchangereducer/>  */}
      {/* <Practicereduce/> */}
      {/* <Useinput/> */}
       {/* <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2/:id" element={<Page2 />} />
        </Routes>
      </Router>  */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Pageapi1/>}/>
          <Route path="/pageapi2/:id" element={<Pageapi2/>}/>
        </Routes>
      </Router> */}
        {/* <FormuseState/>   */}
          {/* <FormuseReducer/>     */}
         {/* <Accordion/>   */}
        {/* <CountryCapital/>  */}
         {/* <Router>
          <Routes>
            <Route path="/" element={<Page1useParams/>}/>
            <Route path="/page2/:id" element={<Page2useParams/>}/>
          </Routes>
        </Router>  */}
          {/* <Functioalupdates/>  */}
          {/* <Toggleboolean/>   */}
          {/* <Arraystateupdate/>   */}
          {/* <FormsubmissionuseState/> 
          <ForminputuseState/>  */}
         {/* <Debounce/> */}
         {/* <FormsubmituseReducer/> */}
{/* 
          <Router>
         <Parent>
          <Routes>  
            <Route path="/" element={<Child/>}></Route> 
            <Route path="/child2" element={<Child2/>}></Route> 
            <Route path="/page" element={<Page/>}></Route> 
          </Routes>
          </Parent>
         </Router>  */}

         {/* <Parentprops/> */}
         {/* <Router>
        <Parent>
          <Routes>  
            <Route path="/" element={<Child1/>}></Route> 
            <Route path="/child2" element={<Child2/>}></Route>
            <Route path="/child3" element={<Child3/>}></Route>
          </Routes>
          </Parent>
         </Router>  */}
         <Parent/>


    </>
  )
}

export default App
