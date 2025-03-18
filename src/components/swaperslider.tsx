import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const img = [
  {
    src: "https://nx.dev/_next/image?url=%2Fdocumentation%2Fblog%2Fimages%2F2023-01-12%2FucL7YQ2v8aaOy426soLPZA.png&w=3840&q=75",
  },
  {
    src: "https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2023/12/15122236/Spring-vs.jpg",
  },
  {
    src: "https://www.zdnet.com/a/img/resize/61cceb5f61c1dcb4e2d7cbe4c1b5821aef5c9d72/2014/09/05/b2ed410c-34ce-11e4-9e6a-00505685119a/docker-logo.png?auto=webp&width=1280",
  },
  {
    src: "https://blog.runcloud.io/wp-content/uploads/2021/06/what-is-github.png",
  },
  {
    src: "https://emendes.com/wp-content/uploads/2025/01/1v-moZEu-SekhA-nnR3x5Dg.png",
  },
  {
    src: "https://user-images.githubusercontent.com/72419533/204140906-94d6a875-e2c2-4ca7-af24-3f8ac2580ed3.PNG",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D4D12AQHw9SjCddUhjQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715021638881?e=2147483647&v=beta&t=t9mCD8AQaRo9x7liefaZ5ZRxFEDq3KrhepjoQ04imu0",
  },
];

export default function SwaperSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[90vh]"
      >
        {img.map((value, id) => (
          <SwiperSlide key={id}>
            <img src={value.src} alt="Imagem" className="w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
