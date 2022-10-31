import Layout from "../../components/Layout";
import ItemListContainer from "../../components/ItemListContainer";
const Home = () => {
  return (
    <Layout>
      <ItemListContainer greeting="Saludos desde el componente" />
    </Layout>
  );
};

export default Home;
