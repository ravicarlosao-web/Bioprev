import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Contact = lazy(() => import("@/pages/Contact"));
const Locations = lazy(() => import("@/pages/Locations"));
const AllNationalAccounts = lazy(() => import("@/pages/national-accounts/AllNationalAccounts"));
const NationalOverview = lazy(() => import("@/pages/national-accounts/Overview"));
const NationalSolutions = lazy(() => import("@/pages/national-accounts/Solutions"));
const AllServices = lazy(() => import("@/pages/services/AllServices"));
const Disinfestation = lazy(() => import("@/pages/services/Disinfestation"));
const Cleaning = lazy(() => import("@/pages/services/Cleaning"));
const Waste = lazy(() => import("@/pages/services/Waste"));
const Water = lazy(() => import("@/pages/services/Water"));
const Gardening = lazy(() => import("@/pages/services/Gardening"));
const Reports = lazy(() => import("@/pages/services/Reports"));
const BlogList = lazy(() => import("@/pages/blog/BlogList"));
const BlogPost = lazy(() => import("@/pages/blog/BlogPost"));
const About = lazy(() => import("@/pages/about/About"));
const History = lazy(() => import("@/pages/about/History"));
const Careers = lazy(() => import("@/pages/about/Careers"));
const AllSectors = lazy(() => import("@/pages/sectors/AllSectors"));
const FoodProcessing = lazy(() => import("@/pages/sectors/FoodProcessing"));
const Facilities = lazy(() => import("@/pages/sectors/Facilities"));
const Logistics = lazy(() => import("@/pages/sectors/Logistics"));
const Hospitality = lazy(() => import("@/pages/sectors/Hospitality"));
const FoodRetail = lazy(() => import("@/pages/sectors/FoodRetail"));
const Pharmaceutical = lazy(() => import("@/pages/sectors/Pharmaceutical"));
const Offices = lazy(() => import("@/pages/sectors/Offices"));
const Restaurants = lazy(() => import("@/pages/sectors/Restaurants"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-[#007cc3] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/locations" component={Locations} />
        <Route path="/national-accounts" component={AllNationalAccounts} />
        <Route path="/national-accounts/overview" component={NationalOverview} />
        <Route path="/national-accounts/solutions" component={NationalSolutions} />
        <Route path="/services" component={AllServices} />
        <Route path="/services/disinfestation" component={Disinfestation} />
        <Route path="/services/cleaning" component={Cleaning} />
        <Route path="/services/waste" component={Waste} />
        <Route path="/services/water" component={Water} />
        <Route path="/services/gardening" component={Gardening} />
        <Route path="/reports" component={Reports} />
        <Route path="/services/reports" component={Reports} />
        <Route path="/sectors" component={AllSectors} />
        <Route path="/sectors/food-processing" component={FoodProcessing} />
        <Route path="/sectors/facilities" component={Facilities} />
        <Route path="/sectors/logistics" component={Logistics} />
        <Route path="/sectors/hospitality" component={Hospitality} />
        <Route path="/sectors/food-retail" component={FoodRetail} />
        <Route path="/sectors/pharmaceutical" component={Pharmaceutical} />
        <Route path="/sectors/offices" component={Offices} />
        <Route path="/sectors/restaurants" component={Restaurants} />
        <Route path="/about" component={About} />
        <Route path="/about/history" component={History} />
        <Route path="/about/careers" component={Careers} />
        <Route path="/blog" component={BlogList} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
