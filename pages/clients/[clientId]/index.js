import { useRouter } from 'next/router';

function ClientProjects() {

  const router = useRouter();

  console.log(router.query);

  function loadProject() {
    // load data or some stuff
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: {id: 'mac', clientProjectId: "ProjectA"}
    })
  }
  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  )
};

export default ClientProjects;