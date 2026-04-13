import { UserPen } from "lucide-react";

export default function InstagramFeed() {
  const feed = [
    {
      id: 1,
      url: "https://plus.unsplash.com/premium_photo-1669904021350-c59c580086e3?q=80&w=688&auto=format&fit=crop",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 4,
      url: "https://plus.unsplash.com/premium_photo-1681504446264-708b83f4ea12?q=80&w=687&auto=format&fit=crop",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header của section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tighter">
              @tiny.studio
            </h2>
            <p className="text-gray-400 text-sm mt-1 font-medium">
              Chia sẻ phong cách của bạn cùng chúng tôi
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors"
          >
            <UserPen className="w-5 h-5" />
            Theo dõi trên Instagram
          </a>
        </div>

        {/* Lưới ảnh phẳng (Flat Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {feed.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              {/* Ảnh */}
              <img
                src={post.url}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay khi hover - Phẳng và tối giản */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <UserPen className="text-white w-8 h-8 opacity-80" />
              </div>
            </div>
          ))}
        </div>

        {/* Thông tin thêm phía dưới */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
            Sử dụng hashtag <span className="text-red-500">#mytiny</span> để có
            cơ hội được xuất hiện
          </p>
        </div>
      </div>
    </section>
  );
}
