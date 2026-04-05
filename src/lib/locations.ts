export interface ExternalLink {
  text: string;
  url: string;
}

export interface NeighborTown {
  name: string;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocationData {
  town: string;
  slug: string;
  description: string;
  population: number;
  county: string;
  lat: number;
  lng: number;
  proximity: string;
  intro: string[];
  neighborhoods: string[];
  landmarkLinks: ExternalLink[];
  localChallenges: string[];
  whyChooseUs: string[];
  neighbors: NeighborTown[];
  faqs: FAQItem[];
  permitsInfo?: string;
  townWebsite?: ExternalLink;
}

import { locationsBatch1 } from "./locations-batch1";
import { locationsBatch2 } from "./locations-batch2";
import { locationsBatch3 } from "./locations-batch3";
import { locationsBatch4 } from "./locations-batch4";
import { locationsBatch5 } from "./locations-batch5";

export const locations: LocationData[] = [
  ...locationsBatch1,
  ...locationsBatch2,
  ...locationsBatch3,
  ...locationsBatch4,
  ...locationsBatch5,
];
