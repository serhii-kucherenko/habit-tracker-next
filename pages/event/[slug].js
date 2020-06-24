import { useRouter } from "next/router";
import DefaultLayout from "layouts/Default";

const Event = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <DefaultLayout>
      <h1>{slug}</h1>
    </DefaultLayout>
  );
};

export default Event;
