import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `https://www.nawodmadhuwantha.com/`,
      lastModified: new Date(),
      priority: 1,
    }
  ]
}