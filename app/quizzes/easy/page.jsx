import Quiz from "@/app/components/quiz/Quiz";
import axios from "axios";

const Page = async () => {
  let { data } = await axios.get("https://ant.buckets.growsoc.arpan.xyz/questions/easy");

  return (
    <div>
      <Quiz questions={data} />
    </div>
  );
};

export default Page;