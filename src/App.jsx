import Navigation from "./components/Navigation";

function App() {
  const cards = [
    {
      title: "Lorem Ipsum",
      author: "John Doe",
      time: 25,
    },
    {
      title: "Lorem Ipsum",
      author: "John Doe",
      time: 25,
    },
    {
      title: "Lorem Ipsum",
      author: "John Doe",
      time: 25,
    },
  ];
  return (
    <>
      <Navigation />
      <main className="px-5 pb-6 pt-24 max-w-5xl mx-auto">
        <div className="flex justify-end gap-4">
          <a href="" className="text-rose-400 ">
            Log in
          </a>
          <a href="" className="text-rose-400 ">
            SignUp
          </a>
        </div>

        <header>
          <h2 className="text-gray-700 text-5xl font-semibold mb-3">Recipes</h2>
          <h3 className="text-2xl font-semibold">Lorem, ipsum dolor.</h3>
        </header>

        <div>
          <h4 className="font-bold mt-8 pb-4 border-b mb-4 border-gray-100">
            Latest Recipes
          </h4>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => {
              return (
                <div className="card" key={index}>
                  <img
                    src="https://images.pexels.com/photos/6454810/pexels-photo-6454810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="w-full object-cover h-48 sm:h-60"
                  />
                  <div className="p-4">
                    <span className="font-bold text-lg uppercase">
                      {card.title}
                    </span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by {card.author}
                    </span>
                  </div>
                  <span className="badge">25 min</span>
                </div>
              );
            })}
          </div>

          <h4 className="font-bold mt-8 pb-4 border-b mb-4 border-gray-100">
            Most Popular
          </h4>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => {
              return (
                <div className="card" key={index}>
                  <img
                    src="https://images.pexels.com/photos/6454810/pexels-photo-6454810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="w-full object-cover h-48 sm:h-60"
                  />
                  <div className="p-4">
                    <span className="font-bold text-lg uppercase">
                      {card.title}
                    </span>
                    <span className="block text-gray-500 text-sm">
                      Recipe by {card.author}
                    </span>
                  </div>
                  <span className="badge">25 min</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="btn bg-slate-800 p-2 cursor-pointer text-slate-100 border mt-6">
            Load More
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
