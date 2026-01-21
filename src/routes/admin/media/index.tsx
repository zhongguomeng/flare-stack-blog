import { createFileRoute } from "@tanstack/react-router";
import { MediaLibrary } from "@/features/media/components/media-library";

export const Route = createFileRoute("/admin/media/")({
  component: MediaLibrary,
  loader: () => ({
    title: "媒体库",
  }),
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.title,
      },
    ],
  }),
});
