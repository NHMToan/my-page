import Pagetitle from 'components/elements/Pagetitle';
import Testimonial from 'components/elements/Testimonial';
import { FC } from 'react';
import Slider from 'react-slick';

const sliderData = [
  {
    id: 1,
    avatar: 'images/avatar-1.svg',
    userName: 'Kobe Bryant',
    review:
      'Everyting negative - pressure, challenges - is all an opportunity for me to rise.',
  },
  {
    id: 2,
    avatar: 'images/avatar-2.svg',
    userName: 'Michael Jordan',
    review:
      'I can accept failure, everyone fails at something. But I can not accept not trying.',
  },
  {
    id: 3,
    avatar: 'images/avatar-3.svg',
    userName: 'Goethe',
    review: 'No challenge shall never know all its capabilities.',
  },
];
interface QuotesProps {}
const Quotes: FC<QuotesProps> = () => {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="Quotes">
      <div className="container">
        <Pagetitle title="Quotes" />
        <Slider {...slidetSettings} className="Quotes-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Quotes;
