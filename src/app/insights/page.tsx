import { getAllPipelineArticles } from "@/lib/pipeline-content";
import { InsightsPageClient } from "@/components/InsightsPageClient";

export default function InsightsPage() {
  const pipelineArticles = getAllPipelineArticles();
  return <InsightsPageClient pipelineArticles={pipelineArticles} />;
}
