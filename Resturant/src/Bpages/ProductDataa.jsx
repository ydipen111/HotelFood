import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

const ProductDataa = ({ categories }) => {
  const nav = useNavigate()
  return (
    <div className="grid grid-cols-5 mmd:grid-cols-3 ssm:grid-cols-2  "
    >

      {categories?.map(({
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription }, index) => (

        <Card className="w-[280px] shadow-2xl "
          onClick={() => nav(`/item/${strCategory}`)}>

          <CardHeader shadow={false} floated={false} className="h-56 object-contain bg-red-100 hover:scale-110 hover:transform 0.9s ease">
            <img
              src={strCategoryThumb}
              alt={strCategoryThumb}
              className="h-full w-full object-contain bg-none"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between px-4">
              <Typography color="blue-gray" className="font-bold text-lg">
                {strCategory}
              </Typography>
              <Typography color="blue-gray" className="font-bold text-lg">
                {idCategory}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray-400"
              className="font-normal opacity-75 px-4 font-medium"
            >{strCategoryDescription.substring(0, 70) + '....'}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 ">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 "
            >
              Add to Cart
            </Button>
          </CardFooter>



        </Card>

      ))}
    </div>
  );
}

export default ProductDataa;
