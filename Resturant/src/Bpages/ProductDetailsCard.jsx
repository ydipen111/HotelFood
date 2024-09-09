import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function ProductDetailsCard({ meal }) {
  return (
    <NavLink to={`/item-details/${meal?.idMeal}`}>

      {/* // <NavLink to="/blank">  */}



      <Card
        shadow={false}
        className="grid grid-cols-1 relative mmd:h-[20rem] h-[30rem] py-5 
        
        
         items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none object-contain "
          style={{ backgroundImage: `url(${meal?.strMealThumb})` }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >{meal?.strMeal}
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            {meal?.strMeal}
          </Typography>

        </CardBody>
      </Card>


    </NavLink>
  );
}


