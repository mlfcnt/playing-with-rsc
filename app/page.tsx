import Image from "next/image";
import { Counter } from "./component/Counter";
import { ImagesGrid } from "./component/ImagesGrid";

export default async function Home() {
  return (
    <div className="text-center max-w-md m-auto">
      <h1 className="font-extrabold text-7xl my-4">
        Hello world, from the server !
      </h1>
      <ImagesGrid
        srcs={[
          "https://cdn.pixabay.com/photo/2023/05/14/19/42/sky-7993656_1280.jpg",
          "https://cdn.pixabay.com/photo/2023/05/20/00/18/boat-8005603_1280.jpg",
          "https://cdn.pixabay.com/photo/2023/04/13/07/48/multi-storey-car-park-7921955_960_720.jpg",
          "https://cdn.pixabay.com/photo/2023/03/24/19/44/flowers-7874688_960_720.jpg",
          "https://cdn.pixabay.com/photo/2023/05/23/11/20/eastern-grey-kangaroo-8012540_960_720.jpg",
          "https://cdn.pixabay.com/photo/2023/05/21/19/45/rose-8009275_960_720.jpg",
          "https://cdn.pixabay.com/photo/2023/05/22/10/49/houses-8010401_960_720.jpg",
          "https://cdn.pixabay.com/photo/2023/04/02/12/40/mistletoe-7894574_960_720.jpg",
          "https://cdn.pixabay.com/photo/2023/05/17/03/41/pheasant-7998988_960_720.jpg",
          "https://cdn.pixabay.com/photo/2023/05/24/18/32/ladybug-8015502_960_720.jpg",
        ]}
      />

      <p>This is all rendered on the server 🤯</p>
      <br />
      <br />
      <p className="border border-x-8 border-black m-6" />
      <Counter />
    </div>
  );
}
