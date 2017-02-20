import styled from 'styled-components';
import { OutboundLink } from 'react-ga';

const Platforms = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: flex-start;
  padding: 0;

  li {
    display: flex;
    width: calc(100% / 3);
    padding: 8px;

    @media (min-width: 768px) {
      width: calc(100% / 7);
      padding: 0 8px;
    }
  }
`;

export default () => (
  <Platforms>
    <li>
      <OutboundLink
          eventLabel="Itunes Store"
          to="https://itunes.apple.com/us/movie/counter-histories-rock-hill/id1192431812"
          target="_blank">
        <img src="/static/images/itunes.png" alt="Itunes"/>
      </OutboundLink>
    </li>
    <li>
      <OutboundLink
          eventLabel="Amazon Video"
          to="http://a.co/hMguyJB"
          target="_blank">
        <img src="/static/images/amazon_video.png" alt="Amazon Video"/>
      </OutboundLink>
    </li>
    <li>
      <OutboundLink
          eventLabel="Google Play Video"
          to="https://play.google.com/store/movies/details/Counter_Histories_Rock_Hill?id=dpxgAwdVu9k&hl=en"
          target="_blank">
        <img src="/static/images/google_play.png" alt="Google Play Video"/>
      </OutboundLink>
    </li>
    <li><img src="/static/images/dish.png" alt="Dish"/></li>
    <li><img src="/static/images/vudu.png" alt="Vudu"/></li>
    <li>
      <OutboundLink
          eventLabel="Vimeo VOD"
          to="https://vimeo.com/ondemand/counterhistoriesrockhill"
          target="_blank">
        <img src="/static/images/vimeo_vod.png" alt="Vimeo VOD"/>
      </OutboundLink>
    </li>
    <li><img src="/static/images/shaw_media.png" alt="Shaw Media"/></li>
  </Platforms>
)