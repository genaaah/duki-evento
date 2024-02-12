export default function Section1() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-gradient-to-r from-purple-400 to-purple-800 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto  max-w-xl text-center py-16">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-purple-600 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt=""
              src="https://d34ugyblrhxy34.cloudfront.net/wp-content/uploads/2018/06/06010558/7b829ecb52fc66b637aa3b8179484eee.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt=""
              src="https://www.cronica.com.ar/__export/1687990205288/sites/cronica/img/2023/06/28/03_duki_-_barcelona_adlerguido.jpg_792575817.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
