import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header isDarkMode={true} setIsDarkMode={false} currentUser={null} />
    </div>
  );
};

export default Home;
