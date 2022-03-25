import { useRouter } from "next/router";

function PortfolioItem() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // Could send request to backend to fetch data with id of router.query.id
  return (
    <div>
      <h1>I am PortfolioItem</h1>
    </div>
  );
}

export default PortfolioItem;
