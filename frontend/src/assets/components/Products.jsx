const products = [
  {
    id: 1,
    name: "Sony PlayStation 5 Slim Disc Edition 1TB, Fortnite Cobalt Star ",
    href: "#",
    price: "₹54,999",
    imageSrc:
      "https://gameloot.in/wp-content/uploads/2024/11/Sony-PlayStation-5-Slim-Digital-Edition-1TB-Fortnite-Cobalt-Star-Bundle.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Gaming Desktop PC (Pre-owned) Mid Tower With AMD",
    href: "#",
    price: "₹60,000",
    imageSrc:
      "https://gameloot.in/wp-content/uploads/2024/10/NEW-CABINET-29.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Zotac Gaming GeForce RTX 4060 Twin Edge 8GB  ",
    href: "#",
    price: "₹21,000",
    imageSrc:
      "https://gameloot.in/wp-content/uploads/2024/11/Zotac-Gaming-GeForce-RTX-4060-Twin-Edge-8GB-GDDR6-ZT-D40600E-10M-Graphics-Card.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Intel Core i9 10850K Processor (Pre-owned)",
    href: "#",
    price: "₹45,000",
    imageSrc:
      "https://gameloot.in/wp-content/uploads/2023/06/Intel-Core-i9-10850K-Processor.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Example() {
  return (
    <>
      <div className="bg-white max-w-screen-2xl container mt-10 mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 dark:text-white">
          <h1 className="text-xl md:text-3xl mt-5 mb-5 font-bold md:mt-15 mb-10">Featured</h1>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <a key={product.id}  className="group border rounded-2xl dark:border rounded-2xl">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-fit: fill; group-hover:opacity-75 xl:aspect-[8/8]"
                />
                <h3 className="mt-4 px-3 text-sm text-gray-700 dark:text-white">{product.name}</h3>
                {/* <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p> */}
                <div className="card-actions mt-2 md:mt-1 px-3 mb-5 justify-between">
                  <div className="mt-1 text-lg font-medium text-gray-900 dark:text-white">{product.price}</div>
                  <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                    Buy Now
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
