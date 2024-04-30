import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { Link } from "react-router-dom";

const Map = ({ setTooltipContent }) => {
  const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";
  return (
    <ComposableMap
      className=" h-full w-full "
      projectionConfig={{ rotate: [-10, 0, 0], scale: 145 }}
    >
      <ZoomableGroup>
        <Sphere stroke="gray" strokeWidth={0.5} />
        <Graticule stroke="gray" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Link to={`/detail/${geo.properties.name}`} key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    onMouseEnter={() => setTooltipContent(geo.properties.name)}
                    onMouseLeave={() => setTooltipContent("")}
                    style={{
                      default: {
                        fill: "#cececd",
                        outline: "none",
                      },
                      hover: {
                        fill: "rgb(54 197 94)",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#000",
                        outline: "none",
                      },
                    }}
                  />
                </Link>
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
