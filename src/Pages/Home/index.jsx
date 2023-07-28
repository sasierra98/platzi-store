import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {useEffect, useState} from "react";
import {ProductDetail} from "../../Components/ProductDetail/index.jsx";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=100');
        const data = await response.json();
        setItems(data);
      } catch (e) {
        console.error(`${e}`)
      }
    }
    fetchData();
  }, [])

  return (
    <Layout>
      Home
      {/*{console.log(items)}*/}
      <div className={'grid gap-4 grid-cols-4 w-full max-w-screen-lg'}>
        {
          items?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
