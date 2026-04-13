import { Button } from "@/components/ui/button";

export default function AboutBrand() {
  return (
    <section className="py-24 bg-[#FBFBFB]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Ảnh nghệ thuật - Black & White hoặc Tông trầm */}
          <div className="flex-1 w-full aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop"
              alt="Minimalist Design Philosophy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Nội dung kể chuyện */}
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              The Tiny Philosophy
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tighter leading-tight">
              Ít hơn <br /> nhưng <span className="text-red-500">tốt hơn.</span>
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Tại <strong>tiny</strong>, chúng tôi tin rằng vẻ đẹp thực sự nằm ở
              sự giản đơn. Không cầu kỳ, không phô trương, mỗi sản phẩm đều được
              chắt lọc từ những giá trị cốt lõi nhất để đồng hành cùng bạn trong
              cuộc sống hiện đại.
            </p>

            <div className="pt-4">
              <Button
                variant="outline"
                className="rounded-full px-8 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              >
                Tìm hiểu câu chuyện của chúng tôi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
