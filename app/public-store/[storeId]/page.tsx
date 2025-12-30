import PublicStoreClient from "../../components/client store/PublicStoreClient";

interface Props {
  params: { storeId: string };
}

// Server component — receives storeId from the URL
export default function PublicStorePage({ params }: Props) {
  const { storeId } = params; // Next.js injects this from the dynamic route
  return <PublicStoreClient storeId={storeId} />;
}
