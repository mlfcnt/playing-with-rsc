import { Counter } from "./component/Counter";

export default async function Home() {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="text-center">
      <h1 className="font-extrabold text-7xl my-4">
        Hello world, from the server !
      </h1>
      <p>
        Today is {days[date.getDay()]}, {date.toLocaleDateString("fr")}
      </p>
      <p>This is all rendered on the server 🤯</p>

      <br />
      <br />
      <p className="border border-x-8 border-black m-6" />
      <Counter />
    </div>
  );
}
