'use client';

import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/library/sanity';

export interface SanityContent {
  onboarding: {
    title: string;
    description: string;
    buttonText: string;
  };
  settings: {
    mainH1: string;
    logoBlackUrl: string;
    logoWhiteUrl: string;
    foodCategoryTitle: string;
    deliveryTimeTitle: string;
    priceRangeTitle: string;
    deliveryOptions: { label: string; id: string }[];
    priceOptions: { label: string; id: string }[];
  };
}

export const useAppContent = () => {
  return useQuery<SanityContent>({
    queryKey: ['sanity-global-content'],
    queryFn: async () => {
      return await sanityClient.fetch(`{
        "onboarding": *[_type == "onboarding"][0] {
          title,
          description,
          buttonText
        },
        "settings": *[_type == "siteSettings"][0] {
          mainH1,
          "logoBlackUrl": logoBlack.asset->url,
          "logoWhiteUrl": logoWhite.asset->url,
          foodCategoryTitle,
          deliveryTimeTitle,
          priceRangeTitle,
          deliveryOptions[] { label, id },
          priceOptions[] { label, id }
        }
      }`);
    },
    staleTime: Infinity, // download once, use forever
  });
};
