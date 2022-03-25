import { useRouter } from 'next/router';

function ClientProjects() {

  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The projects of a given client</h1>
    </div>
  )
};

export default ClientProjects;