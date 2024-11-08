type IDetailsPage = Promise<{ id: string }>;
const Appliance = async ({ params }: { params: IDetailsPage }) => {
  const { id } = await params;
  const newId = decodeURIComponent(id);
  return <div>{newId}</div>;
};

export default Appliance;
