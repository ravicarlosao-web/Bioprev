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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={AllServices} />
      <Route path="/services/disinfestation" component={Disinfestation} />
      <Route path="/services/pests" component={Pests} />
      <Route path="/services/cleaning" component={Cleaning} />
      <Route path="/services/waste" component={Waste} />
      <Route path="/services/water" component={Water} />
      <Route path="/services/gardening" component={Gardening} />
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
