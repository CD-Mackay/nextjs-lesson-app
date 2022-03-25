import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "Mac", name: "Ronald Mcdonald" },
    { id: "Frank", name: "Trashman" },
    { id: "Dennis", name: "Golden God" },
  ];

  const renderClients = () => {
    return clients.map((element, index) => {
      return (
        <li key={index}>
          <Link href={{
            pathname:'clients/[id]',
            query: {id: element.id}
          }}>{element.name}</Link>
        </li>
      );
    });
  };
  return (
    <div>
      <h1>I am ClientsPage</h1>
      <ul>{renderClients()}</ul>
    </div>
  );
}

export default ClientsPage;
