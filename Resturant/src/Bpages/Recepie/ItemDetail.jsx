import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const ItemDetail = () => {

  const { id } = useParams();
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id
        }
      });
      setData(response.data);
    } catch (err) {

    }

  }




  useEffect(() => {
    getData();

  }, []);

  const meal = data?.meals[0];
  const m = "https://www.youtube.com/watch?v=IO0issT0Rmc";

  const vidKey = meal?.strYoutube?.split('=')[1];
  console.log(vidKey);

  return (
    <div>

      <iframe width="420" height="315"
        src={`https://www.youtube.com/embed/${vidKey}`}>
      </iframe>


    </div>
  )
}
export default ItemDetail
