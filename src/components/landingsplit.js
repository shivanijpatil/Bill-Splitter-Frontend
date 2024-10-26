
// import styled from "styled-components";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import LoginSignup from "./components/LoginSignup/LoginSignup1";
// import { Box, Button, Input, FormControl } from '@chakra-ui/react';

// import Navbar from "./Navbar";
// import FooterSection from "./Footer";



// // const AppContainer = styled.div`
// //   width: 100%;
// //   height: 100%;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// // `;

// function Landingsplit() {
//     return (


//         <Routes>
//             {/* <Route path="" element={<LoginSignup />} /> */}
//             <Route path="" element={< Navbar />} />
//             {/* <Route path="" element={< FooterSection />} /> */}

//         </Routes>


//     );
// }

// export default Landingsplit;

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Midsection from "./Midsection";

function Landingsplit() {
    return (
        <div className="landingsplit-container">
            <Navbar />
            <Midsection />
            <Footer />
        </div>
    );
}

export default Landingsplit;
