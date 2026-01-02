import PublicStoreClient from "../../components/client store/PublicStoreClient";

interface Props {
  params: Promise<{ storeId: string }>;
}

// Server component
export default async function PublicStorePage({ params }: Props) {
  const { storeId } = await params; // ✅ unwrap the promise
  return <PublicStoreClient storeId={storeId} />;
}
