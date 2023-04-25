import useAxios from "../hooks/use-axios";

const MeteoAPI = ({ city }) => {
  const { data, loading, error } = useAxios(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9a002ff9f2e25cc8909796c07586517`,
    false
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div></div>;
  return data.data.weather[0].main;
};

export default MeteoAPI;
