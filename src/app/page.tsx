import CompanyDescription from "@/app/components/organisms/companyDescription/companyDescription";
import CardForm from "@/app/components/templates/expandingFormCard/expandingFormCard";
import "./globals.css";

export const HomePage = () => {
  return (
    <main>
      <CardForm />
      <CompanyDescription />
    </main>
  );
};

export default HomePage;
