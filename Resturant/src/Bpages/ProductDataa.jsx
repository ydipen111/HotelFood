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
    <div className="grid grid-cols-5 msm:grid-cols-3 "
    >

      {categories?.map(({
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription }, index) => (
        <Card className="w-56 "
          onClick={() => nav(`/item/${strCategory}`)}>
          <CardHeader shadow={false} floated={false} className="h-56 object-contain">
            <img
              src={strCategoryThumb}
              alt={strCategoryThumb}
              className="h-full w-full object-contain bg-none"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {strCategory}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {idCategory}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >{strCategoryDescription.substring(0, 100) + '....'}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
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
