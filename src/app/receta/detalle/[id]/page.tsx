export const revalidate = 1000;

import { ViewDetail } from "@/modules/recipes/views";

interface PageProps {
  params: {
    id: string;
  };
}

const PageRecipeDetail = ({ params }: PageProps) => {
  const { id = "" } = params;
  return <ViewDetail id={id} />;
};
export default PageRecipeDetail;
