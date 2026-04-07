import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function LoginSwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <img src="/img-1.jpg" className="h-screen w-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/img-2.jpg" className="h-screen w-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/img-1.jpg" className="h-screen w-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
export default function Login() {
  return (
    <div className="min-h-screen bg-bg text-text flex">
      {/* Left Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Sign in to your account</h2>

          <p className="text-sm text-gray-400 mb-8">
            Not a member? Start a 14 day free trial
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Email address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Remember */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a className="text-primary hover:underline">Forgot password?</a>
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-lg bg-primary text-white font-semibold">
            Sign in
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-border"></div>
            <span className="px-3 text-sm">Or continue with</span>
            <div className="flex-1 border-t border-border"></div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-4">
            <button className="border border-border py-3 rounded-lg">
              Google
            </button>

            <button className="border border-border py-3 rounded-lg">
              GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Swiper */}
      <div className="hidden lg:block lg:w-1/2">
        <LoginSwiper />
      </div>
    </div>
  );
}
