import { type SchemaTypeDefinition } from 'sanity';
import onboarding from '@/schemas/onboarding';
import siteSettings from '@/schemas/siteSettings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [onboarding, siteSettings],
};
