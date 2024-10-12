import { Card } from "../../components/ui";
import { formatNumber } from "../../utils";
import { cardsData } from "./data";

const Analytics = () => {
  return (
    <div>
      <div className="grid  min-[552px]:grid-cols-2 items-center flex-wrap sm:w-full gap-2">
        <Card>
          <div className="flex items-center gap-x-4">
            <p className="text-2xl font-medium">Total Blogs :</p>
            <p className="text-xl">{formatNumber(cardsData.total_blogs)}</p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-x-4">
            <p className="text-2xl font-medium">Published Blogs:</p>
            <p className="text-xl">{formatNumber(cardsData.published_blogs)}</p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-x-4">
            <p className="text-2xl font-medium">Drafts Blogs :</p>
            <p className="text-xl">{formatNumber(cardsData.draft_blogs)}</p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-x-4">
            <p className="text-2xl font-medium">Total Likes :</p>
            <p className="text-xl">{formatNumber(cardsData.total_likes)}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
