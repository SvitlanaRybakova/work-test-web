export default {
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  fields: [
    {
      name: 'mainH1',
      title: 'Main H1 Title',
      type: 'string',
      description: 'E.g., "Restaurant\'s"',
    },

    {
      name: 'logoBlack',
      title: 'Logo Black (SVG or Image)',
      type: 'image',
    },
    {
      name: 'logoWhite',
      title: 'Logo White (SVG or Image)',
      type: 'image',
    },

    {
      name: 'foodCategoryTitle',
      title: 'Food Category Filter Title',
      type: 'string',
      initialValue: 'Food Category',
    },
    {
      name: 'deliveryTimeTitle',
      title: 'Delivery Time Filter Title',
      type: 'string',
      initialValue: 'Delivery Time',
    },
    {
      name: 'priceRangeTitle',
      title: 'Price Range Filter Title',
      type: 'string',
      initialValue: 'Price Range',
    },

    {
      name: 'deliveryOptions',
      title: 'Delivery Time Options',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'option',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'id', title: 'ID / Value', type: 'string' },
          ],
        },
      ],
    },

    {
      name: 'priceOptions',
      title: 'Price Range Options',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'option',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'id', title: 'ID / Value', type: 'string' },
          ],
        },
      ],
    },
  ],
};
