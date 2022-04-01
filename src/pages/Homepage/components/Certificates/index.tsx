import Pagetitle from 'components/elements/Pagetitle';
import Portfolio from 'components/elements/Portfolio';
import { FC, useEffect, useState } from 'react';

// const filters = [
//   {
//     id: 1,
//     text: 'Everything',
//   },
// ];

const allData = [
  {
    id: 1,
    title: 'AlgoExpert Certificate',
    category: 'Algo',
    image: 'images/certificates/AlgoExpert_Certificate.jpg',
    popupLink: ['images/certificates/AlgoExpert_Certificate.jpg'],
  },
];
interface CertificatesProps {}
const Certificates: FC<CertificatesProps> = () => {
  const [getAllItems] = useState(allData);
  // const [activeFilter, setActiveFilter] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  return (
    <section id="Certificates">
      <div className="container">
        <Pagetitle title="Certificates" />
        {/* <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={() => {}}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? 'text-capitalize current'
                      : 'text-capitalize'
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation> */}
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
