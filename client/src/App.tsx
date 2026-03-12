import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import AllServices from "@/pages/services/AllServices";
import Disinfestation from "@/pages/services/Disinfestation";
import Pests from "@/pages/services/Pests";
import Cleaning from "@/pages/services/Cleaning";
import Waste from "@/pages/services/Waste";
import Water from "@/pages/services/Water";
import Gardening from "@/pages/services/Gardening";
import BlogList from "@/pages/blog/BlogList";
import BlogPost from "@/pages/blog/BlogPost";
import About from "@/pages/about/About";
import History from "@/pages/about/History";
import Careers from "@/pages/about/Careers";
import AllSectors from "@/pages/sectors/AllSectors";
import FoodProcessing from "@/pages/sectors/FoodProcessing";
import Facilities from "@/pages/sectors/Facilities";
import Logistics from "@/pages/sectors/Logistics";
import Hospitality from "@/pages/sectors/Hospitality";
import FoodRetail from "@/pages/sectors/FoodRetail";
import Pharmaceutical from "@/pages/sectors/Pharmaceutical";
import Offices from "@/pages/sectors/Offices";
import Restaurants from "@/pages/sectors/Restaurants";
import Locations from "@/pages/Locations";
import AllNationalAccounts from "@/pages/national-accounts/AllNationalAccounts";
import NationalOverview from "@/pages/national-accounts/Overview";
import NationalSolutions from "@/pages/national-accounts/Solutions";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/locations" component={Locations} />
      <Route path="/national-accounts" component={AllNationalAccounts} />
      <Route path="/national-accounts/overview" component={NationalOverview} />
      <Route path="/national-accounts/solutions" component={NationalSolutions} />
      <Route path="/services" component={AllServices} />
      <Route path="/services/disinfestation" component={Disinfestation} />
      <Route path="/services/pests" component={Pests} />
      <Route path="/services/cleaning" component={Cleaning} />
      <Route path="/services/waste" component={Waste} />
      <Route path="/services/water" component={Water} />
      <Route path="/services/gardening" component={Gardening} />
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
