import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Thiết kế thực sự tối giản và sang trọng. Tôi rất ấn tượng với chất lượng hoàn thiện của sản phẩm 'tiny'.",
    author: "Hoàng Minh",
    role: "Architect",
    rating: 5
  },
  {
    id: 2,
    content: "Dịch vụ chăm sóc khách hàng tuyệt vời. Giao hàng nhanh và đóng gói rất kỹ lưỡng, chuyên nghiệp.",
    author: "Linh Chi",
    role: "Graphic Designer",
    rating: 5
  },
  {
    id: 3,
    content: "Sản phẩm công nghệ nhưng mang tính thẩm mỹ cao. Nó làm góc làm việc của tôi trở nên tinh gọn hơn hẳn.",
    author: "Quốc Anh",
    role: "Software Engineer",
    rating: 4
  }
];

export default function Testimonials () {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-red-500"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">Trải nghiệm</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">
              Khách hàng <br /> nói về chúng tôi.
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-4xl font-bold text-gray-900">4.9/5</p>
            <div className="flex gap-1 mt-2 md:justify-end text-red-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-xs text-gray-400 mt-2 font-medium uppercase tracking-widest">Từ hơn 2,000 đánh giá</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-100 rounded-[2rem] overflow-hidden">
          {testimonials.map((item, index) => (
            <div 
              key={item.id} 
              className={`p-7 lg:p-12 flex flex-col justify-between hover:bg-[#FBFBFB] transition-colors duration-300 ${
                index !== testimonials.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-100" : ""
              }`}
            >
              <div>
                <Quote className="w-10 h-10 text-gray-100 mb-6" />
                <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
                  "{item.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
                  {item.author[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{item.author}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
