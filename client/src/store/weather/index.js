import * as actions from './actions.js';
import * as getters from './getters.js';
import * as mutations from './mutations.js';

const state = {
  searchOptions: [
    /*{
      title: 'San Francisco',
      location_type: 'City',
      woeid: 2487956,
      latt_long: '37.777119, -122.41964',
    },
    {
      title: 'San Diego',
      location_type: 'City',
      woeid: 2487889,
      latt_long: '32.715691,-117.161720',
    },*/
  ],
  selectedLocation: {
    /*consolidated_weather: [
      {
        id: 5546156105924608,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'WSW',
        created: '2022-01-28T18:59:01.853140Z',
        applicable_date: '2022-01-28',
        min_temp: 2.5300000000000002,
        max_temp: 9.505,
        the_temp: 8.934999999999999,
        wind_speed: 5.319509798091148,
        wind_direction: 250.16660269767468,
        air_pressure: 1035.0,
        humidity: 79,
        visibility: 7.33000526922771,
        predictability: 71,
      },
      {
        id: 6676450838052864,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'W',
        created: '2022-01-28T18:59:01.846739Z',
        applicable_date: '2022-01-29',
        min_temp: 5.85,
        max_temp: 13.415,
        the_temp: 12.254999999999999,
        wind_speed: 10.557952879946447,
        wind_direction: 274.6677210568365,
        air_pressure: 1027.0,
        humidity: 77,
        visibility: 10.88455917442138,
        predictability: 71,
      },
      {
        id: 5503671027630080,
        weather_state_name: 'Light Cloud',
        weather_state_abbr: 'lc',
        wind_direction_compass: 'WSW',
        created: '2022-01-28T18:59:02.469433Z',
        applicable_date: '2022-01-30',
        min_temp: 2.345,
        max_temp: 7.629999999999999,
        the_temp: 6.75,
        wind_speed: 4.795380052435113,
        wind_direction: 239.16721174114366,
        air_pressure: 1033.0,
        humidity: 68,
        visibility: 10.113437524854847,
        predictability: 70,
      },
      {
        id: 6058369778450432,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'NW',
        created: '2022-01-28T18:59:02.548071Z',
        applicable_date: '2022-01-31',
        min_temp: 4.5600000000000005,
        max_temp: 7.72,
        the_temp: 7.725,
        wind_speed: 12.679144374031656,
        wind_direction: 310.33417736024785,
        air_pressure: 1024.5,
        humidity: 59,
        visibility: 14.16353495585779,
        predictability: 73,
      },
      {
        id: 4862995151716352,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'W',
        created: '2022-01-28T18:59:01.859171Z',
        applicable_date: '2022-02-01',
        min_temp: 4.18,
        max_temp: 11.719999999999999,
        the_temp: 10.815,
        wind_speed: 10.09824752624937,
        wind_direction: 273.667246271919,
        air_pressure: 1021.5,
        humidity: 81,
        visibility: 12.72785681619343,
        predictability: 73,
      },
      {
        id: 5486681881837568,
        weather_state_name: 'Light Cloud',
        weather_state_abbr: 'lc',
        wind_direction_compass: 'WNW',
        created: '2022-01-28T18:59:04.145722Z',
        applicable_date: '2022-02-02',
        min_temp: 8.025,
        max_temp: 11.02,
        the_temp: 10.47,
        wind_speed: 6.438190169410642,
        wind_direction: 292.0,
        air_pressure: 1025.0,
        humidity: 66,
        visibility: 9.999726596675416,
        predictability: 70,
      },
    ],
    time: '2022-01-28T20:10:31.210053Z',
    sun_rise: '2022-01-28T07:44:46.175931Z',
    sun_set: '2022-01-28T16:42:42.802568Z',
    timezone_name: 'LMT',
    parent: {
      title: 'England',
      location_type: 'Region / State / Province',
      woeid: 24554868,
      latt_long: '52.883560,-1.974060',
    },
    sources: [
      {
        title: 'BBC',
        slug: 'bbc',
        url: 'http://www.bbc.co.uk/weather/',
        crawl_rate: 360,
      },
      {
        title: 'Forecast.io',
        slug: 'forecast-io',
        url: 'http://forecast.io/',
        crawl_rate: 480,
      },
      {
        title: 'HAMweather',
        slug: 'hamweather',
        url: 'http://www.hamweather.com/',
        crawl_rate: 360,
      },
      {
        title: 'Met Office',
        slug: 'met-office',
        url: 'http://www.metoffice.gov.uk/',
        crawl_rate: 180,
      },
      {
        title: 'OpenWeatherMap',
        slug: 'openweathermap',
        url: 'http://openweathermap.org/',
        crawl_rate: 360,
      },
      {
        title: 'Weather Underground',
        slug: 'wunderground',
        url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
        crawl_rate: 720,
      },
      {
        title: 'World Weather Online',
        slug: 'world-weather-online',
        url: 'http://www.worldweatheronline.com/',
        crawl_rate: 360,
      },
    ],
    title: 'London',
    location_type: 'City',
    woeid: 44418,
    latt_long: '51.506321,-0.12714',
    timezone: 'Europe/London',*/
  },
  selectedLocationHourly: {},
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};