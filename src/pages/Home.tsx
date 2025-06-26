import PageContainer from "components/PageContainer";
import RandomMeal from "components/RandomMeal";
import PageHeading from "components/PageHeading";

const Home = () => (
  <PageContainer>
    <PageHeading>Your Kitchen Companion – FoodExplorer Awaits!</PageHeading>

    <RandomMeal />
  </PageContainer>
);

export default Home;
