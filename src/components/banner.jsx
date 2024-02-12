export default function Banner() {
  return (
    <section className="min-h-screen bg-[url('https://www.sol915.com.ar/wp-content/uploads/2023/12/duki-river.jpg')] bg-cover bg-fixed bg-center bg-blend-overlay bg-black/30 bg-gray-700">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-gray-200 font-extrabold sm:text-5xl">
            Ticket Sale.
            <strong className="font-extrabold text-purple-600 sm:block">
              {" "}
              Get Your Tickets.{" "}
            </strong>
          </h1>

          <p className="mt-4 text-gray-300 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-800 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
              href="#"
            >
              Contact
            </a>

            <a
              className="block w-full bg-gray-300 rounded px-12 py-3 text-sm font-medium text-purple-700 shadow hover:text-purple-900 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
