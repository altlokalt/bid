import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Success = React.lazy(() => import("pages/Success"));
const BidMore = React.lazy(() => import("pages/BidMore"));
const DetailsInfo = React.lazy(() => import("pages/DetailsInfo"));
const DetailsBidMore = React.lazy(() => import("pages/DetailsBidMore"));
const DetailsItemsBidOne = React.lazy(() => import("pages/DetailsItemsBidOne"));
const SuccessOne = React.lazy(() => import("pages/SuccessOne"));
const Typing = React.lazy(() => import("pages/Typing"));
const Bid = React.lazy(() => import("pages/Bid"));
const ConfirmTerms = React.lazy(() => import("pages/ConfirmTerms"));
const VerifyAddress = React.lazy(() => import("pages/VerifyAddress"));
const Hover = React.lazy(() => import("pages/Hover"));
const Unverifiedyet = React.lazy(() => import("pages/Unverifiedyet"));
const Info = React.lazy(() => import("pages/Info"));
const Attributes = React.lazy(() => import("pages/Attributes"));
const DetailsItemsBid = React.lazy(() => import("pages/DetailsItemsBid"));
const DetailsMultiItem = React.lazy(() => import("pages/DetailsMultiItem"));
const DetailsSingleItem = React.lazy(() => import("pages/DetailsSingleItem"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detailssingleitem" element={<DetailsSingleItem />} />
          <Route path="/detailsmultiitem" element={<DetailsMultiItem />} />
          <Route path="/detailsitemsbid" element={<DetailsItemsBid />} />
          <Route path="/attributes" element={<Attributes />} />
          <Route path="/info" element={<Info />} />
          <Route path="/unverifiedyet" element={<Unverifiedyet />} />
          <Route path="/hover" element={<Hover />} />
          <Route path="/verifyaddress" element={<VerifyAddress />} />
          <Route path="/confirmterms" element={<ConfirmTerms />} />
          <Route path="/bid" element={<Bid />} />
          <Route path="/typing" element={<Typing />} />
          <Route path="/successone" element={<SuccessOne />} />
          <Route path="/detailsitemsbidone" element={<DetailsItemsBidOne />} />
          <Route path="/detailsbidmore" element={<DetailsBidMore />} />
          <Route path="/detailsinfo" element={<DetailsInfo />} />
          <Route path="/bidmore" element={<BidMore />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
