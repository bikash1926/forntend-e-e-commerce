import { useEffect,useState } from "react";
import Mainroutes from "./mainroute/Mainroutes";
import Nav from "./navbar/Nav";
import { asynccurrentuser } from "./store/actions/userAction";
import { useDispatch,useSelector } from "react-redux";
import { asyncloadproducts } from "./store/actions/productAction";
import Fotter from "./components/Fotter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlowMo } from "gsap/EasePack";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,SlowMo);


const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollSmoother.create({
        wrapper: ".smooth-wrapper",
        content: ".smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }
  }, []);

 const [location, setLocation] = useState();

  useEffect(() => {
    // Check if browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

   
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then((res) => res.json())
            .then((data) => {
              const address = data.address;
              // Combine city, state, country in a friendly way
              const humanLocation = `${address.state || ""}, ${address.country || ""}`;
              setLocation(humanLocation);
            })
            .catch(() => setLocation("Unable to fetch location"));
        },
        () => setLocation("Permission denied or location unavailable")
      );
    } else {
      setLocation("Geolocation is not supported by your browser");
    }
  }, []);



  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer.user);
 
  const products = useSelector((state) => state.productReducer.products);
  useEffect(()=>{
  !user && dispatch(asynccurrentuser())
  },[user])
  useEffect(()=>{
   products.length === 0 && dispatch(asyncloadproducts())
  },[products])


  return <div >
     <Nav location={location}/>
     <Mainroutes/>
     <Fotter/>
  </div>;
};

export default App;
