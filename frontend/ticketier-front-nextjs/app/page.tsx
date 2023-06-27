import BreadCrumb from "@/components/bread-crumb/BreadCrumb";

const HomePage = () => {
  return (
    <div>
      <BreadCrumb
        items={[
          { label: "tickets", route: "/tickets" },
          { label: "edit", route: "/jghgj" },
          { label: "52", route: "/" },
        ]}
      />
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
