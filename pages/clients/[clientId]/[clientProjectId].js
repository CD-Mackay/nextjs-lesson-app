import { useRouter } from 'next/router';



function SelectedClientProjectPage() {

  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>I am SelectedClientProjectPage</h1> 
    </div>
  )
};

export default SelectedClientProjectPage;