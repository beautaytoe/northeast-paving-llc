export interface ExternalLink {
  text: string;
  url: string;
}

export interface NeighborTown {
  name: string;
  slug: string;
}

export interface LocationData {
  town: string;
  slug: string;
  description: string;
  /** Rich intro paragraphs about the town — population, character, what it's known for */
  intro: string[];
  /** Specific neighborhoods, roads, areas where paving work is common */
  neighborhoods: string[];
  /** Real local landmarks/institutions with links to their actual websites */
  landmarkLinks: ExternalLink[];
  /** Common paving challenges specific to this area */
  localChallenges: string[];
  /** Why residents choose us — specific to this town */
  whyChooseUs: string[];
  /** Adjacent towns with internal links */
  neighbors: NeighborTown[];
  /** Local regulations or permits info (optional) */
  permitsInfo?: string;
  /** Link to town building department or government website */
  townWebsite?: ExternalLink;
}

import { locationsBatch1 } from "./locations-batch1";
import { locationsBatch2 } from "./locations-batch2";
import { locationsBatch3 } from "./locations-batch3";

export const locations: LocationData[] = [
  ...locationsBatch1,
  ...locationsBatch2,
  ...locationsBatch3,
];
